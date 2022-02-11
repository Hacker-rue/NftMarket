pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../IndexOffer.sol";

contract IndexOfferResolver {

    TvmCell _codeIndexOffer;

    function resolveCodeHashIndexOffer(address addrMarket, address addrOwner) public view returns(uint256 codeHashIndexOffer) {
        return tvm.hash(_buildIndexOfferCode(addrMarket, addrOwner));
    }

    function resolveAddrIndexOffer(
        address addrMarket,
        address addrOwner,
        address addrOffer
    ) public view returns(address addrIndexOffer) {
        TvmCell code = _buildIndexOfferCode(addrMarket, addrOwner);
        TvmCell state = _buildIndexOfferCodeState(code, addrOffer);
        uint256 hashState = tvm.hash(state);
        addrIndexOffer = address.makeAddrStd(0, hashState);
    }

    function _buildIndexOfferCode(address addrMarket, address addrOwner) internal virtual view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(addrMarket);
        salt.store(addrOwner);
        return tvm.setCodeSalt(_codeIndexOffer, salt.toCell());
    }

    function _buildIndexOfferCodeState(TvmCell code, address addrOffer) internal virtual pure returns(TvmCell) {
        return tvm.buildStateInit({
            contr: IndexOffer,
            varInit: {_addrOffer: addrOffer},
            code: code
        });
    }


}