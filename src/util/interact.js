import { createAlchemyWeb3 } from "@alch/alchemy-web3";

//export const helloWorldContract;
const web3 = createAlchemyWeb3("wss://eth-sepolia.g.alchemy.com/v2/5ZD0oAY8It6IJLZtInlJtv7R_hf5Zrnx");
const ContractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "roll",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "department",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			}
		],
		"name": "submit_fees",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToCategory",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToDept",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToFund",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToRoll",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "funders",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "get_Funder",
				"type": "address"
			}
		],
		"name": "show_details",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const ContractAddress = "0xa4923fb3EC85a644Eddd743de466b5fdbB2EbD72";
export const EthContract = new web3.eth.Contract(ContractAbi,ContractAddress);


export const loadCurrentMessage = async () => { 
  
};

export const connectWallet = async () => {
  if(window.ethereum){
    if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const obj = {
            status: "👆🏽 Write a message in the text-field above.",
            address: addressArray[0],
          };
          return obj;
        } catch (err) {
          return {
            address: "",
            status: "😥 " + err.message,
          };
        }
      } else {
        return {
          address: "",
          status: (
            <span>
              <p>
                {" "}
                🦊{" "}
                <a target="_blank" href={`https://metamask.io/download.html`}>
                  You must install Metamask, a virtual Ethereum wallet, in your
                  browser.
                </a>
              </p>
            </span>
          ),
        };
      }
  }
};

export const getCurrentWalletConnected = async () => {
  
};

export const DepositEth = async (eth_amount,address,name,roll_number,department,category) => {
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain.",
    };
  }

//set up transaction parameters
const transactionParameters = {
to: ContractAddress, // Required except during contract publications.
from: address, // must match user's active address.
value: web3.utils.toWei(eth_amount, 'ether'),
data: EthContract.methods.submit_fees(name,roll_number,department,category).encodeABI(),
};

//sign the transaction
try {
const txHash = await window.ethereum.request({
  method: "eth_sendTransaction",
  params: [transactionParameters],
});
return {
  status: (
    <span>
      ✅{" "}
      <a target="_blank" href={`https://sepolia.etherscan.io/tx/${txHash}`}>
        View the status of your transaction on Etherscan!
      </a>
      <br />
      ℹ️ Once the transaction is verified by the network, the message will
      be updated automatically.
    </span>
  ),
};
} catch (error) {
return {
  status: "😥 " + error.message,
};
}
};

export const ShowDetails = async(funder_address) =>{
  const details = await EthContract.methods.show_details(funder_address).call();
  return details;
}
