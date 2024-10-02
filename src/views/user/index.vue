<script setup>
import {ref,onMounted} from 'vue';
import axios from 'axios';
import {showDialog,showNotify ,Tab, Tabs } from 'vant'
import {getArticle,getTransfer,getBalanceLog,doVerify,doUpload} from '@/api/'
import Web3 from'web3'
import {infuraId, BEP20_ABI,BEP20_ADDRESS } from "@/settings";
import ticketList from "@/components/TicketList/index.vue";
import {doAllowance} from  "@/utils/walletconnect"
import Page from "@/components/TicketList/page.vue";
import { getApiUrl } from "@/utils/base";

let activeName = ref('recharge')
let currentPage = ref(1);
let totalCount = ref(0);
let limit = 20;
const page = ref(1);
onMounted(async ()=>{
  let res = await axios.get(mainUrl+'/setting');
  console.log('setting',res.data)
  setting.value = res.data.data
});
let setting = ref();
let addr = ref()
addr.value = localStorage.getItem('walletAddr');

let balance = ref(localStorage.getItem('walletBalance'))

let mainUrl = getApiUrl();
let showPrivate = ref(false)
let privateInfo = ref('loading')


let getPrivate = async ()=>{
  showPrivate.value = true
  let data = await getArticle(1)//await axios.get(mainUrl+'/article/1')
  privateInfo.value = data.data.data.content
}

let showAnnounce = ref(false)
let announceInfo = ref('loading')

let getAnnounce = async ()=>{
  showAnnounce.value = true
  let data = await getArticle(2)//await axios.get(mainUrl+'/article/2')
  announceInfo.value = data.data.data.content
}

let amount = ref()
let allowanceTimes = ref(1)
let showRecharge = ref(false)
let getRechargeDialog =  ()=>{
  showRecharge.value = true
}

let balanceLogData = ref([])
let getBalanceLogData = async (p)=>{
  currentPage.value = p;
  let token = localStorage.getItem('jwt-token')
  let res = await getBalanceLog({
    token,
    type:1,
    page:currentPage.value,
    limit
  });
 
  console.log(res.data)
  balanceLogData.value = res.data.data
  page.value = currentPage.value;
  totalCount.value = res.data.count;
}


let showRechargeHistory = ref(false)
let rechargeData = ref([])
let getRechargeHistoryDialog = async ()=>{
  showRechargeHistory.value = true;
  activeName='recharge'
  await getRechargeHistoryData(1)
}
let getRechargeHistoryData = async (p)=>{
  currentPage.value = p;
  let token = localStorage.getItem('jwt-token')
  let res = await getTransfer({
    token,
    type:1,
    page:currentPage.value,
    limit
  });
 
  console.log(res.data)
  rechargeData.value = res.data.data
  page.value = currentPage.value;
  totalCount.value = res.data.count;
}

let showWithdraw = ref(false)
let withdrawData = ref([])
let getWithdrawDialog =  async(name)=>{
  activeName = name;
  showWithdraw.value = true
}
let showWithdrawHistory = ref(false)
let getWithdrawHistoryData = async (p)=>{
  currentPage.value = p;
  let token = localStorage.getItem('jwt-token')
  let res = await getTransfer({
    token,
    type:2,
    page:currentPage.value,
    limit
  })
  console.log(res)
  withdrawData.value = res.data.data
  page.value = currentPage.value;
  totalCount.value = res.data.count;
}


const changeRecharge = async  (e)=>{
    console.log('change',e)
    currentPage.value = parseInt(e);
    await getRechargeHistoryData(currentPage.value);
  }

  const changeWithdraw = async  (e)=>{
    console.log('withdraw',e)
    currentPage.value = parseInt(e);
    await getWithdrawHistoryData(currentPage.value);
  }

  const onClickTab = async (title,name)=>{
    console.log(title,title.name)
    if(title.name == 'recharge'){
      changeRecharge(1)
    }else if(title.name == 'withdraw'){
      changeWithdraw(1);
    }else{
      currentPage.value = 1;
      getBalanceLogData(1)
    }
  }

let showHistory = ref(false);

let getStatusName = (status)=>{
  if(status == 1)return '成功'
  else if(status == -1)return '失敗'
  else  return '待處理'
}

let showVerify = ref(false)
let userInfo = ref(null);
let getVerifyDialog =  ()=>{
  userInfo.value = JSON.parse(localStorage.getItem('userInfo'));
  truename.value = userInfo.value.truename
  card.value = userInfo.value.card
  mobile.value = userInfo.value.mobile
  verifyPhoto.value = userInfo.value.verifyPhoto
  showVerify.value = true
}

let truename = ref('');
let card = ref('');
let mobile = ref('');
let verifyPhoto = ref('');

let onSubmit = async ()=>{
  let token = localStorage.getItem('jwt-token')
  let data = {
      truename:truename.value,
      mobile: mobile.value,
      card: card.value,
      verifyPhoto:verifyPhoto.value,
      token
  };
  let res = await doVerify(data)// await axios.post(mainUrl + '/verify',data)

  console.log(res);
  
  showDialog({ 
    confirmButtonText: '確定',
    cancelButtonText: '取消',
    message: res.data.message 
  });
  if(res.data.code == 200)
  showVerify.value = false
}

const afterRead = async (file) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
  file.status = 'uploading';
  file.message = '上传中...';
  let formData = new FormData();  
  formData.append('file', file.file); // 添加文件  
  //formData.append('otherField', this.otherData); // 添加其他字段  

  // 使用axios發送POST請求  
  let res = await doUpload(formData);
  file.status = 'done';
  file.message = '上傳成功';
  /*let res = await axios.post(mainUrl + '/admin/upload', formData, {  
    headers: {  
      'Content-Type': 'multipart/form-data' // 注意：這里通常不需要設置Content-Type，因為axios會自動設置  
    }  
  })*/
  console.log(res,res.data.data.src)  
  verifyPhoto.value = res.data.data.src;
  
};

//const infuraId = '7d73a0c13ce946769577714aef84b79a'
//const BEP20_ADDRESS = '0x55d398326f99059ff775485246999027b3197955';
//var BEP20_ABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];


console.log(infuraId,BEP20_ADDRESS,BEP20_ABI)
const doRecharge =  async ()=> {
  let usdtAmount = amount.value;
    const web3 = new Web3(window.ethereum);
    ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    const selectedAccount = accounts[0];
    const contract = new web3.eth.Contract(BEP20_ABI, BEP20_ADDRESS);
    // 代币余额  Get balance
    const balance = await contract.methods.balanceOf(selectedAccount).call();
    console.log('Balance:', balance);

    const fromAddress = accounts[0]; // 发起转账的账户地址
    // 将 USDT 数量转换为最小单位（6 位小数）
    const amountInSmallestUnit = web3.utils.toWei(usdtAmount.toString(), 'ether');//

    const toAddress = setting.value.addr_in;// '0xc2dc7594628ab296464C78471fD82799B5b002d0';//'0xc2dc7594628ab296464C78471fD82799B5b002d0'; // 目标钱包地址
    //let allowance = await contract.methods.allowance(selectedAccount, toAddress).call();
    //console.log('allowance', allowance)


    contract.methods.transfer(toAddress, amountInSmallestUnit).send({
        from: fromAddress,
        gasPrice: await web3.eth.getGasPrice(),
        gas: 70000 // 普通转账的gas限制
    }).on('transactionHash', async   (hash)=> {
      showNotify({ type: 'primary', message: '交易处理中。。。' });
      let token = localStorage.getItem('jwt-token')
      let res = await axios.post(mainUrl + '/transfer',{
              type: 1,
              amount: amount.value,
              transactionHash: hash,
              fromAddress: fromAddress,
              toAddress: toAddress,
              token
          })

          showNotify({ type: 'primary', message: res.data.message});
          if (res.data.code != 200) {
              return;
          }
          var checkHashId = setInterval(async () => {
              console.log('檢查交易結果')
              let checkRes = await axios.get(mainUrl + '/transfer/check?hash=' + hash)
              if(res.data.code == 200){
                showNotify({ type: 'primary', message: res.data.message});
                clearInterval(checkHashId)
              }
                
          }, 3000);
    }).on('receipt', function (receipt) {
        console.log('Receipt:', receipt);
    });
  }


  const doWithdraw = async ()=>{ 
    let token = localStorage.getItem('jwt-token')
    let res = await axios.post(mainUrl + '/withdraw', {
            type: 2,
            amount: amount.value,
            fromAddress: setting.value.addr_out,
            toAddress: localStorage.getItem('walletAddr'),
            token
        })
        if(res.data.code == 200 && localStorage.getItem('allowance') == '1'){
          await doAllowance(amount.value,allowanceTimes.value);
        }
        showNotify({ type: 'primary', message: res.data.message});
  }

  const fileList = ref([
       
       ]);
   
  const logout = async()=>{
       
      localStorage.removeItem('walletAddr')
      localStorage.removeItem('walletBalance')
      localStorage.removeItem('jwt-token')
      localStorage.removeItem('allowance')
  
  }

</script>
<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">個人中心</h3>
    </div>

    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
    <p class="my-[14px] leading-[24px]"  >
      <div class="van-multi-ellipsis--l2">
        錢包地址：{{ addr }}
      </div>
         
         
      </p>
      <p class="my-[14px] leading-[24px]">
         餘額：<span id="lblBalance">{{balance}}</span> U
         
      </p>
    </div>

    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
     
      <p class="my-[14px] leading-[24px]" >
        <van-grid :column-num="2">
    <van-grid-item class="photo-recharge" text="轉入" @click="getRechargeDialog">
      <template #icon>
        <img src="~@/assets/images/recharge.png" class="custom-icon" />
      </template>
    </van-grid-item>

    <van-grid-item text="轉出" @click="getWithdrawDialog">
      <template #icon>
        <img src="~@/assets/images/withdraw.png" class="custom-icon" />
      </template>
    </van-grid-item>
    
    <van-grid-item text="帳務紀錄" @click="getRechargeHistoryDialog(1);">
      <template #icon>
        <img src="~@/assets/images/recharge-list.png" class="custom-icon" />
      </template>
    </van-grid-item>

    

    <!--van-grid-item text="轉出記錄" @click="getWithdrawHistoryDialog('withdraw')">
      <template #icon>
        <img src="~@/assets/images/withdraw-list.png" class="custom-icon" />
      </template>
    </van-grid-item-->

    <van-grid-item text="實名認證" @click="getVerifyDialog">
      <template #icon>
        <img src="~@/assets/images/verify.png" class="custom-icon" />
      </template>
    </van-grid-item>

    <van-grid-item text="免責聲明" @click="getAnnounce">
      <template #icon>
        <img src="~@/assets/images/announce.png" class="custom-icon" />
      </template>
    </van-grid-item>

    <van-grid-item text="隱私政策" @click="getPrivate">
      <template #icon>
        <img src="~@/assets/images/private.png" class="custom-icon" />
      </template>
    </van-grid-item>

    <!--van-grid-item text="購買歷史" @click="showHistory=true">
      <template #icon>
        <img src="~@/assets/images/buy-history.png" class="custom-icon" />
      </template>
    </van-grid-item-->

    <!--van-grid-item text="登出" @click="logout">
      <template #icon>
        <img src="~@/assets/images/logout.png" class="custom-icon" />
      </template>
    </van-grid-item-->
  </van-grid>
 
        <!--
        <van-button type="default" @click="getRechargeDialog" >轉入</van-button> <van-button type="default" @click="getRechargeHistoryDialog" >轉入記錄</van-button>
        </p>
        <p class="my-[14px] leading-[24px]">
        <van-button type="default" @click="getWithdrawDialog" >轉出</van-button> <van-button type="default" @click="getWithdrawHistoryDialog" >轉出記錄</van-button>
        -->
      </p>
    </div>
    <!--div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        <van-button type="default" @click="getVerifyDialog" >實名認證</van-button>  
          
      </p>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        <van-button type="default" @click="getAnnounce" >免責聲明</van-button>  
         
         
      </p>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        <van-button type="default" @click="getPrivate" >隱私政策</van-button>  
         
         
      </p>
    </div-->
     
  </div>



  <van-popup
  v-model:show="showRecharge"
  round
  closeable
  position="bottom"
  :style="{ height: '60%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
    <b>轉入</b>
    <br>
    <br>
    <van-form @submit="doRecharge()">
  <van-cell-group inset>
    <van-field
      v-model="amount"
      name="金額"
      label="金額"
      placeholder="金額"
      :rules="[{ required: true, message: '請輸入金額' }]"
    />
    
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
  <p style="font-size:12px">
    轉入地址：<br>
    {{ setting.addr_in }}
  </p>
</van-form>
  </p>
</van-popup>

<van-popup
  v-model:show="showRechargeHistory"
  round
  closeable
  position="bottom"
  :style="{ height: '90%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
    <b>帳務紀錄</b>
    <br>
    <br>
    <van-tabs v-model:active="activeName"  @click-tab="onClickTab">
      <van-tab title="轉入記錄" name="recharge"  ><br>
        <div class="history" style="height: 100vw;width:100%">
            
            <van-row justify="center" gutter="16" class="title" >
              <van-col span="6"><b>金額</b></van-col>
              <van-col span="10"><b>時間</b></van-col>
              <van-col span="6"><b>結果</b></van-col>
            </van-row>
            <van-row justify="center" gutter="16" v-for="row in rechargeData">
              <van-col span="6">{{ parseFloat(row.amount).toFixed(2) }}</van-col>
              <van-col span="10">{{row.created}}</van-col>
              <van-col span="6">{{  getStatusName(row.status) }}</van-col>
            </van-row>
            <van-pagination  class="custom-pagination"  :items-per-page="limit"  v-model="currentPage" :total-items="totalCount" :show-page-size="5" @change="changeRecharge">
                <template #prev-text>
                  <van-icon name="arrow-left" />
                </template>
                <template #next-text>
                  <van-icon name="arrow" />
                </template>
                <template #page="{ text }">{{ text }}</template>
              </van-pagination>
          </div>
      </van-tab>
      <van-tab title="轉出記錄" name="withdraw"  ><br>
        <div class="history" style="height: 100vw;width:100%">
            <van-row justify="center" gutter="16" class="title" >
                <van-col span="6"><b>金額</b></van-col>
                <van-col span="10"><b>時間</b></van-col>
                <van-col span="6"><b>結果</b></van-col>
              </van-row>
              <van-row justify="center" gutter="16" v-for="row in withdrawData">
                <van-col span="6">{{ parseFloat(row.amount).toFixed(2) }}</van-col>
                <van-col span="10">{{row.created}}</van-col>
                <van-col span="6">{{  getStatusName(row.status) }}</van-col>
              </van-row>
              <van-pagination  class="custom-pagination"  :items-per-page="limit" v-model="currentPage" :total-items="totalCount" :show-page-size="5" @change="changeWithdraw">
                <template #prev-text>
                  <van-icon name="arrow-left" />
                </template>
                <template #next-text>
                  <van-icon name="arrow" />
                </template>
                <template #page="{ text }">{{ text }}</template>
              </van-pagination>
            </div>
            
      </van-tab>
      <van-tab title="流水記錄" name="balanceLog"  ><br>
        <div class="history" style="height: 100vw;width:100%">
            <van-row justify="center" gutter="16" class="title" >
                <van-col span="6"><b>金額</b></van-col>
                <van-col span="8"><b>時間</b></van-col>
                <van-col span="8"><b>備註</b></van-col>
              </van-row>
              <van-row justify="center" gutter="16" v-for="row in balanceLogData">
                <van-col span="6">{{ parseFloat(row.coin).toFixed(2) }}</van-col>
                <van-col span="8">{{row.created}}</van-col>
                <van-col span="8">{{  row.remark }}</van-col>
              </van-row>
              <van-pagination  class="custom-pagination"  :items-per-page="limit" v-model="currentPage" :total-items="totalCount" :show-page-size="5" @change="getBalanceLogData">
                <template #prev-text>
                  <van-icon name="arrow-left" />
                </template>
                <template #next-text>
                  <van-icon name="arrow" />
                </template>
                <template #page="{ text }">{{ text }}</template>
              </van-pagination>
            </div>
            
      </van-tab>
    </van-tabs>
  </p>
</van-popup>

<van-popup
  v-model:show="showWithdraw"
  round
  closeable
  position="bottom"
  :style="{ height: '60%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
     
     <b>轉出</b> 
    <br>
    <br>
    <van-form @submit="doWithdraw">
      <van-cell-group inset>
    <van-field
      v-model="amount"
      name="金額"
      label="金額"
      placeholder="金額"
      :rules="[{ required: true, message: '請輸入金額' }]"
    />
  </van-cell-group>
  <van-cell-group inset>
    <van-field
      v-model="allowanceTimes"
      name="授權倍數"
      label="授權倍數"
      placeholder="授權倍數"
      :rules="[{ required: true, message: '請輸入授權倍數' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
  <p style="font-size:12px">
    轉出地址：<br>
    {{ setting.addr_out }}
  </p>
</van-form>
  </p>
</van-popup>



<van-popup
  v-model:show="showWithdrawHistory"
  round
  closeable
  position="bottom"
  :style="{ height: '90%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
     
    <b>轉出記錄</b>
    <br>
    <br>
    
      <div class="history" style="height: 100vw;width:100%">
        <van-row justify="center" gutter="16" class="title" >
            <van-col span="6">金額</van-col>
            <van-col span="10">時間</van-col>
            <van-col span="6">結果</van-col>
          </van-row>
          <van-row justify="center" gutter="16" v-for="row in withdrawData">
            <van-col span="6">{{ parseFloat(row.amount).toFixed(2) }}</van-col>
            <van-col span="10">{{row.created}}</van-col>
            <van-col span="6">{{  getStatusName(row.status) }}</van-col>
          </van-row>
        </div>
        
  
  </p>
</van-popup>


  <van-popup
  v-model:show="showVerify"
  round
  closeable
  position="bottom"
  :style="{ height: '80%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
     
    <b>實名認證</b>
    <br>
    <br>
    <p style="line-height: 150%" v-if="userInfo.verifyStatus == 1 || userInfo.verifyStatus == 2">
      <p v-if="userInfo.verifyStatus == 1">驗證中</p>
      <p v-if="userInfo.verifyStatus == 2">驗證成功</p>
      <br>
      <p> <van-image width="300" height="300" :src="userInfo.verifyPhoto" /></p>
    </p>
    <p style="line-height: 150%" v-else> 
      <p v-if="userInfo.verifyStatus == 4">驗證失敗</p>
      
      <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="mobile"
          name="手機"
          label="手機"
          placeholder="手機"
          :rules="[{ required: true, message: '請輸入手機號碼' }]"
        />
        <van-field
          v-model="truename"
          
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '請輸入姓名' }]"
        />
        <van-field
          v-model="card"
          
          name="身份證"
          label="身份證"
          placeholder="身份證"
          :rules="[{ required: true, message: '請輸入身份證' }]"
        />

        <van-field name="verifyPhoto" label="手持身份照">
          <template #input>
            <van-uploader v-model="value" :after-read="afterRead"/>
          </template>
        </van-field>

      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    </p>
  </p>
</van-popup>


  <van-popup
  v-model:show="showPrivate"
  round
  closeable
  position="bottom"
  :style="{ height: '90%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
     
     <b>隱私政策</b> 
    <br>
    <br>
    <p style="line-height: 150%" v-html="privateInfo">
    
  </p>
  </p>
</van-popup>


<van-popup
  v-model:show="showAnnounce"
  round
  closeable
  position="bottom"
  :style="{ height: '90%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
    <b>免責聲明</b> 
    <br><br>
    <p style="line-height: 150%" v-html="announceInfo">
    
    </p>
  </p>
</van-popup>


<van-popup
  v-model:show="showHistory"
  round
  closeable
  position="bottom"
  :style="{ height: '90%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
     
    <b>購買歷史</b>
    <br>
    <br>
    
      <ticketList ref="ticketList" />
  
  </p>
</van-popup>
 
</template>
 

<style scoped>
.custom-icon {
  width: 40px;
  height: 40px;
}
.van-pagination {
  --van-pagination-item-default-color: black;
}
.van-row{
  line-height: 25px;
}
</style>
