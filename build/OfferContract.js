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
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrNft",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "check",
                        "type": "bool"
                    }
                ]
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
    codeHash: "a2dfed49ef400c938495e1ae2aac86b87f97de0869d078ff275fc9d8edbe65ad",
};
module.exports = { OfferContract };