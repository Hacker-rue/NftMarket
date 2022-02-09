pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "./contracts/NftRootColection.sol";
import "./contracts/resolvers/NftRootResolver.sol";
import "./contracts/libraries/Constants.sol";

contract NFTMarket is NftRootResolver {

    address[] NftColectionsOwner;

    TvmCell _data;
    TvmCell _dataChunk;
    TvmCell _index;
    TvmCell _indexBasis;

    uint128 _countColections = 0;


    constructor (TvmCell root, TvmCell data, TvmCell dataChunk, TvmCell index, TvmCell indexBasis) public {
        tvm.accept();
        _data = data;
        _dataChunk = dataChunk;
        _index = index;
        _indexBasis = indexBasis;
        _codeNftRoot = root;
    }


    function Buy() public {
        
    }

    function putOnSale() public {

    }

    function deployColection(string name, string description) public {
        require(msg.value >= Constants.PROCESS_MIN + Constants.DEPLOY);

        TvmCell codeNftRoot = _buildNftRootCode();
        TvmCell stateNftRoot = _buildNftRootCodeState(codeNftRoot, msg.sender, _countColections);

        new NftRootColection{
            stateInit: stateNftRoot,
            value: Constants.DEPLOY} 
        (_data, _dataChunk, _index, _indexBasis, name, description, msg.sender);

        _countColections++;


        msg.sender.transfer({value: 0, flag: 64});
    }

}