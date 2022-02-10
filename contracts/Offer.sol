pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

contract Offer {

    address static _addrOwner;
    address static _addrNft;

    address _addrNftMarket;

    uint128 _price;

    constructor (uint128 price) public {
        

        _price = price;
    }

    function setNft() public onlyOwner() {

    }

    function Buy() public {
        
    }




    modifier onlyOwner() {
        require(msg.sender == _addrOwner);
        _;
    }


}