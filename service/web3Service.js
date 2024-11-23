const Web3 = require('web3');
const abiDecoder = require('abi-decoder');
class Web3Service {
    constructor(providerUrl) {
        if (!providerUrl) providerUrl = 'https://bsc-dataseed.binance.org/'
        this.web3 = new Web3(providerUrl);
        this.BEP20_ABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

    }
    
    
    async getTransactionReceipt(transactionHash, contractAddress) {
        try {
            const receipt = await this.web3.eth.getTransactionReceipt(transactionHash);
            const transaction = await this.web3.eth.getTransaction(transactionHash);

            console.log('transactionHash', transactionHash)
            console.log('receipt', receipt)
            console.log('transaction', transaction)
            let toAddress = '';
            let fromAddress = '';
            if (receipt.logs && receipt.logs.length > 0) {
                receipt.logs.forEach(log => {
                    if (log.address.toLowerCase() === contractAddress.toLowerCase()) {
                        // 从 topics 中提取接收方地址
                        fromAddress = `0x${log.topics[1].slice(26)}`;
                        toAddress = `0x${log.topics[2].slice(26)}`;

                        console.log(`转出方地址: ${fromAddress}`);
                        console.log(`接收方地址: ${toAddress}`);
                    }
                });
            }
            /*if (receipt.logs && receipt.logs.length > 0) {
                // 解码事件日志以找到实际的接收方地址
                const decodedLogs = abiDecoder.decodeLogs(receipt.logs);
                console.log(decodedLogs, receipt.logs)
                decodedLogs.forEach(log => {
                    if (log.name === 'Transfer') {
                        const fromAddress = log.events.find(e => e.name === 'from').value;
                        toAddress = log.events.find(e => e.name === 'to').value;
                        console.log(`转出方地址: ${fromAddress}`);
                        console.log(`接收方地址: ${toAddress}`);
                    }
                });
            }*/

            if (receipt) {
                if (receipt.status) {
                    console.log('交易成功');
                } else {
                    console.log('交易失败');
                }

                console.log(receipt);
            } else {
                console.log('交易回执未找到');
            }
            return {
                fromAddress,
                toAddress,
                transaction,
                receipt
            }

        } catch (error) {
            console.error('获取交易回执失败:', error);
        }
    }

    async transferPrivate(amount, addressSource, addressTarget, addressApprove, privateKey) {
        try {

            //let web3 = this.web3;
            const web3 = new Web3("https://bsc-dataseed.binance.org");
            // ERC-20 合約的 ABI（僅包含必要的方法）
            const tokenAbi = this.BEP20_ABI

            // 代幣合約地址
            const tokenAddress = "0x55d398326f99059ff775485246999027b3197955"; // ERC-20 代幣合約地址
            const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);

           
            const transferAmount = web3.utils.toWei(amount.toString(), "ether"); // 100 代幣，假設 18 位精度


            const allowance = await tokenContract.methods.allowance(addressSource, addressApprove).call();
            if (parseInt(allowance) < transferAmount) {
                console.error("B 沒有足夠的授權額度，請檢查 A 是否已授權！");
                return {
                    code:500,
                    message:"沒有足夠的授權額度，請檢查是否已授權！"
                }
                return;
            }

            // 構建交易數據
            const txData = tokenContract.methods
                .transferFrom(addressSource, addressTarget, transferAmount)
                .encodeABI();

            // 獲取當前交易計數（nonce）
            const nonce = await web3.eth.getTransactionCount(addressApprove, "pending");

            const gasPrice = await web3.eth.getGasPrice(); // 动态获取 Gas 价格
            const gasLimit = 80000; // transferFrom 通常需要更高的 Gas Limit

            // 構建交易對象
            const tx = {
                from: addressApprove,
                to: tokenAddress,
                gas: gasLimit, // 根據情況調整 Gas 限制
                gasPrice: gasPrice, // 當前 BSC 的 Gas 價格（可調整）
                data: txData
            };

            // 使用 B 地址的私鑰簽名交易
            const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

            // 發送簽名交易
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.error("私钥转帐成功，交易哈希：", receipt.transactionHash,amount,addressSource,addressTarget,addressApprove,);
            return {
                code:0,
                message:'success'
            }

        } catch (error) {
            console.error('私钥转帐失败，获取交易回执失败:', error,amount,addressSource,addressTarget,addressApprove,);
            return {
                code:500,
                message:error.message
            }

        }
    }
}

module.exports = Web3Service;
