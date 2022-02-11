pragma ton-solidity 0.49.0;

struct Meta {
    uint128 height;
    uint128 width;
    uint128 duration;
    string extra;
    string json;
}

interface IData {
    function transfer(address addrTo) external;
    function deployDataChunk(bytes chunk, uint128 chunkNumber) external;
    function setRoyalty(uint128 royalty) external;
}
