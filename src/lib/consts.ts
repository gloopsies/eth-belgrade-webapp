export const PONTE = {
  ADDRESS: "0x1dd8f70cf40f014a1ef361545811329d423b2f60",
  ABI: [
    'constructor(address _semaphoreAddress, address _verifierAddress, address _schemaAddress, address _eas)',
    'event MessageSent(uint256 message, uint256 groupId)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'function attest(tuple(bytes32 schema, tuple(address recipient, uint64 expirationTime, bool revocable, bytes32 refUID, bytes data, uint256 value) data) _request) payable',
    'function attesters(address) view returns (bool)',
    'function createGroup(uint256 _groupId, bytes32 _schemaId, address _attester, string _uri)',
    'function eas() view returns (address)',
    'function getGroup(uint256 _groupId) view returns (tuple(uint256 id, bytes32 schema, address attester, string uri))',
    'function groups(uint256) view returns (uint256 id, bytes32 schema, address attester, string uri)',
    'function ids(uint256) view returns (uint256)',
    'function joinGroup(uint256 _identityCommitment, uint256 _groupId, bytes32 _uid)',
    'function owner() view returns (address)',
    'function registerNewSchema(string _schema, address _resolverAddress, bool _revocable)',
    'function removeMember(bytes32 _uid, uint256 _groupId, uint256 _identityCommitment, uint256[] _proofSiblings, uint8[] _proofPathIndices)',
    'function renounceOwnership()',
    'function revoke(tuple(bytes32 schema, tuple(bytes32 uid, uint256 value) data) _request)',
    'function schemaRegister() view returns (address)',
    'function semaphore() view returns (address)',
    'function sendMessage(uint256 message, uint256 nullifierHash, uint256 _groupId, uint256 merkleTreeDepth, uint256 merkleTreeRoot, uint256[8] proof)',
    'function sendReview(uint256 groupId, uint256 review, uint256 merkleTreeRoot, uint256 nullifierHash, uint256[8] proof)',
    'function transferOwnership(address newOwner)',
    'function verifier() view returns (address)'
  ]
}

export const FORWARDER = {
  ADDRESS: "0x15CD71b5BC7FEb1e5703B92841734050C678BB49",
  ABI: [
    'constructor()',
    'function execute(tuple(address from, address to, uint256 value, uint256 gas, uint256 nonce, bytes data) req, bytes signature) payable returns (bool, bytes)',
    'function getNonce(address from) view returns (uint256)',
    'function verify(tuple(address from, address to, uint256 value, uint256 gas, uint256 nonce, bytes data) req, bytes signature) view returns (bool)'
  ]
};

export const SCHEMA_ID = "0xddb716908f0c1766fe4ddaa8d02325ed029a93a2c53d3f582a618a122a4e037d";

export const SNAP_ORIGIN = "local:http://localhost:8080";

export const RELAY_URL = "https://api.defender.openzeppelin.com/autotasks/cb47b85d-67f4-4989-aba9-169c29831f4b/runs/webhook/caf35ccc-a2e2-4bb2-bbf4-92e0e7ae5b5e/BAaCxHLKZqUT5gpDeVptAu"
