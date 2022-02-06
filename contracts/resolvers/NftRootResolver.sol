pragma ton-solidity >=0.52.0;

import "../NftRootColection.sol";

contract NftRootResolver {

    TvmCell _codeNftRoot;

    function resolveCodeHashNftRoot() public view returns (uint256 codeHashData) {
        return tvm.hash(_buildNftRootCode(address(this)));
    }

    function resolveNftRoot(
        address addrNftMarket,
        address addrOwner
    ) public view returns (address addrNftRoot) {
        TvmCell code = _buildNftRootCode(addrNftMarket);
        TvmCell state = _buildNftRootCodeState(code, addrOwner);
        uint256 hashState = tvm.hash(state);
        addrNftRoot = address.makeAddrStd(0, hashState);
    }

    function _buildNftRootCode(address addrNftMarket) internal virtual view returns (TvmCell) {
        TvmBuilder salt;
        salt.store(addrNftMarket);
        return tvm.setCodeSalt(_codeNftRoot, salt.toCell());
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