
## Getting started
First, clone the app by running `git clone https://github.com/Kellories/fiducia`
then, run `yarn` in the root directory. After that, run `yarn start` to get the app started. 

You can now run the app in either an Android Studio emulator or on your physical phone using the Expo Go app. 

## Using Fiducia 
When starting the app, you will be greeted with a login screen. You can create your own account and password (don't worry, Firebase handles encryption for us!). 

After creating your account, go ahead and log in using that account.

## Working features 
- You can create a loan Proposal after pressing the "Request" button in the Home page. 
	- You can also uploaded files such as a PDF or slideshow as part of your Proposal. 
- You can pledge toward a loan in Loans > Pending and selecting a requested Loan. 
- You can view funded Proposals under Loans > Completed, as well as the details of the Loan after pressing one of them. 
	- These Loans are stored on the blockchain.

## Working with the Blockchain 
The chain used in this project is the testnet of the Binance Smart Chain. It's explorer can be found at [TESTNET Binance (BNB) Blockchain Explorer (bscscan.com)](https://testnet.bscscan.com/). 
The following Smart Contracts have been created: 

 - CreateLoanLedger to act as a record-keeping contract: 0x072bCEaD5d20cf5Bd988b39809Fa6CC8977d1046
 - Vault to store FeduciaCoin: 0xFd6c9dC0Eff477FD87a943aF57E69dBf1ddBA451
 - FeduciaCoin ERC20 contract: 0x49201D8822e0cC976aF7F6b4C3f7155eF08b1a81
