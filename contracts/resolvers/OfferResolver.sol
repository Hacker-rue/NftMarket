pragma ton-solidity 0.49.0;

pragma AbiHedare time;
pragma AbiHedare expire;

contract OfferResolver {

    function resolveCodeHashOffer() public view returns(uint256 codeHashOffer) {
        return tvm.hash(_buildOfferCode());
    }

    function resolveAddrOffer() public view returns(address addrOffer) {

    }

    function _buildOfferCode() internal virtual view returns(TvmCell) {

    }

    function _buildOfferCodeState() internal virtual pure returns(TvmCell) {

    }

}