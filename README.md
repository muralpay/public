# challenge
## welcome
Feel free to use the languages, libraries, frameworks you are most familiar with, if possible Typescript, React, & Node.  Please complete part 1 and part 2 to the best of your ability.

## part 1 - intro challenge: web3 login (goerli test net)
Create a basic web app that allows a user to login via metamask, send fake Ethereum (on the goerli test net), and load their previous transactions.
1. Allow user to login via [metamask chrome extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) or [wallet connect](https://walletconnect.com/).
2. Get some fake Eth from the [faucet](https://goerlifaucet.com/), switch your metamask to the goerli testnet
3. Create simple UI with a login button (opens up metamask login modal), displays user's current balance on the goerli testnet, allows user to send funds to another Ethereum address, displays user's previous transaction hashes in a table (linking each transaction hash to its respective etherscan link).

## part 2 - followup challenge: multi-sig creation
1. Allow user to setup a gnosis multi-sig wallet with an arbitrary number of approvers and a confirmation threshold ([gnosis](https://help.gnosis-safe.io/en/articles/3876461-create-a-safe)).
3. Create simple UI showing approvers, allowing user to edit the nickname for different addresses, changing approvers, as well as changing the confirmation threshold.
4. For testing of multi-sig wallet creation, get some fake eth from the [faucet](https://goerlifaucet.com/), switch your metamask to the goerli testnet, test by initiating transactions. 

## Share your challenge with us
We'd love to hear from you ~ send us your coding challenge at: hello at mural dot xyz.  If you'd like to apply for a position with us, checkout [mural.xyz](https://www.mural.xyz/).

## resources
- [ethers.js - ethereum library](https://docs.ethers.io/v5/)
- [web3.js - ethereum library](https://web3js.readthedocs.io/en/v1.7.3/glossary.html)
- [metamask docs](https://docs.metamask.io/guide/create-dapp.html#basic-action-part-1)
- [sign-in with ethereum](https://docs.login.xyz/integrations/nextauth.js)
- [etherscan api](https://etherscan.io/apis)
- [bnc-onboard - wallet connections](https://www.npmjs.com/package/bnc-onboard)
- [gnosis sdk - multi-sig wallets](https://github.com/gnosis/safe-apps-sdk)
- [gnosis dao - discord help/resources](https://discord.com/invite/M39dTHQ)
- [safe community - discord help/resources](https://discord.gg/junactJf)