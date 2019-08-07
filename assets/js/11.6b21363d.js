(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{195:function(e,t,i){"use strict";i.r(t);var a=i(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"genesis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#genesis","aria-hidden":"true"}},[e._v("#")]),e._v(" Genesis")]),e._v(" "),i("p",[e._v("The initial state of the network is started from the existing ERC20 contract on Ethereum. On the Ethereum mainnet, it is 0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b.")]),e._v(" "),i("p",[e._v("The current genesis procedure is the following:")]),e._v(" "),i("ol",[i("li",[e._v("The initial set of validator (council node) identities is established: each council node should have an associated validator public key (from the Tendermint Ed25519 keypair, used for signing blocks) and initial staking address (same as Ethereum), …")]),e._v(" "),i("li",[e._v("The initial network parameters (e.g. minimum stake amounts) are chosen")]),e._v(" "),i("li",[e._v("At a determined time, the list of ERC20 holders is snapshotted / computed from the Ethereum network.")]),e._v(" "),i("li",[e._v("The list should contain three dedicated addresses for:")])]),e._v(" "),i("ul",[i("li",[e._v("Secondary distribution and launch incentive (0x20a0bee429d6907e556205ef9d48ab6fe6a55531 and 0x35f517cab9a37bc31091c2f155d965af84e0bc85 on the Ethereum mainnet)")]),e._v(" "),i("li",[e._v("Long term incentive (0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07 on the Ethereum mainnet)")])]),e._v(" "),i("p",[e._v("The balances of these dedicated addresses are put to the initial “Rewards Pool” (where transaction fees are paid to and network operation rewards are paid from).")]),e._v(" "),i("ol",[i("li",[e._v("For every ERC20 holder address in the initial distribution, besides the above three addresses, the following rules are used for computing the initial genesis state:")])]),e._v(" "),i("ul",[i("li",[e._v("If the address is owned / controlled by a smart contract, its balance goes to the initial “Rewards Pool”")])]),e._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("DEX, multisig etc. contracts should be avoided during the Step 3")])]),e._v(" "),i("ul",[i("li",[e._v("If the address is an externally owned account and corresponds to the initial staking address of one of council nodes, its balance starts as “bonded” in the corresponding staked state (see "),i("a",{attrs:{href:"./transaction-accounting-model"}},[e._v("accounting mode")]),e._v(" for more details).")]),e._v(" "),i("li",[e._v("Otherwise (i.e. the address is an externally owned account, but not of any validators), the address balance starts as “unbonded” in the corresponding staked state (see "),i("a",{attrs:{href:"./transaction-accounting-model"}},[e._v("accounting mode")]),e._v(" for more details).")])]),e._v(" "),i("p",[e._v("From this initial genesis state, the initial “application hash” (APP HASH) is computed and set in the corresponding genesis.json file of Tendermint and compiled statically into the enclave binaries (that need to be signed by the developer production keys).")]),e._v(" "),i("h2",{attrs:{id:"tendermint-extra-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-extra-information","aria-hidden":"true"}},[e._v("#")]),e._v(" Tendermint extra information")]),e._v(" "),i("p",[e._v("As described in "),i("a",{attrs:{href:"./consensus"}},[e._v("consensus")]),e._v(", Tendermint executes with the application-specific code via ABCI.")]),e._v(" "),i("p",[e._v("The genesis information (network parameters, initial validators etc.) is set in the "),i("code",[e._v("app_data")]),e._v(" field in genesis.json – this information is then passed to the ABCI application in the InitChainRequest.")])])},[],!1,null,null,null);t.default=n.exports}}]);