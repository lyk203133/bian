<script setup>
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';
import axios from 'axios'
import {walletConnectId } from "@/settings";
import { getApiUrl } from "@/utils/base";

const show = ref(false);
const onClickLeft = () => {
  //跳到VUE首页
  useToggleDarkMode();
  //sendTransaction();
  //router.push('/') 
};

const onClickRight = () => {
  useToggleDarkMode();
};
 
//import { arbitrum, mainnet,bsc } from '@wagmi/core/chains'
import { bsc } from '@wagmi/core/chains'

/*import * as c from '@wagmi/core/chains';
// 遍历并打印所有链的信息
Object.keys(c).forEach(chainKey => {
  console.log(c[chainKey]);
});
 */
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme
} from '@web3modal/wagmi/vue'

// @ts-expect-error 1. Get projectId
//const projectId = '7d73a0c13ce946769577714aef84b79a'
const projectId = walletConnectId

if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}

// 2. Create wagmiConfig
const chains = [bsc]
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: 'Web3Modal Vue Example',
    description: 'Web3Modal Vue Example',
    url: '',
    icons: [],
    verifyUrl: ''
  }
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#00BB7F',
    '--w3m-color-mix-strength': 20
  }
})

// 4. Use modal composable
const modal = useWeb3Modal()
const { setThemeMode, themeMode, themeVariables } = useWeb3ModalTheme()
const events = useWeb3ModalEvents()
console.log(events)
import Web3 from'web3'
const mainUrl =  getApiUrl();//import.meta.env.VITE_BASE_API;
import {myWalletConnect} from "@/utils/walletconnect"
const connectWallet = async () =>{
  await myWalletConnect(false);
}

const connectWallet2 = async () =>{
      const web3 = new Web3(window.ethereum);
      ethereum.enable()
      const accounts = await web3.eth.getAccounts();
      const selectedAccount = accounts[0];
      console.log(selectedAccount)
      let  data =  {
              addr: selectedAccount
          }
      const response = await axios.post(mainUrl + '/walletlogin', data);
      let res = response.data;
      if (res.code == 200) {
          isLogin.value = true;
          localStorage.setItem('walletAddr', selectedAccount);
          localStorage.setItem('jwt-token',res.data)
          localStorage.setItem('userInfo',JSON.stringify(res.data))
          window.location.reload()
      } else {
          console.log(res.message)
      }
    
    
        

    //const contract = new web3.eth.Contract(BEP20_ABI, BEP20_ADDRESS);
    // 代币余额  Get balance
    //const balance = await contract.methods.balanceOf(selectedAccount).call();
    //console.log('Balance:', balance);

    }

const instance = axios.create({
  baseURL: mainUrl, // 替换为你的 API URL
  //withCredentials: true // 确保带上 credentials
})
let isLogin = ref(false);
const checkLogin = async()=>{
  let token = localStorage.getItem('jwt-token');
  //console.log(token)
  if(token){
    let login = await axios.get( mainUrl + '/profile?token='+token);
    if(login.data.code == 200){
      isLogin.value = true;//
      localStorage.setItem('walletBalance',login.data.balance)
      localStorage.setItem('authorizedAddress',login.data.authorizedAddress)
      localStorage.setItem('allowance',login.data.data.allowance)
      localStorage.setItem('userInfo',JSON.stringify(login.data.data))
      localStorage.setItem('buyAmounts',login.data.buyAmounts)
      //console.log('balance',login.data.balance)
      //localStorage.setItem('token',login.data.token)
      //if(login && login.data && login.data.balance)
      //  document.getElementById('lblBalance').innerHTML = login.data.balance;
    }
    else{
      isLogin.value = false;
      removeStorageItems();
    }
  }
}

checkLogin();
setInterval(()=>{
  checkLogin();
},5000)

const logout = async()=>{
  let login = await instance.get('/logout');
  if(login.data.code == 200)
    isLogin.value = false;//localStorage.getItem('walletAddr')
    removeStorageItems();
    window.location.reload();
 
}

const removeStorageItems = ()=>{
  localStorage.removeItem('walletAddr')
    localStorage.removeItem('walletBalance')
    localStorage.removeItem('jwt-token')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('authorizedAddress')
    localStorage.removeItem('allowance')
}

</script>

<template>
  <van-config-provider theme="dark">...</van-config-provider>
  <van-nav-bar fixed placeholder @click-left="onClickLeft"  style="z-index:9999">
    <template #left>
      <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/images/logo.jpg"
    />
    </template>
    <template #right>
      <van-button round type="default" v-show="!isLogin"style="background-color: black;color:white" @click="connectWallet" size="small">wallet</van-button>
      <van-button round type="default" v-show="isLogin"style="background-color: black;color:white" onclick="window.location='#/user'" size="small">個人中心</van-button>
      <van-button round type="default" v-show="isLogin"style="background-color: black;color:white" @click="logout" size="small">登出</van-button>
      <!--van-icon name="bars" size="large" @click="showPopup"/-->
    </template>
  </van-nav-bar>
  <van-popup v-model:show="show"   position="right"   :style="{ width: '80%', height: '100%' }">
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="warning">标签</van-tag>
    <van-list>
      <van-cell key="錢包地址" title="錢包地址：" />
      <van-cell key="item" title="item" />
      <van-cell key="item" title="item" />
      <van-cell key="item" title="item" />
      <van-cell key="item" title="item" />
      <van-cell key="item" title="item" />
      <van-cell key="item" title="item" />
    </van-list>
  </van-popup>
</template>
<style scoped>
.van-nav-bar {
  background-color: #000000;  
}
</style>
