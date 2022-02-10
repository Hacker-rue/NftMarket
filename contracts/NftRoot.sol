pragma ton-solidity 0.49.0;

pragma AbiHeader expire;
pragma AbiHeader time;

import './resolvers/IndexResolver.sol';
import './resolvers/DataResolver.sol';

import './IndexBasis.sol';
import './Checks.sol';
import './libraries/Errors.sol';
import './libraries/Constants.sol';

import './interfaces/IData.sol';
import './interfaces/IIndexBasis.sol';
import './interfaces/INftRoot.sol';

abstract contract NftRoot is DataResolver, IndexResolver, INftRoot, Checks {
    address static _addrOwner;
    address _addrAuthor;
    address _addrBasis;

    string _version = "2";
    uint128 _totalSupply = 0;

    string _name;
    string _description;
    string _icon;

    bool public _inited = false;

    TvmCell _codeDataChunk;
    TvmCell _codeIndexBasis;

    

    function deployBasis() internal inline {
        TvmCell state = tvm.buildStateInit({
            contr: IndexBasis,
            varInit: {
                _codeHashData: resolveCodeHashData(),
                _addrRoot: address(this)
            },
            code: _codeIndexBasis
        });
        _addrBasis = new IndexBasis{stateInit: state, value: Constants.DEPLOY_MIN}();
    }

    function mintNftValidation() internal virtual inline {
        require(msg.value >= Constants.DEPLOY + Constants.PROCESS_MIN, Errors.INVALID_VALUE);
    }

    function mintNftLogic() internal virtual inline {
        
    }
}
