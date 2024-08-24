
import { useWeb3Modal } from '@web3modal/wagmi/vue'

import Web3 from 'web3'
import axios from 'axios'

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
        window.location.reload()
      } else {
        console.log(res.message)
      }
    }, 2000)
  } catch (error) {
    console.error('Error connecting wallet:', error)
  }
}
