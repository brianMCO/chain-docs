(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"enclave-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enclave-architecture","aria-hidden":"true"}},[e._v("#")]),e._v(" Enclave Architecture")]),e._v(" "),a("p",[e._v("The primary initial use of Trusted Execution Environments (TEE) is for enforcing payment data confidentiality (see "),a("a",{attrs:{href:"./transaction-privacy"}},[e._v("transaction privacy")]),e._v("), while maintaining flexibility and auditability. Other use cases may be developed in the long term.")]),e._v(" "),a("h2",{attrs:{id:"technology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technology","aria-hidden":"true"}},[e._v("#")]),e._v(" Technology")]),e._v(" "),a("p",[e._v("The initial version is based on Intel SGX, but in the long-term, it would be desirable to support other TEE technology stacks, such as Arm TrustZone or RISC-V Keystone.")]),e._v(" "),a("h2",{attrs:{id:"transaction-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-validation","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaction validation")]),e._v(" "),a("p",[e._v("The validation of transactions that involve payment obfuscated transaction outputs (see "),a("a",{attrs:{href:"./transaction"}},[e._v("transaction types")]),e._v(" and "),a("a",{attrs:{href:"./transaction-accounting-model"}},[e._v("accounting model")]),e._v(") need to happen inside enclaves.")]),e._v(" "),a("p",[e._v("For the ease of development, the transaction validation happens in a separate process. The Chain ABCI application process then communicates with this process using a simple request-reply protocol over a 0MQ socket:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+-----------+ REQ +--------+\n|Chain ABCI +-----+ TX val.|\n|           | REP | enc.   |\n+-----------+     +--------+\n")])])]),a("p",[e._v("In production deployment, both of these processes should be on the same machine and hence use IPC as the underlying transport for the 0MQ messages. In development, other transport mechanisms (e.g. TCP) can be used and processes could be in different locations, for example:")]),e._v(" "),a("ul",[a("li",[e._v("Chain ABCI is on executed on the developer laptop (any operating system), and the transaction validation enclave runs inside a Docker container (using the software-simulation mode).")]),e._v(" "),a("li",[e._v("Chain ABCI is on executed on the developer laptop (any operating system), and the transaction validation enclave runs on a remote Linux machine (using the hardware mode).")])]),e._v(" "),a("h3",{attrs:{id:"data-sealing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-sealing","aria-hidden":"true"}},[e._v("#")]),e._v(" Data sealing")]),e._v(" "),a("p",[e._v("As previous transaction data is needed for transaction validation, it needs to be persisted locally. The enclave uses the process of “data sealing” for this purposes. To make the data accessible for future upgrades and other enclaves, it should be sealed with MRSIGNER-derived keys.")]),e._v(" "),a("h2",{attrs:{id:"transaction-data-bootstrapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-data-bootstrapping","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaction data bootstrapping")]),e._v(" "),a("p",[e._v("As old payment data becomes inaccessible due to the periodic key rotation (see "),a("a",{attrs:{href:"./transaction-privacy"}},[e._v("transaction privacy")]),e._v("), newly joined nodes (or nodes that went offline for some time) would need a way to bootstrap the old transaction data by connecting to enclaves of remote nodes and requesting transaction data that the other nodes have locally sealed.")]),e._v(" "),a("h3",{attrs:{id:"lite-client-inside-enclaves"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lite-client-inside-enclaves","aria-hidden":"true"}},[e._v("#")]),e._v(" Lite client inside enclaves")]),e._v(" "),a("p",[e._v("Each enclave should internally run a lite client that would keep track of the validator set, so that it can safely store the latest “app hash” (see consensus).")]),e._v(" "),a("h3",{attrs:{id:"mutual-attestation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutual-attestation","aria-hidden":"true"}},[e._v("#")]),e._v(" Mutual attestation")]),e._v(" "),a("p",[e._v("The core of the bootstrapping process lies in establishing a secure channel between two enclaves – e.g. TLS, see "),a("a",{attrs:{href:"https://arxiv.org/pdf/1801.05863.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Integrating Remote Attestation with Transport Layer Security"),a("OutboundLink")],1),e._v(". During the connection establishment, both parties present attestation reports that they cross-verify. This will initially utilize the Intel Attestation Service (IAS) where each full node is expected to run an IAS proxy that contains the required credentials (Key and SPID) that can be obtained on "),a("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/EPID-attestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel portal"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In the future, the support for Data Center Attestation Primitives (DCAP) will be developed, so that each full node operator can run its own attestation service (rather than relying on IAS).")]),e._v(" "),a("p",[e._v("Beyond the mutual attestation, enclaves should perform additional checks against the stored app hash, e.g. if the staked state-associated with the node’s enclave is valid (or check the whitelist entry in the case of higher tier nodes).")]),e._v(" "),a("h2",{attrs:{id:"transaction-querying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-querying","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaction querying")]),e._v(" "),a("p",[e._v("As mentioned in "),a("a",{attrs:{href:"./client-flow"}},[e._v("client flows")]),e._v(", clients may not know their transaction data and would need to submit blind queries requesting data of some payment transactions.")]),e._v(" "),a("p",[e._v("For this purpose, there needs to be an enclave that can unseal the previously stored transaction data, verify the client query and return the matching transactions.")]),e._v(" "),a("p",[e._v("This process would again require establishing a secure connection channel between the client and the enclave (if it is remote) as in the transaction data bootstrapping – the difference is that it may only be one-side attested, as the client may not have access to the enclave architecture.")]),e._v(" "),a("h2",{attrs:{id:"transaction-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-creation","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaction creation")]),e._v(" "),a("p",[e._v("When the client wishes to broadcast a payment transaction, they first need to obfuscate its content which can only be done within enclaves (that have been up-to-date with the network).")]),e._v(" "),a("p",[e._v("For this purpose, there needs to be an enclave that can access the current random symmetric key obtained from other enclaves (similarly to the transaction validation enclave that needs it for decryption), so that it can encrypt the payment transaction content.")]),e._v(" "),a("h2",{attrs:{id:"enclave-breaches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enclave-breaches","aria-hidden":"true"}},[e._v("#")]),e._v(" Enclave breaches")]),e._v(" "),a("p",[e._v("If enclaves were breached, it would lead to reduced confidentiality – there would still be a level of confidentiality, as the multi-signature scheme in Chain records only limited information in the blockchain (see "),a("a",{attrs:{href:"./signature-schemes"}},[e._v("signature schemes")]),e._v("). It would only affect transactions that were obfuscated with the breached key, as the key would be periodically rotated (see "),a("a",{attrs:{href:"./transaction-privacy"}},[e._v("transaction privacy")]),e._v(").")]),e._v(" "),a("p",[e._v("Note that the breach wouldn’t lead to the loss of ledger integrity, as that is preserved by the "),a("a",{attrs:{href:"./consensus"}},[e._v("consensus algorithm")]),e._v(".")])])},[],!1,null,null,null);t.default=s.exports}}]);