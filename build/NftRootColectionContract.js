const NftRootColectionContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "codeData",
                        "type": "cell"
                    },
                    {
                        "name": "codeDataChunk",
                        "type": "cell"
                    },
                    {
                        "name": "codeIndex",
                        "type": "cell"
                    },
                    {
                        "name": "codeIndexBasis",
                        "type": "cell"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "name": "addrAuthor",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployMetadata",
                "inputs": [
                    {
                        "name": "wid",
                        "type": "int8"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "name": "contentHash",
                        "type": "uint256"
                    },
                    {
                        "name": "mimeType",
                        "type": "string"
                    },
                    {
                        "name": "chunks",
                        "type": "uint8"
                    },
                    {
                        "name": "chunkSize",
                        "type": "uint128"
                    },
                    {
                        "name": "size",
                        "type": "uint128"
                    },
                    {
                        "components": [
                            {
                                "name": "height",
                                "type": "uint128"
                            },
                            {
                                "name": "width",
                                "type": "uint128"
                            },
                            {
                                "name": "duration",
                                "type": "uint128"
                            },
                            {
                                "name": "extra",
                                "type": "string"
                            },
                            {
                                "name": "json",
                                "type": "string"
                            }
                        ],
                        "name": "meta",
                        "type": "tuple"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mintNft",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "name": "icon",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "maxMinted",
                        "type": "uint256"
                    },
                    {
                        "name": "addrAuthor",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "setCodeIndex",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeIndexBasis",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeData",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeDataChunk",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resolveCodeHashIndex",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "codeHashIndex",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveIndex",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "addrData",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndex",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "resolveCodeHashData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeHashData",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveData",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrData",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "_inited",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_inited",
                        "type": "bool"
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
                "name": "_id",
                "type": "uint256"
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
                "name": "_codeData",
                "type": "cell"
            },
            {
                "name": "_codeIndex",
                "type": "cell"
            },
            {
                "name": "_checkList",
                "type": "uint8"
            },
            {
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "name": "_addrAuthor",
                "type": "address"
            },
            {
                "name": "_addrBasis",
                "type": "address"
            },
            {
                "name": "_version",
                "type": "string"
            },
            {
                "name": "_totalSupply",
                "type": "uint128"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_description",
                "type": "string"
            },
            {
                "name": "_icon",
                "type": "string"
            },
            {
                "name": "_inited",
                "type": "bool"
            },
            {
                "name": "_codeDataChunk",
                "type": "cell"
            },
            {
                "name": "_codeIndexBasis",
                "type": "cell"
            },
            {
                "name": "_maxMinted",
                "type": "uint256"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_addrCreator",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECPAEACvYAAgaK2zU7AQQkiu1TIOMDIMD/4wIgwP7jAvILOAMCOgLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfBgEA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfDc3BARQIIIQHXhkybvjAiCCEEaDqAO74wIgghB2yk4ju+MCIIIQd2uagLrjAiIQBwUDpjD4RvLgTPhCbuMA+kGV1NHQ+kDf+kGV1NHQ+kDf0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAD3a5qAjPFsv/yXD7AJEw4uMAf/hnNgYuAQjbPPkAJgRQIIIQT2YcIrrjAiCCEF/sR2264wIgghBrpfxuuuMCIIIQdspOI7rjAg4MCggDKDD4RvLgTPhCbuMA1NHbPNs8f/hnNgkuAWj4SfhNxwXy4GRopv5gghAF9eEAvvLgZfhrcYQHovhMsPhs2zz4ScjPhYjOgG/PQMmAQPsAHwMmMPhG8uBM+EJu4wDR2zzbPH/4ZzYLLgGyaKb+YIIQBfXhAIIQF9eEAKC1f77y4GX4UfhYufLgZPgo+FHbPPhJAcjPhYjOjQSQX14QAAAAAAAAAAAAAAAAAADAzxYByM+QyWkS7s7NyXD7APhRpLV/+HESAygw+Eby4Ez4Qm7jANTR2zzbPH/4ZzYNLgFo+En4TccF8uBkaKb+YIIQBfXhAL7y4GX4anSEB6L4TLD4bNs8+EnIz4WIzoBvz0DJgED7AB8DKDD4RvLgTPhCbuMA1NHbPNs8f/hnNg8uAWj4SfhNxwXy4GRopv5gghAF9eEAvvLgZfh3coQHovhMsPhs2zz4ScjPhYjOgG/PQMmAQPsAHwRQIIIQLMGnDrrjAiCCEC8XHr264wIgghBBAkHWuuMCIIIQRoOoA7rjAiEdExEDljD4RvLgTPhCbuMA+kGV1NHQ+kDf1w3/ldTR0NP/39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkxoOoA7Ozclw+wCRMOLjAH/4ZzYSLgJwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNs8WNs8+QBwyM+GQMoHy//J0DEwKgTcMPhCbuMA+Ebyc9TU1NTR0NTU1PpA0fhBiMjPjits1szOyds8IG7y0GUgbvJ/0PpAMGim/mCCEDuaygC+8uBkghAL68IAcPsCVQL4clj4cwH4blj4awH4d1j4agH4dvh6f/h1bXDIy/9wWIBA9EMYOxUUAuLbPMjL/3JYgED0Q/gocViAQPQWyPQAyfhXyM+EgPQA9ADPgckg+QDIz4oAQMv/ydABIcjPhYjOjQSQL68IAAAAAAAAAAAAAAAAAAHAzxbMz5DRar5/yXD7APhv+E3Iz4WIzoBvz0DJgQCA+wDbPH/4Zy8uAhjQIIs4rbNYxwWKiuIWFwEK103Q2zwXAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeICFu1E0NdJwgGKjoDiNhkDyHDtRND0BYj4aoj4a3D4bHEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/htjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G46OhoEZI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhviPhwcPhxiPhyiPhzOjo6GwS8iPh0cPh1iPh2iPh3cPh4ciGAQPQOk9cL/5Fw4vh5jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HqAQPQO8r3XC//4YnD4Y4j4cHD4cXD4dXD4eDo6OhwAAjIDKDD4RvLgTPhCbuMA1NHbPNs8f/hnNh4uAWj4SfhNxwXy4GRopv5gghAF9eEAvvLgZfh2eIQHovhMsPhs2zz4ScjPhYjOgG/PQMmAQPsAHwEc+EzAACCUMPhVs96OgN4gAdJ/+HVtcMjL/3BYgED0Q9s8yMv/cliAQPRD+ChxWIBA9BbI9ADJ+FfIz4SA9AD0AM+BySD5AMjPigBAy//J0AEhyM+FiM6NBJAvrwgAAAAAAAAAAAAAAAAAAcDPFszPkNFqvn/JcPsA+G8vAVIw0ds8+FUhjhyNBHAAAAAAAAAAAAAAAAArMGnDoMjOygDJcPsA3n/4ZzYEUCCCEAQQX6e64wIgghAHaRB7uuMCIIIQGgLfZLrjAiCCEB14ZMm64wItKycjA6Yw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPknXhkybOzclw+wCRMOLjAH/4ZzYkLgJ0jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEVQJY2zxY2zz5AHDIz4ZAygfL/8nQMSYlAERtcMjL/3BYgED0QwFxWIBA9BbI9ADJAcjPhID0APQAz4HJARYByM7O+EvQAcnbPDEDvjD4RvLgTPhCbuMA0gfU1NP/1NMH1w1/ldTR0NN/39cNf5XU0dDTf9/XDX+V1NHQ03/f1w1/ldTR0NN/39cNf5XU0dDTf98g10rAAZPU0dDe1NRVQG8FAdHbPNs8f/hnNiguA/74VX+68uBoaKb+YIIQO5rKAIIQBfXhAKC1f77y4GX4SfhNxwXy4GT4KNs8+FHbPAH4VvhLVQNVBFUFVQZVB/hJ+ChVClUaIPkAyM+KAEDL/8jPhYjPE40EkO5rKAAAAAAAAAAAAAAAAAABwM8WzM+DVbDIz5BY+UkOzMzOVYDIMCopAFLOy//MywfLf1UwyMt/zMwBbyVeQMt/y3/Lf8zMzc3NyXD7APhYpPh4MABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQOKMPhG8uBM+EJu4wDR2zwnjisp0NMB+kAwMcjPhyDOcc8LYV5gyM+SHaRB7szMzMt/y//OAcjOzc3JcPsAkl8H4uMAf/hnNiwuABz4UvhT+FT4UfhY+E74TQOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIQQX6eM8Wy//JcPsAkTDi4wB/+Gc2Ly4Aqvha+Fn4WPhX+Fb4VfhU+FP4UvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywfOVcDIzlWwyM7My3/MzFVgyMzKAMzMy//L/wHIzs3Nzc3J7VQBDPgo2zz5ADABEsjO+ErQAcnbPDECFiGLOK2zWMcFioriMzIBCAHbPMk0ASYB1NQwEtDbPMjPjits1hLMzxHJNAFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHONQEEiAE6AK7tRNDT/9M/0wAx1NTTB/pA1NHQ+kDU0dD6QNTTf9TU1NHQ1NIA1NTT/9P/1NHQ+kDR+Hr4efh4+Hf4dvh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oTo5ABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    codeHash: "7190c6f094652303203cf8f9205775a45a4e801e4cfc8d6dc43c75ea80cd31f0",
};
module.exports = { NftRootColectionContract };