pragma ton-solidity 0.49.0;

pragma AbiHeader expire;
pragma AbiHeader time;

import './NftRoot.sol';

contract NftRootBase is NftRoot {

    constructor(
        string name,
        string description,
        string icon,
        address addrAuthor
    ) public {
        tvm.accept();
        _name = name;
        _description = description;
        _icon = icon;
        _addrAuthor = addrAuthor;
        _createChecks();
    }

    function mintNft(
        int8 wid,
        string name,
        string descriprion,
        uint256 contentHash,
        string mimeType,
        uint8 chunks,
        uint128 chunkSize,
        uint128 size,
        Meta meta
    ) public override {
        require(_inited == true, Errors.CONTRACT_NOT_INITED);

        mintNftValidation();
        mintNftLogic();

        address addrData = resolveData(address(this), _totalSupply);

        TvmCell codeData = _buildDataCode(address(this));
        TvmCell stateData = _buildDataState(codeData, _totalSupply);
        new Data{
            stateInit: stateData,
            value: Constants.DEPLOY
        }(
            name,
            descriprion,
            msg.sender,
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

        _totalSupply++;
    }

    function getInfo() public returns (
        string version,
        string name,
        string description,
        string icon,
        uint128 totalSupply,
        address addrAuthor,
        address addrOwner
    ) {
        version = _version;
        name = _name;
        description = _description;
        icon = _icon;
        totalSupply = _totalSupply;
        addrAuthor = _addrAuthor;
        addrOwner = _addrOwner;
    }
}
