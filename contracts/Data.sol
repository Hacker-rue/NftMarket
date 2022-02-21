pragma ton-solidity 0.49.0;

import './resolvers/IndexResolver.sol';
import './resolvers/DataChunkResolver.sol';

import './interfaces/IData.sol';

import './libraries/Errors.sol';
import './libraries/Constants.sol';


contract Data is IData, IndexResolver, DataChunkResolver {

    string _name;
    string _descriprion;
    address _addrOwner;
    address _addrAuthor;
    uint128 _createdAt;
    address _addrRoot;
    uint256 _contentHash;
    string _mimeType;
    uint8 _chunks;
    uint128 _chunkSize;
    uint128 _size;
    Meta _meta;

    uint256 static public _id;

    bool public _deployed;

    uint128 _royalty;

    address _addrApproved;

    constructor(
        string name,
        string descriprion,
        address addrOwner,
        address addrAuthor,
        uint256 contentHash,
        string mimeType,
        uint8 chunks,
        uint128 chunkSize,
        uint128 size,
        TvmCell codeIndex,
        TvmCell codeDataChunk,
        Meta meta,
        address sendGasToAddr
    ) public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), Errors.CONTRACT_CODE_NOT_SALTED);
        (address addrRoot) = optSalt.get().toSlice().decode(address);
        require(msg.sender == addrRoot, Errors.INVALID_CALLER);
        tvm.rawReserve(0.2 ton, 0);
        _name = name;
        _descriprion = descriprion;
        _addrOwner = addrOwner;
        _addrAuthor = addrAuthor;
        _createdAt = uint128(now);
        _addrRoot = addrRoot;
        _contentHash = contentHash;
        _mimeType = mimeType;
        _chunks = chunks;
        _chunkSize = chunkSize;
        _size = size;
        _meta = meta;

        _codeIndex = codeIndex;
        _codeDataChunk = codeDataChunk;

        deployIndex(addrOwner);
        

        sendGasToAddr.transfer({value: 0, flag: 128});
    }

    function setRoyalty(uint128 royalty) public override {
        require(msg.sender == _addrAuthor, Errors.INVALID_CALLER);
        require(_royalty <= 100000, Errors.INVALID_ARGUMENTS);
        require(_royalty == 0, Errors.ROYALTY_ALREADY_SET);

        _royalty = royalty;

        msg.sender.transfer({ value: 0, flag: 64 });
    }

    function setAddrApproved(address addrApproved) public {
        require(msg.sender == _addrOwner);

        _addrApproved == addrApproved;

        msg.sender.transfer({value:0, flag: 64});
    }

    
    function transfer(address addrTo) public override {
        transferValidation();
        transferLogic();

        address oldIndexOwner = resolveIndex(
            _addrRoot,
            address(this),
            _addrOwner
        );
        IIndex(oldIndexOwner).destruct();
        address oldIndexOwnerRoot = resolveIndex(
            address(0),
            address(this),
            _addrOwner
        );
        IIndex(oldIndexOwnerRoot).destruct();

        _addrOwner = addrTo;

        deployIndex(addrTo);

        msg.sender.transfer({value: 0, flag: 64});
    }

    function transferValidation() internal virtual inline {
        require(msg.sender == _addrOwner || msg.sender == _addrApproved);

        // if(_addrApproved != address(0)) {
        //     require(msg.sender == _addrApproved);
        // } else {
        //     require(msg.sender == _addrOwner);
        // }
    }

    function transferLogic() internal virtual inline {
        _addrApproved = address(0);
    }

    function deployIndex(address owner) internal {
        TvmCell codeIndexOwner = _buildIndexCode(_addrRoot, owner);
        TvmCell stateIndexOwner = _buildIndexState(codeIndexOwner, address(this));
        new Index{stateInit: stateIndexOwner, value: Constants.DEPLOY_MIN}(_addrRoot);

        TvmCell codeIndexOwnerRoot = _buildIndexCode(address(0), owner);
        TvmCell stateIndexOwnerRoot = _buildIndexState(codeIndexOwnerRoot, address(this));
        new Index{stateInit: stateIndexOwnerRoot, value: Constants.DEPLOY_MIN}(_addrRoot);
    }

    function deployDataChunk(bytes chunk, uint128 chunkNumber) public override {
        require(msg.sender == _addrAuthor, Errors.INVALID_CALLER);
        TvmCell state = _buildDataChunkState(address(this), chunkNumber);

        new DataChunk
            {stateInit: state, value: Constants.DEPLOY_MIN}
            (chunk);

        // msg.sender.transfer({ value: 0, flag: 64 });
    }

    function getAddrOwner() public view responsible returns(address) {
        return{value:0, bounce: false, flag: 64} _addrOwner;
    }

    function getAddrApproved() public view responsible returns(address) {
        return{value: 0, bounce: false, flag: 64} _addrApproved;
    }

    function getInfo() public view returns (
        string name,
        string descriprion,
        address addrOwner,
        address addrAuthor,
        uint128 createdAt,
        address addrRoot,
        uint256 contentHash,
        string mimeType,
        uint8 chunks,
        uint128 chunkSize,
        uint128 size,
        Meta meta,
        uint128 royalty
    ) {
        name = _name;
        descriprion = _descriprion;
        addrOwner = _addrOwner;
        addrAuthor = _addrAuthor;
        createdAt = _createdAt;
        addrRoot = _addrRoot;
        contentHash = _contentHash;
        mimeType = _mimeType;
        chunks = _chunks;
        chunkSize = _chunkSize;
        size = _size;
        meta = _meta;
        royalty = _royalty;
    }
}
