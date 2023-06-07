import { SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { Identity } from "@semaphore-protocol/identity"
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers, id, toBeHex } from "ethers";
import { FORWARDER, PONTE, SCHEMA_ID } from "./consts";
import { connectSnap, getSnap, type Snap, load, save, requestPermissions} from "./snap";

import { Group } from "@semaphore-protocol/group"
import { SemaphoreEthers } from "@semaphore-protocol/data"
import { generateProof } from "@semaphore-protocol/proof"
import multihash from 'multihashes';

const metamask_provider = await detectEthereumProvider();

// @ts-ignore
const provider = new ethers.BrowserProvider(metamask_provider);

export const has_provider = async (): Promise<boolean> => {
    if (metamask_provider === null) {
        return false;
    }

    if (!metamask_provider.isMetaMask) {
        return false;
    }

    return (
        // @ts-ignore
        await metamask_provider?.request({ method: 'web3_clientVersion' })
    )?.includes('flask');
}

export const get_snap = async (): Promise<Snap> => {
    if (typeof await getSnap(metamask_provider) === "undefined") {
        await connectSnap(metamask_provider);
    }

    return getSnap(metamask_provider);
}

if (await has_provider()) {
    metamask_provider.on("accountsChanged", () => location.reload());
    metamask_provider.on("chainChanged",    () => location.reload());
}

export const connected = async (): Promise<boolean> => {
    return (await provider.send("eth_accounts", [])).length > 0;
}

export const get_address = async () => provider.send("eth_accounts", [])

export const connect = async () => {
    await provider.send("eth_requestAccounts", []);
}

export const get_identity = async (): Promise<Identity> => {
    await get_snap();

    const has_permission = await requestPermissions(metamask_provider);
    if (!has_permission) {
        alert("Must require permission")
    }

    let id = await load(metamask_provider);

    if (id === null) {
        const identity = new Identity();
        id = identity.toString()

        await save(metamask_provider, id);
    }

    return new Identity(id);
}

export const cidTOSignal = (cid: string): bigint => {
    const tmpArray = multihash.fromB58String(cid);
    const b58decoded = multihash.decode(tmpArray).digest;
    const tmpHexStr = ethers.hexlify(b58decoded);
    const signal = BigInt(tmpHexStr);

    return signal;
}

const fromHexString = (hexString) =>
  Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

export const signalToCid = (signal: bigint): string => {
    let tmpBNtoHex = signal.toString(16);
    while (tmpBNtoHex.length < 64) {
        tmpBNtoHex = "0" + tmpBNtoHex;
    }
    const tmpHextoBytes = fromHexString(tmpBNtoHex);
    const tmpBytestoArr = multihash.encode(tmpHextoBytes, "sha2-256");
    const mhBuf = multihash.encode(tmpBytestoArr, "sha2-256");
    const decodedBuf = multihash.decode(mhBuf);
    const cid = multihash.toB58String(decodedBuf.digest);

    return cid;
}

type review = {
    title: string,
    rating: number,
    description: string
}

export const send_review = async (groupID: number, review: review) => {
    const identity = await get_identity();

    const signal = BigInt(ethers.encodeBytes32String(review.title));

    const semaphoreEthers = new SemaphoreEthers("sepolia");
    const members = await semaphoreEthers.getGroupMembers(`${groupID}`);
    const group = new Group(groupID, 20, members);

    const externalNullifier = groupID;

    const fullProof = await generateProof(identity, group, externalNullifier, signal, {
        zkeyFilePath: "/semaphore.zkey",
        wasmFilePath: "/semaphore.wasm"
    });

    const ponte = new ethers.Contract(PONTE.ADDRESS, PONTE.ABI, provider);

    const with_signer = ponte.connect(await provider.getSigner()) as any;

    await with_signer.sendReview(groupID, signal, fullProof.merkleTreeRoot, fullProof.nullifierHash, fullProof.proof);
}

export const get_reviews = async (groupID: number) => {
    const semaphore = new SemaphoreEthers("sepolia")

    return (await semaphore.getGroupVerifiedProofs(`${groupID}`)).map( ({signal}) => ethers.decodeBytes32String(toBeHex(signal)) )
}

export type attestation = {
    title: string,
    description: string,
}

export const create_attestation = async (user_id: string, data: attestation) => {
    const contract = new ethers.Contract(FORWARDER.ADDRESS, FORWARDER.ABI);

    const schemaEncoder = new SchemaEncoder("string title, string description");
    const encodedData = schemaEncoder.encodeData([
        { name: "title", value: data.title, type: "string" },
        { name: "description", value: data.description, type: "string" },
    ]);

    await contract.attest({
        schema: SCHEMA_ID,
        data: {
            recipient: user_id,
            expirationTime: 0,
            revocable: true,
            data: encodedData,
            value: 0,
        },
    });
}
