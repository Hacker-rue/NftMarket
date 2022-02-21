pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../Offer.sol";

contract OfferResolver {

    TvmCell _codeOffer;

    function resolveCodeHashOffer() public view returns(uint256 codeHashOffer) {
        return tvm.hash(_buildOfferCode());
    }

    function resolveAddrOffer(address addrNft) public view returns(address addrOffer) {
        TvmCell code = _buildOfferCode();
        TvmCell state = _buildOfferCodeState(code, addrNft);
        uint256 hashState = tvm.hash(state);
        addrOffer = address.makeAddrStd(0, hashState);
    }

    function _buildOfferCode() internal virtual view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(address(this));
        return tvm.setCodeSalt(_codeOffer, salt.toCell());
    }

    function _buildOfferCodeState(
        TvmCell code,
        address addrNft
    ) internal virtual pure returns(TvmCell) {
        return tvm.buildStateInit({
            contr: Offer,
            varInit: {_addrNft: addrNft},
            code: code
        });
    }

}