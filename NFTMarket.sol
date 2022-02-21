pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "./contracts/NftRootColection.sol";
import "./contracts/NftRootBase.sol";


import "./contracts/resolvers/NftRootResolver.sol";
import "./contracts/resolvers/OfferResolver.sol";
import "./contracts/resolvers/IndexOfferResolver.sol";

import "./contracts/libraries/Constants.sol";

contract NFTMarket is NftRootResolver, OfferResolver, IndexOfferResolver {

    address oneNFTRoot;

    TvmCell _data;
    TvmCell _dataChunk;
    TvmCell _index;
    TvmCell _indexBasis;
    TvmCell _indexOffer;

    uint128 _countColections = 0;


    constructor (
        TvmCell root, 
        TvmCell oneRoot, 
        TvmCell data, 
        TvmCell dataChunk, 
        TvmCell index, 
        TvmCell indexBasis, 
        TvmCell offer,
        TvmCell indexOffer
    ) public {
        tvm.accept();
        _data = data;
        _dataChunk = dataChunk;
        _index = index;
        _indexBasis = indexBasis;
        _codeNftRoot = root;
        _codeOffer = offer;
        _indexOffer = indexOffer;

        deployOneNftRoot(oneRoot);
    }

    function putOnSale(address addrNft, uint128 price) public {
        require(msg.value >= 0.7 ton);
        TvmCell code = _buildOfferCode();
        TvmCell state = _buildOfferCodeState(code, msg.sender, addrNft);
        new Offer{
            stateInit: state,
            value: 0.5 ton
        } (price, _indexOffer);
        msg.sender.transfer({value: 0, flag: 64});
    }

    function deployColection(string name, string description, string icon) public {
        require(msg.value >= 1.2 ton);
        TvmCell codeNftRoot = _buildNftRootCode();
        TvmCell stateNftRoot = _buildNftRootCodeState(codeNftRoot, msg.sender, _countColections);

        new NftRootColection{
            stateInit: stateNftRoot,
            value: Constants.DEPLOY} 
        (_data, _dataChunk, _index, _indexBasis, name, description, icon, msg.sender);

        _countColections++;


        msg.sender.transfer({value: 0, flag: 64});
    }

    function deployOneNftRoot(TvmCell oneRoot) internal inline {
        TvmBuilder salt;
        salt.store(address(this));
        TvmCell code = tvm.buildStateInit({
            contr: NftRootBase,
            varInit: {_addrOwner: address(this)},
            code: tvm.setCodeSalt(oneRoot, salt.toCell())
        });

        

        new NftRootBase {
            stateInit: code,
            value: Constants.DEPLOY
        } (
            "test",
            "test",
            "test",
            address(this)
        );
    }

    function getInfo() public view returns(
        uint128 countColections,
        address oneRoot
    ) {
        countColections = _countColections;
        oneRoot = oneNFTRoot;
    }

}