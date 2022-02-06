pragma ton-solidity >= 0.52.0;

pragma AbiHeader time;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "./contracts/NftRootColection.sol";
import "./contracts/resolvers/NftRootResolver.sol";
import "./contracts/libraries/Constants.sol";

contract NFTMarket is NftRootResolver {

    TvmCell _root;
    TvmCell _data;
    TvmCell _dataChunk;
    TvmCell _index;
    TvmCell _indexBasis;

    uint256 _countColections;


    constructor (TvmCell root, TvmCell data, TvmCell dataChunk, TvmCell index, TvmCell indexBasis) public {
        tvm.accept();
        _root = root;
        _data = data;
        _dataChunk = dataChunk;
        _index = index;
        _indexBasis = indexBasis;
    }


    function Buy() public {
        
    }

    function putOnSale() public {

    }

    function deployColection(string name, string description) public {
        require(msg.value >= Constants.PROCESS_MIN + Constants.DEPLOY);

        TvmCell codeNftRoot = _buildNftRootCode(address(this));
        TvmCell stateNftRoot = _buildNftRootCodeState(codeNftRoot, msg.sender);

        new NftRootColection{
            stateInit: stateNftRoot,
            value: Constants.DEPLOY} 
        (_data, _dataChunk, _index, _indexBasis, name, description, msg.sender);

        _countColections++;

    }

}