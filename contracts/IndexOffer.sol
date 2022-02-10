pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;


contract IndexOffer {

    address _addrMarket;
    address _addrOwner;
    address static _addrOffer;

    constructor () public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), 101);
        (address addrMarket, address addrOwner) = optSalt
            .get()
            .toSlice()
            .decode(address, address);
        require(msg.sender == _addrOffer);
        tvm.accept();
        _addrMarket = addrMarket;
        _addrOwner = addrOwner;
    }

    function getInfo() public view returns(
        address addrMarket,
        address addrOwner,
        address addrOffer
    ) {
        addrMarket = _addrMarket;
        addrOwner = _addrOwner;
        addrOffer = _addrOffer;
    }

    function destruct(address sendGasToAddr) public {
        require(msg.sender == _addrOffer);
        selfdestruct(sendGasToAddr);
    }

}