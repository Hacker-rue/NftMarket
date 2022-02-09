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

    uint8 constant CHECK_CODE_INDEX = 1;
    uint8 constant CHECK_CODE_INDEX_BASIS = 2;
    uint8 constant CHECK_CODE_DATA = 4;
    uint8 constant CHECK_CODE_DATA_CHUNK = 8;

    function _createChecks() internal inline {
        _checkList =
            CHECK_CODE_INDEX |
            CHECK_CODE_INDEX_BASIS |
            CHECK_CODE_DATA |
            CHECK_CODE_DATA_CHUNK;
    }

    function setCodeIndex(TvmCell code) public {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        _setCodeIndex(code);
        msg.sender.transfer({ value: 0, flag: 64 });
    }
    function _setCodeIndex(TvmCell code) internal inline {
        _codeIndex = code;
        _passCheck(CHECK_CODE_INDEX);
        _onInit();
    }
    
    function setCodeIndexBasis(TvmCell code) public {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        _setCodeIndexBasis(code);
        msg.sender.transfer({ value: 0, flag: 64 });
    }
    function _setCodeIndexBasis(TvmCell code) internal inline {
        _codeIndexBasis = code;
        _passCheck(CHECK_CODE_INDEX_BASIS);
        _onInit();
    }

    function setCodeData(TvmCell code) public {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        _setCodeData(code);
        msg.sender.transfer({ value: 0, flag: 64 });
    }
    function _setCodeData(TvmCell code) internal inline {
        _codeData = code;
        _passCheck(CHECK_CODE_DATA);
        _onInit();
    }

    function setCodeDataChunk(TvmCell code) public {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        _setCodeDataChunk(code);
        msg.sender.transfer({ value: 0, flag: 64 });
    }
    function _setCodeDataChunk(TvmCell code) internal inline {
        _codeDataChunk = code;
        _passCheck(CHECK_CODE_DATA_CHUNK);
        _onInit();
    }

    function _onInit() internal {
        if(_isCheckListEmpty() && !_inited) {
            _inited = true;
            deployBasis();
        }
    }

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
