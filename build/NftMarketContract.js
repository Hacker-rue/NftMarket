const NftMarketContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
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
                        "name": "root",
                        "type": "cell"
                    },
                    {
                        "name": "data",
                        "type": "cell"
                    },
                    {
                        "name": "dataChunk",
                        "type": "cell"
                    },
                    {
                        "name": "index",
                        "type": "cell"
                    },
                    {
                        "name": "indexBasis",
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
                "name": "putOnSale",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "deployColection",
                "inputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "description",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resolveCodeHashNftRoot",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeHashData",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveNftRoot",
                "inputs": [
                    {
                        "name": "addrNftMarket",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrNftRoot",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
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
                "name": "_codeNftRoot",
                "type": "cell"
            },
            {
                "name": "_root",
                "type": "cell"
            },
            {
                "name": "_data",
                "type": "cell"
            },
            {
                "name": "_dataChunk",
                "type": "cell"
            },
            {
                "name": "_index",
                "type": "cell"
            },
            {
                "name": "_indexBasis",
                "type": "cell"
            },
            {
                "name": "_countColections",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECJAEABFwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBwQjAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEdBgEI2zzyPAgDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8ICAIAiggghA821Wiu+MCIIIQTIB5WLvjAgwJAiggghA+xhjyuuMCIIIQTIB5WLrjAhEKA4gw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5MyAeVizs3JcPsAkTDi4wDyAB4LEwImAds8Ads8+QBwyM+GQMoHy//J0BUQBE4gggvtppu64wIgghANf5lIuuMCIIIQGHqZjrrjAiCCEDzbVaK64wIbEhENAyow+Eby4Ez4Qm7jANTU0ds8MNs88gAeDhwD8Gim/mCCEAX14QCCEDuaygCgtX++8uBk+CjbPPhJ2zz4SVoB+E/4TvhN+ExVBiD5AMjPigBAy//Iz4WIzxONBJDuaygAAAAAAAAAAAAAAAAAAcDPFiHbPMzPg1VgyM+RBAkHWszMzFUwyMzMzM7Nzclw+wD4UKT4cBUQDwA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAQnDIy/9wbYBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQMmMPhG8uBM+EJu4wDR2zww2zzyAB4jHAOAMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI1/mUiM8Wy//JcPsAkTDi4wDyAB4UEwAo7UTQ0//TPzH4Q1jIy//LP87J7VQBDPgo2zz5ABUBEsjO+ErQAcnbPBYCFiGLOK2zWMcFioriGBcBCAHbPMkZASYB1NQwEtDbPMjPjits1hLMzxHJGQFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOGgEEiAEjAlow+EJu4wD4RvJz1NTU1NHQ1NTR+ABVA/hrVQL4bFj4bQH4bvhv+Ev4ats88gAdHABQ+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg8zMzFUwyMzMzMv/zcntVAIW7UTQ10nCAY6A4w0fHgBQ7UTQ0//TP9MAMdTU1NTR0NTU1NP/0fhw+G/4bvht+Gz4a/hq+GP4YgFMcO1E0PQFiF9QcPhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GMjAAr4RvLgTAIK9KQg9KEjIgAUc29sIDAuNTcuMwAA",
    code: "te6ccgECIQEABC8ABCSK7VMg4wMgwP/jAiDA/uMC8gseBAEgAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEaAwEI2zzyPAUDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0FAiggghA821Wiu+MCIIIQTIB5WLvjAgkGAiggghA+xhjyuuMCIIIQTIB5WLrjAg4HA4gw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5MyAeVizs3JcPsAkTDi4wDyABsIEAImAds8Ads8+QBwyM+GQMoHy//J0BINBE4gggvtppu64wIgghANf5lIuuMCIIIQGHqZjrrjAiCCEDzbVaK64wIYDw4KAyow+Eby4Ez4Qm7jANTU0ds8MNs88gAbCxkD8Gim/mCCEAX14QCCEDuaygCgtX++8uBk+CjbPPhJ2zz4SVoB+E/4TvhN+ExVBiD5AMjPigBAy//Iz4WIzxONBJDuaygAAAAAAAAAAAAAAAAAAcDPFiHbPMzPg1VgyM+RBAkHWszMzFUwyMzMzM7Nzclw+wD4UKT4cBINDAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAQnDIy/9wbYBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQMmMPhG8uBM+EJu4wDR2zww2zzyABsgGQOAMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI1/mUiM8Wy//JcPsAkTDi4wDyABsREAAo7UTQ0//TPzH4Q1jIy//LP87J7VQBDPgo2zz5ABIBEsjO+ErQAcnbPBMCFiGLOK2zWMcFioriFRQBCAHbPMkWASYB1NQwEtDbPMjPjits1hLMzxHJFgFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOFwEEiAEgAlow+EJu4wD4RvJz1NTU1NHQ1NTR+ABVA/hrVQL4bFj4bQH4bvhv+Ev4ats88gAaGQBQ+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg8zMzFUwyMzMzMv/zcntVAIW7UTQ10nCAY6A4w0cGwBQ7UTQ0//TP9MAMdTU1NTR0NTU1NP/0fhw+G/4bvht+Gz4a/hq+GP4YgFMcO1E0PQFiF9QcPhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GMgAAr4RvLgTAIK9KQg9KEgHwAUc29sIDAuNTcuMwAA",
    codeHash: "947f91de25a62d2318b095ffbab15c41d9588e118afb483d0683f8a0b37f4f67",
};
module.exports = { NftMarketContract };