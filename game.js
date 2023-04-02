var n;

document.getElementById("myButton").addEventListener("click",function(){
    n= document.getElementById("n_value").value;
    game(n,ans);
})

document.getElementById("n_value").addEventListener("keypress",function(event){
    if(event.key===("Enter")){
        n= document.getElementById("n_value").value;
        game(n,ans);
    }
})

let ans = Math.floor(Math.random() * 100) + 1;
let i = 0, score = 10;


function game(n,ans){
    console.log(ans)
    console.log(n)
    var output = document.getElementById("output");
    if (n != ans) {
      if (n > ans) {
        output.textContent = "DOWN";
      }
      else {
        output.textContent = "UP";
      }
      i++;
    }
    else {
    document.getElementById("myConnect").style.display = "block";
    output.textContent = (`Congrats, you guessed the number! Your score was ${(score - i/2).toFixed(1)}\n`);
    score=10*(score-i/2);
    }
    }


async function connect(){
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        await provider.send("eth_requestAccounts", []);

        const abi=[
{
    "inputs": [],
    "name": "award",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "points",
            "type": "uint256"
        }
    ],
    "name": "pay",
    "outputs": [],
    "stateMutability": "payable",
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
    "name": "addressToPoints",
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
    "name": "alreadyPlayed",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "seeBlockElapsedTime",
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
            "name": "index",
            "type": "uint256"
        }
    ],
    "name": "seeLeaderboard",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}
]
const contractaddress="0xF0797C150A96d2E6b97Aa0aEA937ab56a3Bb6C5f"
const gameContract = new ethers.Contract(contractaddress, abi, provider);
const signer = provider.getSigner()
const res = await gameContract.connect(signer).pay(score);

}

