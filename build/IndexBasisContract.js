const IndexBasisContract = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "codeHashData",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "destruct",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_addrRoot",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_codeHashData",
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
                "name": "_addrRoot",
                "type": "address"
            },
            {
                "name": "_codeHashData",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECEwEAAl4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBQQSAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CgYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dw8GAzwgghBHxi3auuMCIIIQaLVfP7rjAiCCEGs20Qa64wILCQcDdDD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgznHPC2ECyM+TrNtEGs7L/83JcPsAkVvi4wB/+GcOCAwACPhK+EsCNjD4Qm7jAPhG8nPR+En4SscF8uBk+ADbPH/4ZwoMAbrtRNDXScIBio5ScO1E0PQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wv/kXDi+GuAQPQO8r3XC//4YnD4Y+IOAyYw+Eby4Ez4Qm7jANHbPNs8f/hnDg0MADD4S/hK+EP4QsjL/8s/z4POAcjL/83J7VQAOPhJ+ErHBfLgZPgA+ErIz4UIzoBvz0DJgQCg+wAANO1E0NP/0z/TADH6QNTR0NP/0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNDkuMAAA",
    code: "te6ccgECEAEAAjEABCSK7VMg4wMgwP/jAiDA/uMC8gsNAgEPAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BwMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8DAwDAzwgghBHxi3auuMCIIIQaLVfP7rjAiCCEGs20Qa64wIIBgQDdDD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgznHPC2ECyM+TrNtEGs7L/83JcPsAkVvi4wB/+GcLBQkACPhK+EsCNjD4Qm7jAPhG8nPR+En4SscF8uBk+ADbPH/4ZwcJAbrtRNDXScIBio5ScO1E0PQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wv/kXDi+GuAQPQO8r3XC//4YnD4Y+ILAyYw+Eby4Ez4Qm7jANHbPNs8f/hnCwoJADD4S/hK+EP4QsjL/8s/z4POAcjL/83J7VQAOPhJ+ErHBfLgZPgA+ErIz4UIzoBvz0DJgQCg+wAANO1E0NP/0z/TADH6QNTR0NP/0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEPDgAUc29sIDAuNDkuMAAA",
    codeHash: "a07c3aff9cecab8a6781a9e837f7ee3490c20673cc511a9254bf6ff8f3d4a693",
};
module.exports = { IndexBasisContract };