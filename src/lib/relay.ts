import ethSigUtil from "eth-sig-util";
import { ethers } from "ethers";
import { FORWARDER, RELAY_URL } from "./consts";

const EIP712Domain = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'chainId', type: 'uint256' },
  { name: 'verifyingContract', type: 'address' }
];

const ForwardRequest = [
  { name: 'from', type: 'address' },
  { name: 'to', type: 'address' },
  { name: 'value', type: 'uint256' },
  { name: 'gas', type: 'uint256' },
  { name: 'nonce', type: 'uint256' },
  { name: 'data', type: 'bytes' },
];

function getMetaTxTypeData(chainId, verifyingContract) {
  return {
    types: {
      EIP712Domain,
      ForwardRequest,
    },
    domain: {
      name: 'MinimalForwarder',
      version: '0.0.1',
      chainId,
      verifyingContract,
    },
    primaryType: 'ForwardRequest',
  }
};

async function signTypedData(signer, from, data) {
  // If signer is a private key, use it to sign
  if (typeof (signer) === 'string') {
    const privateKey = Buffer.from(signer.replace(/^0x/, ''), 'hex');
    return ethSigUtil.signTypedMessage(privateKey, { data });
  }

  // Otherwise, send the signTypedData RPC call
  // Note that hardhatvm and metamask require different EIP712 input
  // const isHardhat = data.domain.chainId == 31337;
  // const [method, argData] = isHardhat
  //   ? ['eth_signTypedData', data]
  //   : ['eth_signTypedData_v4', JSON.stringify(data)]
  // return await signer.send(method, [from, data]);

  const infuraProvider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/d9cdb64219b94ef3a7cd221d77a02400")
  const {types, domain} = getMetaTxTypeData(11155111, createInstance(infuraProvider));
  console.log({types, domain, data: JSON.stringify(data)})
  const bla = await (await signer.getSigner()).signTypedData(types, domain, JSON.stringify(data))
  console.log("ovdeopet")
  return bla;
}

async function buildRequest(forwarder, input) {
  const nonce = await forwarder.getNonce(input.from).then(nonce => nonce.toString());
  return { value: 0, gas: 1e6, nonce, ...input };
}

async function buildTypedData(forwarder, request) {
  // const chainId = await forwarder.provider.getNetwork().then(n => n.chainId);
  // console.log(chainId)
  const typeData = getMetaTxTypeData(11155111, await forwarder.getAddress());
  return { ...typeData, message: request };
}

async function signMetaTxRequest(signer, forwarder, input) {
  const request = await buildRequest(forwarder, input);
  const toSign = await buildTypedData(forwarder, request);
  const signature = await signTypedData(signer, input.from, toSign);
  return { signature, request };
}

export function createInstance(provider) {
  return new ethers.Contract(FORWARDER.ADDRESS, FORWARDER.ABI, provider);
}

export async function sendReview({ registry, provider, signer }, { groupID, review, root, nulifierHash, proof }) {
  const infuraProvider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/d9cdb64219b94ef3a7cd221d77a02400")

  const forwarder = createInstance(infuraProvider);
  const from = await signer.getAddress();
  const data = registry.interface.encodeFunctionData('sendReview', [groupID, review, root, nulifierHash, proof]);
  const to = await registry.getAddress();

  const request = await signMetaTxRequest(signer.provider, forwarder, { to, from, data });

  return fetch(RELAY_URL, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'Content-Type': 'application/json' },
  });
}
