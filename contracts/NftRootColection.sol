pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./NftRoot.sol";

contract NftRootColection is NftRoot {

    uint256 _maxMinted = 0;
    uint256 static _id;

    address _addrCreator;

    constructor(
        TvmCell codeData, 
        TvmCell codeDataChunk, 
        TvmCell codeIndex, 
        TvmCell codeIndexBasis,
        string name,
        string description,
        string icon,
        address addrAuthor) 
        public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), 101);
        (address addrRoot) = optSalt.get().toSlice().decode(address);
        tvm.rawReserve(0.2 ton, 0);

        _name = name;
        _description = description;
        _icon = icon;
        _addrAuthor = addrAuthor;
        _codeIndex = codeIndex;
        _codeIndexBasis = codeIndexBasis;
        _codeData = codeData;
        _codeDataChunk = codeDataChunk;

        _addrCreator = addrRoot;

        _inited = true;

        deployBasis();

        _addrOwner.transfer({value: 0, flag: 128});
    }



    function deployMetadata (
        int8 wid,
        string name,
        string description,
        uint256 contentHash,
        string mimeType,
        uint8 chunks,
        uint128 chunkSize,
        uint128 size,
        Meta meta
    ) public {
        require(_inited == true, Errors.CONTRACT_NOT_INITED);
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);

        TvmCell codeData = _buildDataCode(address(this));
        TvmCell stateData = _buildDataState(codeData, _maxMinted);

        new Data{
            stateInit: stateData,
            value: Constants.DEPLOY
        }(
            name,
            description,
            address(this),
            msg.sender,
            contentHash,
            mimeType,
            chunks,
            chunkSize,
            size,
            _codeIndex,
            _codeDataChunk,
            meta
        );

        _maxMinted++;
    }

    function mintNft() public {
        
        mintNftValidation();
        mintNftLogic();


    }

    function mintNftLogic() internal inline override {
        address addrData = resolveData(address(this), _totalSupply);

        Data(addrData).transfer{value: Constants.DEPLOY_SM}(msg.sender);

        _totalSupply++;
        
    }

    function mintNftValidation() internal inline override {
        require(_totalSupply < _maxMinted);
    }

    function getInfo() public view returns(
        string name,
        string description,
        string icon,
        uint128 totalSupply,
        uint256 maxMinted,
        address addrAuthor,
        address addrOwner
    ) {
        name = _name;
        description = _description;
        icon = _icon;
        totalSupply = _totalSupply;
        maxMinted = _maxMinted;
        addrAuthor = _addrAuthor;
        addrOwner = _addrOwner;
    }




}