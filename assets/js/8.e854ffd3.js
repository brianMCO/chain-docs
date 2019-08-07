(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{202:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"client-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" Client Flow")]),t._v(" "),a("h2",{attrs:{id:"block-level-filtering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-level-filtering","aria-hidden":"true"}},[t._v("#")]),t._v(" Block-level filtering")]),t._v(" "),a("p",[t._v("The full node “tags” each block with a probabilistic filter (tagging is done using the "),a("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Events"),a("OutboundLink")],1),t._v(" in Tendermint). This filter is then used by the light client code to determine which blocks are of any interest, requests these blocks and processes them. This current mechanism is similar to BIP 157.")]),t._v(" "),a("p",[t._v("Currently, the used filter is the Bloom filter used in Ethereum defined with the following parameters: m = 2048 (bits; keccak-256 hash function), k = 3 (yellowpaper page 5)")]),t._v(" "),a("p",[t._v("The full node inserts the following data into the filter at the moment:")]),t._v(" "),a("ol",[a("li",[t._v("“view keys” (secp256k1 public keys allowed to view the content) in the case of transactions producing UTXOs (see "),a("a",{attrs:{href:"./transaction"}},[t._v("transaction types")]),t._v(" and "),a("a",{attrs:{href:"./transaction-privacy"}},[t._v("transaction privacy mechanism")]),t._v(" for more details).")]),t._v(" "),a("li",[t._v("Staked state addresses in the case of transactions manipulating accounts (see "),a("a",{attrs:{href:"./transaction-accounting-model"}},[t._v("accounting details")]),t._v(").")])]),t._v(" "),a("h2",{attrs:{id:"client-knows-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-knows-transaction","aria-hidden":"true"}},[t._v("#")]),t._v(" Client knows transaction")]),t._v(" "),a("p",[t._v("Each block header includes an application hash (“APP_HASH”, see "),a("a",{attrs:{href:"./consensus"}},[t._v("consensus")]),t._v(" for details). As a part of it is a root of a Merkle tree of valid transactions, a client can check whether its known transaction was included in a block:")]),t._v(" "),a("ol",[a("li",[t._v("Get the block’s application hash / header information.")]),t._v(" "),a("li",[t._v("Compute the transaction ID from transaction data (see "),a("a",{attrs:{href:"./transaction"}},[t._v("transaction")]),t._v(").")]),t._v(" "),a("li",[t._v("Check a Merkle inclusion proof where the transaction ID is one of the leaves, and a part of the application hash is the root.")])]),t._v(" "),a("h2",{attrs:{id:"client-doesn’t-know-transaction-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-doesn’t-know-transaction-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Client doesn’t know transaction data")]),t._v(" "),a("p",[t._v("If the client doesn’t know transaction data, it can collect valid transaction identifiers from blocks that matched its data using the block-level filter. If the transaction data was transparent (staked state operations), the client can decode transaction directly by requesting the full block data. If the transaction data was obfuscated (payments), the client needs to contact an enclave and prove they can access transaction data using view key signatures (see "),a("a",{attrs:{href:"./transaction-privacy"}},[t._v("transaction privacy")]),t._v(" and "),a("a",{attrs:{href:"./enclave-architecture"}},[t._v("enclave architecture")]),t._v(" for more details).")]),t._v(" "),a("p",[t._v("Clients are responsible for their own confidential data treatment – the use of view keys (whether reused or not), requesting transaction data (e.g. from multiple enclaves when not the client isn’t running their own full node) etc.")]),t._v(" "),a("h2",{attrs:{id:"payment-transaction-submission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-transaction-submission","aria-hidden":"true"}},[t._v("#")]),t._v(" Payment transaction submission")]),t._v(" "),a("p",[t._v("When the client wishes to submit a payment transaction (UTXO-based), they will construct a plain signed transaction and submit it to one of full node’s enclaves over a secure channel (see "),a("a",{attrs:{href:"./enclave-architecture"}},[t._v("enclave architecture")]),t._v(").")])])},[],!1,null,null,null);e.default=s.exports}}]);