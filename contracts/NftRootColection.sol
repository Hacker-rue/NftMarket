pragma ton-solidity >= 0.52.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./NftRoot.sol";

contract NftRootColection is NftRoot {

    uint256 _maxMinted = 0;

    constructor(
        TvmCell codeData, 
        TvmCell codeDataChunk, 
        TvmCell codeIndex, 
        TvmCell codeIndexBasis,
        string name,
        string description,
        address addrAuthor) public {
        tvm.accept();
        _name = name;
        _description = description;
        _addrAuthor = addrAuthor;
        _setCodeIndex(codeIndex);
        _setCodeIndexBasis(codeIndexBasis);
        _setCodeData(codeData);
        _setCodeDataChunk(codeDataChunk);
    }

    function deployMetadata(
        int8 wid,
        string name,
        string descriprion,
        uint256 contentHash,
        string mimeType,
        uint8 chunks,
        uint128 chunkSize,
        uint128 size,
        Meta meta
    ) public {
        require(msg.value >= Constants.DEPLOY + Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);

        TvmCell codeData = _buildDataCode(address(this));
        TvmCell stateData = _buildDataState(codeData, _totalSupply);

        new Data{
            stateInit: stateData,
            value: Constants.DEPLOY
        }(
            name,
            descriprion,
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
        require(msg.value >= Constants.PROCESS_MIN + Constants.DEPLOY_SM, Errors.INVALID_VALUE);
        require(_totalSupply < _maxMinted);
    }




}