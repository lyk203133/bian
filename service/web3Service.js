const Web3 = require('web3');
const abiDecoder = require('abi-decoder');
class Web3Service {
    constructor(providerUrl) {
        if (!providerUrl) providerUrl = 'https://bsc-dataseed.binance.org/'
        this.web3 = new Web3(providerUrl);

    }

    async getTransactionReceipt(transactionHash, contractAddress) {
        try {
            const receipt = await this.web3.eth.getTransactionReceipt(transactionHash);
            const transaction = await this.web3.eth.getTransaction(transactionHash);

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
}

module.exports = Web3Service;
