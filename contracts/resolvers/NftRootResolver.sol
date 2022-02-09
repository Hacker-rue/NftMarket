pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../NftRootColection.sol";

contract NftRootResolver {

    TvmCell _codeNftRoot;

    function resolveCodeHashNftRoot(TvmCell code, uint256 id) public view returns (uint256 codeHashData) {
        return tvm.hash(_buildNftRootCode(id, code));
    }

    function resolveNftRoot(
        uint256 id,
        address addrOwner,
        TvmCell code
    ) public view returns (address addrNftRoot) {
        TvmCell _code = _buildNftRootCode(id, code);
        TvmCell state = _buildNftRootCodeState(_code, addrOwner);
        uint256 hashState = tvm.hash(state);
        addrNftRoot = address.makeAddrStd(0, hashState);
    }

    function _buildNftRootCode(uint256 id, TvmCell code) internal virtual view returns (TvmCell) {
        TvmBuilder salt;
        salt.store(id);
        return tvm.setCodeSalt(code, salt.toCell());
    }

    function _buildNftRootCodeState(
        TvmCell code,
        address addrOwner
    ) internal virtual pure returns (TvmCell) {
        return tvm.buildStateInit({
            contr: NftRootColection,
            varInit: {_addrOwner: addrOwner},
            code: code
        });
    }


}