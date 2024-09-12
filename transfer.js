const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed.binance.org/');

let transactionHash = '0xe277b906306eb78463633e8b16d8ca31dc1ab0bb17914fafc3c8773891e386a5'
web3.eth.getTransaction(transactionHash)
    .then(transaction => {
        console.log('Transaction details:', transaction);

        // 获取转账金额（以Wei为单位）
        const valueInWei = transaction.value;

        // 将Wei转换为以太币（或其他原生代币）
        const valueInEth = web3.utils.fromWei(valueInWei, 'ether');

        console.log(`Transferred amount: ${valueInEth} ETH`, valueInWei);
    })

    .catch(error => {
        console.error('Error fetching transaction details:', error);
    });


// 获取交易回执
web3.eth.getTransactionReceipt(transactionHash)
    .then(receipt => {
        // 检查状态码
        if (receipt.status) {
            console.log('交易成功');
        } else {
            console.log('交易失败');
        }

        // 输出交易回执的详细信息
        console.log(receipt);
    })
    .catch(error => {
        console.error('获取交易回执失败:', error);
    });
return;

const usdtAddress = '0x55d398326f99059ff775485246999027b319795'.toLowerCase(); // USDT 合约地址

// USDT 合约 ABI，通常可以从 BSCScan 获取
const usdtABI = [
    // 只包含 transfer 方法的 ABI 部分
    {
        "constant": false,
        "inputs": [
            { "name": "_to", "type": "address" },
            { "name": "_value", "type": "uint256" }
        ],
        "name": "transfer",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const privateKey = '36d96bad9340bed581e335309b188464cca4383795d2ef02459699da6b6172be'; // 替换为你的私钥
const fromAddress = '0xc2dc7594628ab296464C78471fD82799B5b002d0'; // 替换为你的地址
const toAddress = '0x079Ba1E1d27a38447B01d1012D31BA8167e0479D'; // 目标地址
const usdtAmount = '1'; // 要转账的 USDT 数量

// 创建合约实例
const usdtContract = new web3.eth.Contract(usdtABI, usdtAddress);

async function sendUSDT() {
    try {
        // 将 USDT 数量转换为最小单位（USDT 是 6 位小数）
        const amountInSmallestUnit = web3.utils.toBN(web3.utils.toWei(usdtAmount, 'mwei'));

        // 构建交易对象
        const tx = {
            from: fromAddress,
            to: usdtAddress,
            data: usdtContract.methods.transfer(toAddress, amountInSmallestUnit).encodeABI(),
            gas: 200000, // 设置 gas 费用，实际值可以根据情况调整
            gasPrice: web3.utils.toWei('5', 'gwei') // 设置 gas 价格
        };

        // 签名交易
        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

        // 发送交易
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Transaction receipt:', receipt);
    } catch (error) {
        console.error('Transaction error:', error);
    }
}

// 执行转账
//sendUSDT();
