import { ethers } from "ethers"
import abi from "./abi/Counter.json"

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

async function main() {
    const httpProvider = new ethers.JsonRpcProvider() // default: http://127.0.0.1:8545/
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, httpProvider)
    contract.on('Increment', (sender, count, event) => {
        console.log(`Incremented count: ${ethers.formatUnits(count, 'wei')}.`)
    })
    contract.on('Decrement', (sender, count, event) => {
        console.log(`Decremented count: ${ethers.formatUnits(count, 'wei')}.`)
    })
}

main()