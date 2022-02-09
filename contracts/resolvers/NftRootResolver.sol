pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../NftRootColection.sol";

contract NftRootResolver {

    TvmCell _codeNftRoot;

    function resolveCodeHashNftRoot(TvmCell code, uint256 id) public view returns (uint256 codeHashData) {
        return tvm.hash(_buildNftRootCode());
    }

    function resolveNftRoot(
        address addrOwner,
        uint128 id
    ) public view returns (address addrNftRoot) {
        TvmCell code = _buildNftRootCode();
        TvmCell state = _buildNftRootCodeState(code, addrOwner, id);
        uint256 hashState = tvm.hash(state);
        addrNftRoot = address.makeAddrStd(0, hashState);
    }

    function _buildNftRootCode() internal virtual view returns (TvmCell) {
        TvmBuilder salt;
        salt.store(address(this));
        return tvm.setCodeSalt(_codeNftRoot, salt.toCell());
    }

    function _buildNftRootCodeState(
        TvmCell code,
        address addrOwner,
        uint128 id
    ) internal virtual pure returns (TvmCell) {
        return tvm.buildStateInit({
            contr: NftRootColection,
            varInit: {_addrOwner: addrOwner, _id: id},
            code: code
        });
    }


}