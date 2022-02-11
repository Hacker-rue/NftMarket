const OfferContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "codeIndexOffer",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "Buy",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "CheckAddrOwner",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "CheckAddrApproved",
                "inputs": [
                    {
                        "name": "addrApproved",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resolveCodeHashIndexOffer",
                "inputs": [
                    {
                        "name": "addrMarket",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "codeHashIndexOffer",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveAddrIndexOffer",
                "inputs": [
                    {
                        "name": "addrMarket",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrOffer",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndexOffer",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_addrNft",
                "type": "address"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_codeIndexOffer",
                "type": "cell"
            },
            {
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "name": "_addrNft",
                "type": "address"
            },
            {
                "name": "_addrNftMarket",
                "type": "address"
            },
            {
                "name": "_price",
                "type": "uint128"
            },
            {
                "name": "_Check",
                "type": "bool"
            },
            {
                "name": "_buyer",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "7142601725e3ffc0830f8595033d4e46d5b7f87b4b20b589a9a89fdc4efadde4",
};
module.exports = { OfferContract };