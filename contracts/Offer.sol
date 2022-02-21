pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "./resolvers/IndexOfferResolver.sol";

import './libraries/Errors.sol';
import './libraries/Constants.sol';

import "./Data.sol";

contract Offer is IndexOfferResolver {

    address static _addrOwner;
    address static _addrNft;

    address _addrNftMarket;

    uint128 _price;

    bool _Check = false;

    address _buyer;

    constructor (uint128 price, TvmCell codeIndexOffer) public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), Errors.CONTRACT_CODE_NOT_SALTED);
        (address addrNftMarket) = optSalt.get().toSlice().decode(address);
        require(msg.sender == addrNftMarket, Errors.INVALID_CALLER);
        tvm.rawReserve(0.01 ton, 0);

        _addrNftMarket = addrNftMarket;
        _price = price;
        _codeIndexOffer = codeIndexOffer;

        deployIndex();

        Data(_addrNft).getAddrOwner{value: 0.1 ton, callback: Offer.CheckAddrOwner}();

        msg.sender.transfer({value: 0, flag: 128});
    }

    function Buy() public {
        require(_Check == true);
        require(msg.sender != _addrOwner);
        require(msg.sender != address(0));
        require(_buyer == address(0));
        require(msg.value >= _price + Constants.PROCESS_MIN * 3);

        _buyer = msg.sender;

        Data(_addrNft).getAddrApproved{value: 0.2 ton, callback: Offer.CheckAddrApproved} ();
    }

    function deployIndex() internal inline {
        TvmCell code = _buildIndexOfferCode(_addrNftMarket, _addrOwner);
        TvmCell state = _buildIndexOfferCodeState(code, address(this));

        new IndexOffer{stateInit: state, value: Constants.DEPLOY_MIN}(_addrNft);
    }

    function CheckAddrOwner(address addrOwner) public {
        require(msg.sender == _addrNft);
        if(addrOwner == _addrOwner) {
            _Check = true;
        } else {
            selfdestruct(_addrOwner);
        }
    }

    function CheckAddrApproved(address addrApproved) public {
        require(msg.sender == _addrNft);
        if(addrApproved == address(this)) {
            Data(_addrNft).transfer{value: 0.5 ton} (_buyer);
            _addrOwner.transfer({value: _price / 100 * 90});
            address(0).transfer({value: _price / 100 * 10});

            selfdestruct(_buyer);
        } else {
            address buyer = _buyer;
            _buyer = address(0);
            tvm.rawReserve(0.01 ton, 0);
            buyer.transfer({value:0, flag: 128});
        }
    }

    function getInfo() public view returns(
        address addrNft,
        address addrOwner,
        uint128 price,
        bool check
    ) {
        addrNft = _addrNft;
        addrOwner = _addrOwner;
        price = _price;
        check = _Check;
    }



    modifier onlyOwner() {
        require(msg.sender == _addrOwner);
        _;
    }


}