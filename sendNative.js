// transfer Native Balance 

const {ethers} = require('ethers')

const node = 'Quicknode https://bit.ly/3QxPwWk'
const provider = new ethers.providers.JsonRpcProvider(node)



const privatekey = 'sender Privatekey'
const wallet = new ethers.Wallet(privatekey, provider)


const receiver= 'receiver tokenAddress'
const sender = 'sender tokenAddress'

const amountToSend = '0.00045'

const tx ={
    to: receiver,
    value: ethers.utils.parseEther(amountToSend)
}

async function main(){
    const balance = await provider.getBalance(sender)
    console.log(ethers.utils.formatEther(balance))

    wallet.sendTransaction(tx)
        .then((txObj) => {
            console.log('txHash', txObj.hash)
    })

}
main()
