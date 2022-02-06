const IndexBasisContract = {
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
    tvc: "te6ccgECFwEAAlEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsUBQQWA5rtRNDXScMB+GaJ+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPA4LBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwTEwYDPCCCEEfGLdq64wIgghBotV8/uuMCIIIQazbRBrrjAg8KBwNyMPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOcc8LYQLIz5Os20Qazsv/zclw+wCRW+LjAPIAEgkIACjtRNDT/9M/MfhDWMjL/8s/zsntVAAI+Er4SwI0MPhCbuMA+Ebyc9H4SfhKxwXy4GT4ANs88gALEAIW7UTQ10nCAY6A4w0MEgFccO1E0PQFcSGAQPQOjoDfciKAQPQOk9cL/5Fw4vhr+GqAQPQO8r3XC//4YnD4Yw0BAokOAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAyYw+Eby4Ez4Qm7jANHbPDDbPPIAEhEQAC74SvhD+ELIy//LP8+DzvhLyMv/zcntVAA4+En4SscF8uBk+AD4SsjPhQjOgG/PQMmBAKD7AAA07UTQ0//TP9MAMfpA1NHQ0//R+Gv4avhj+GIACvhG8uBMAgr0pCD0oRYVABRzb2wgMC41Ny4zAAA=",
    code: "te6ccgECFAEAAiQABCSK7VMg4wMgwP/jAiDA/uMC8gsRAgETA5rtRNDXScMB+GaJ+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAsIAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwQEAMDPCCCEEfGLdq64wIgghBotV8/uuMCIIIQazbRBrrjAgwHBANyMPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOcc8LYQLIz5Os20Qazsv/zclw+wCRW+LjAPIADwYFACjtRNDT/9M/MfhDWMjL/8s/zsntVAAI+Er4SwI0MPhCbuMA+Ebyc9H4SfhKxwXy4GT4ANs88gAIDQIW7UTQ10nCAY6A4w0JDwFccO1E0PQFcSGAQPQOjoDfciKAQPQOk9cL/5Fw4vhr+GqAQPQO8r3XC//4YnD4YwoBAokLAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAyYw+Eby4Ez4Qm7jANHbPDDbPPIADw4NAC74SvhD+ELIy//LP8+DzvhLyMv/zcntVAA4+En4SscF8uBk+AD4SsjPhQjOgG/PQMmBAKD7AAA07UTQ0//TP9MAMfpA1NHQ0//R+Gv4avhj+GIACvhG8uBMAgr0pCD0oRMSABRzb2wgMC41Ny4zAAA=",
    codeHash: "60cdf3bbd92508037731d1f416a665df412157ae1b18e999e1ad44da5b78554e",
};
module.exports = { IndexBasisContract };