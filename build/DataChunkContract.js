const DataChunkContract = {
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
                        "name": "chunk",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrData",
                        "type": "address"
                    },
                    {
                        "name": "chunkNumber",
                        "type": "uint128"
                    },
                    {
                        "name": "chunk",
                        "type": "bytes"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_code",
                "type": "cell"
            },
            {
                "key": 2,
                "name": "_addrData",
                "type": "address"
            },
            {
                "key": 3,
                "name": "_chunkNumber",
                "type": "uint128"
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
                "name": "_code",
                "type": "cell"
            },
            {
                "name": "_addrData",
                "type": "address"
            },
            {
                "name": "_chunkNumber",
                "type": "uint128"
            },
            {
                "name": "_chunk",
                "type": "bytes"
            }
        ]
    },
    tvc: "te6ccgECFgEAAjkAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsTBQQVA5rtRNDXScMB+GaJ+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBAMBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwSEgYCKCCCEAvaThW64wIgghA8HMKmuuMCCgcDeDD4RvLgTPhCbuMA0ds8I44jJdDTAfpAMDHIz4cgznHPC2FeIMjPkvBzCprOy3/Mzclw+wCSXwPi4wDyAA0JCAAo7UTQ0//TPzH4Q1jIy//LP87J7VQADPhL+Ez4TQI6MPhCbuMA+Ebyc9TR+En4S8cF8uBk+AD4bds88gAMCwA8+E34TPhL+Er4Q/hCyMv/yz/Pg8zOWcjLf8zNye1UAhbtRNDXScIBjoDjDQ4NAEDtRNDT/9M/0wAx1PpA1NHQ03/U0fht+Gz4a/hq+GP4YgN4cO1E0PQFcSGAQPQPjoDfciKAQPQOjoDfcyOAQPQOk9cLf5Fw4oj4bfhs+Gv4aoBA9A7yvdcL//hicPhjEQ8VAQKJEABDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAECiBUACvhG8uBMAgr0pCD0oRUUABRzb2wgMC41Ny4zAAA=",
    code: "te6ccgECEwEAAgwABCSK7VMg4wMgwP/jAiDA/uMC8gsQAgESA5rtRNDXScMB+GaJ+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPA0JAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwPDwMCKCCCEAvaThW64wIgghA8HMKmuuMCBwQDeDD4RvLgTPhCbuMA0ds8I44jJdDTAfpAMDHIz4cgznHPC2FeIMjPkvBzCprOy3/Mzclw+wCSXwPi4wDyAAoGBQAo7UTQ0//TPzH4Q1jIy//LP87J7VQADPhL+Ez4TQI6MPhCbuMA+Ebyc9TR+En4S8cF8uBk+AD4bds88gAJCAA8+E34TPhL+Er4Q/hCyMv/yz/Pg8zOWcjLf8zNye1UAhbtRNDXScIBjoDjDQsKAEDtRNDT/9M/0wAx1PpA1NHQ03/U0fht+Gz4a/hq+GP4YgN4cO1E0PQFcSGAQPQPjoDfciKAQPQOjoDfcyOAQPQOk9cLf5Fw4oj4bfhs+Gv4aoBA9A7yvdcL//hicPhjDgwSAQKJDQBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAECiBIACvhG8uBMAgr0pCD0oRIRABRzb2wgMC41Ny4zAAA=",
    codeHash: "bd7842d4ccff1cc923fad8545e3f77debbddae5047859eadeb94bec3ba900786",
};
module.exports = { DataChunkContract };