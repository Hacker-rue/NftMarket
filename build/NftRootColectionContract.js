const NftRootColectionContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
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
                        "name": "descriprion",
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
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECOAEACLQABCSK7VMg4wMgwP/jAiDA/uMC8gs1AgE3A5rtRNDXScMB+GaJ+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBkUAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jw0NAMDPCCCECzBpw674wIgghBPZhwiu+MCIIIQd2uagLvjAh4NBARQIIIQX+xHbbrjAiCCEGul/G664wIgghB2yk4juuMCIIIQd2uagLrjAgsJBwUDmjD4RvLgTPhCbuMAIZPU0dDe+kDU0dD6QNHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA92uagIzxbL/8lw+wCRMOLjAPIAMwYrAQjbPPkAIwMoMPhG8uBM+EJu4wDU0ds8MNs88gAzCCUBaPhJ+E3HBfLgZGim/mCCEAX14QC+8uBl+GtxhAei+Eyw+GzbPPhJyM+FiM6Ab89AyYBA+wAcAyYw+Eby4Ez4Qm7jANHbPDDbPPIAMwolAa5opv5gghAF9eEAghAX14QAoLV/vvLgZfhR+Fi58uBk+Cj4Uds8yM+FiM6NBJBfXhAAAAAAAAAAAAAAAAAAAMDPFvhJyM+QyWkS7s7NyXD7APhRpLV/+HERAygw+Eby4Ez4Qm7jANTR2zww2zzyADMMJQFo+En4TccF8uBkaKb+YIIQBfXhAL7y4GX4anSEB6L4TLD4bNs8+EnIz4WIzoBvz0DJgED7ABwEUCCCEC8XHr264wIgghBBAkHWuuMCIIIQRoOoA7rjAiCCEE9mHCK64wIaEhAOAygw+Eby4Ez4Qm7jANTR2zww2zzyADMPJQFo+En4TccF8uBkaKb+YIIQBfXhAL7y4GX4d3KEB6L4TLD4bNs8+EnIz4WIzoBvz0DJgED7ABwDgjD4RvLgTPhCbuMAIZPU0dDe+kDT/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkxoOoA7Ozclw+wCRMOLjAPIAMxErAiYB2zwB2zz5AHDIz4ZAygfL/8nQLSkEjjD4Qm7jAPhG8nPU1NTU0dDU1NT6QNH4AFj4cgH4c/huAfhrcYQHovhMsPhs2zz4d3KEB6L4TLD4bNs8AfhqdIQHovhMsPhsFBwcEwMm2zz4dniEB6L4TLD4bNs82zzyABwcJQIW7UTQ10nCAY6A4w0VMwQocO1E0PQFiCBwcSSAQPQOjoDfiSA3GBkWBIKIcIhfIHCIIHD4ePh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y4j4cHD4cXD4dXD4eDc3NxcAAjIBAokZAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAygw+Eby4Ez4Qm7jANTR2zww2zzyADMbJQFo+En4TccF8uBkaKb+YIIQBfXhAL7y4GX4dniEB6L4TLD4bNs8+EnIz4WIzoBvz0DJgED7ABwBFvhMwAD4VbOwjoDeHQLUf/h1cMjL/3BtgED0Q9s8yMv/cliAQPRD+ChxWIBA9BbI9ADJ+FfIz4SA9AD0AM+BySD5AMjPigBAy//J0GbIz4WIzo0EkC+vCAAAAAAAAAAAAAAAAAABwM8WIds8zM+Q0Wq+f8lw+wD4bywoBFAgghAEEF+nuuMCIIIQGgLfZLrjAiCCEB14ZMm64wIgghAswacOuuMCKiQgHwFQMNHbPPhVIY4cjQRwAAAAAAAAAAAAAAAAKzBpw6DIzsoAyXD7AN7yADMDkjD4RvLgTPhCbuMAIZPU0dDe+kDU0dD6QNTR0PpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SdeGTJs7NyXD7AJEw4uMA8gAzISsCJhLbPAHbPPkAcMjPhkDKB8v/ydAjIgBCcMjL/3BtgED0QwFxWIBA9BbI9ADJAcjPhID0APQAz4HJARYByM7O+EvQAcnbPC4DmDD4RvLgTPhCbuMAIY4W0gfU1NP/1NMH1NHQ03/Tf9N/03/Tf44W0gfU1NP/1NMH03/Tf9N/03/Tf9TR0OLU1FVAbwUB0ds8MNs88gAzJiUAlvhY+Ff4VvhV+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzMzLB85VoMjOVZDIzszLf8zMVUDIzMoAzMzL/83NzcntVAT8aKb+YIIQO5rKAIIQBfXhAKC1f77y4GX4SfhNxwXy4GT4KNs8+FHbPAH4VvhLVUNeMPhJ+ChVGgFVCyD5AMjPigBAy//Iz4WIzxONBJDuaygAAAAAAAAAAAAAAAAAAcDPFiHbPMzPg1WwyM+QWPlJDszMzlWAyM7L/8zLB8t/LSkoJwBCVTDIy3/MzAFvJV5Ay3/Lf8t/zMzNzc3JcPsAMPhYpPh4ADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwBIcMjL/3BtgED0QwHIy/9xWIBA9EPI9ADJAcjPhID0APQAz4HJA4Aw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAhBBfp4zxbL/8lw+wCRMOLjAPIAMywrACjtRNDT/9M/MfhDWMjL/8s/zsntVAEM+CjbPPkALQESyM74StAByds8LgIWIYs4rbNYxwWKiuIwLwEIAds8yTEBJgHU1DAS0Ns8yM+OK2zWEszPEckxAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4yAQSIATcAmO1E0NP/0z/TADHU1NMH+kDU0dD6QNTR0PpA1NN/1NTU0dDU0gDU1NP/0fh4+Hf4dvh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oTc2ABRzb2wgMC41Ny4zAAA=",
    codeHash: "77b72ed232d8499315d278a77b9600a65af710e370ff0520e7fd683841aa8334",
};
module.exports = { NftRootColectionContract };