<script setup name="Home">
import { ref ,computed,onMounted} from "vue";
import { Space, Image as VanImage } from 'vant';
import 'vant/lib/index.css';
import * as d3 from "d3";
import { getPricing,getMarketData } from "@/api/";
 
let rows = ref([]);
let initPricing = async ()=>{
  let resp = await getPricing();
  let listData =resp.data.data;

  for (let i in listData) {
      let item = listData[i]
      let currencyName = item.symbol.replace('USDT', '')
      listData[i].currencyName = currencyName
      listData[i].iconName= currencyName.toLowerCase()
      listData[i].lastPrice= parseFloat(item.lastPrice).toFixed(2)
      listData[i].priceChange= parseFloat(item.priceChange).toFixed(2)
  }
  rows.value = listData
}

initPricing();
setInterval(()=>{
  initPricing()
},3000)

const images = import.meta.glob('@/assets/images/*.png');

function draw(id, data) {

var svg = d3.select("#" + id)
    //width = +svg.attr("width"),
    //height = +svg.attr("height");
var width = 90;
var height=50;
// 定义比例尺  
var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, function (d) { return d.x; })])
    .range([0, width]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function (d) { return d.y; })])
    .range([height, 0]);

// 定义线条生成器  
var lineGenerator = d3.line()
    .x(function (d) { return xScale(d.x); })
    .y(function (d) { return yScale(d.y); })
    .curve(d3.curveLinear); // 你可以更改curve方法以使用不同的曲线，如d3.curveBasis  

// 绘制线条  
svg.append("path")
    .datum(data) // 绑定数据  
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", lineGenerator); // 应用线条生成器  
}

let drawFun = async () => {
    for (let i in rows.value) {
        let item = rows.value[i];
        let res = await getMarketData({
          symbol : item.currencyName+'USDT',
          limit:150,
          interval:'15m'
        });// await axios.get('https://api.jz1378.com/market_data?symbol=' + item.currencyName + 'USDT&limit=150&interval=15m')
        //console.log(res.data.data)
        let item_data = res.data.data.map((e, n) => {
            return {
                x: n * 50,
                y: e[1]
            }
        })

        draw('chart' + i, item_data)
    }
      
}

onMounted(() => {
  
});

let getImageSrc = (currencyName) =>{
  try {
    console.log( (`@/assets/images/${currencyName.toLowerCase()}.png`))
    return require(`@/assets/images/${currencyName.toLowerCase()}.png`)
  } catch (e) {
    console.error(`Image not found for currency: ${currencyName}`)
    return '' // 返回默认图片路径或者空字符串
  }
}
import { ethers } from 'ethers'
import { useWeb3Modal } from '@web3modal/wagmi/vue'
const { open } = useWeb3Modal()
    const account = ref(null)
    const balance = ref(null)

    const connectWallet = async () => {
      try {
        const provider = await open()
        const signer = provider.getSigner()
        debugger;
        let account  = await signer.getAddress()
        console.log(account);
        const balanceBigNumber = await signer.getBalance()
        balance.value = ethers.utils.formatEther(balanceBigNumber)

        
      } catch (error) {
        console.error('Error connecting wallet:', error)
      }
    }

   
 
</script>

<template>
  <div class="index-top-bg" >
       <div class="index-ad-words">
          <h1>
            <span>在 KuCoin 上<br>
              尋找下一個<span class="primary"> Crypto Gem </span></span>
          </h1>
       </div>
       <div class="index-ad-words2"><span>全球每四個數字貨幣持有者，就有一個是 KuCoin 的用戶</span></div>
       <Space></Space>
       <Space></Space>
       <Space></Space>
       <Space></Space>
       <Space></Space>
       <div>
        <van-button round type="default" style="background-color: black;color:white" @click="connectWallet">立即登入智能錢包</van-button>
        <Space></Space>
        <Space></Space>
        <br>
        <br>
        <span style="color:gray;font-size:12px;margin-left:2rem">3000萬用戶的選擇</span>
       </div>
  </div>
  <!-- 居中 -->
 <div class="info">
  <van-row justify="left"  >
    <van-col span="6" class="title">200+</van-col>
    <van-col span="6" class="title">3000 萬</van-col>
  </van-row>
  <van-row justify="left"  >
    <van-col span="6" class="desc">覆蓋國家</van-col>
    <van-col span="6"  class="desc">全球投資者</van-col>
  </van-row>
  <Space></Space>
  <van-row justify="left" >
    <van-col span="6" class="title">700+</van-col>
    <van-col span="6" class="title">3000 萬</van-col>
  </van-row>
  <van-row justify="left">
    <van-col span="6" class="desc">數字貨幣</van-col>
    <van-col span="6" class="desc">24h 成交額</van-col>
  </van-row>
</div>
<Space></Space>
<div class="symbols">
  <div class="title">
    今天的加密貨幣市場
  </div>
  <div class="list">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">市場概況</h3>
    </div>
    <Space></Space>
    <!--van-row justify="left"  >
      <van-col span="3" class="item"> 
      </van-col>
      <van-col span="5" class="">幣別</van-col>
      <van-col span="8" class="">最新價</van-col>
      <van-col span="8" class="">漲幅</van-col>
    </van-row-->
    <van-row justify="left"  v-for="(row,index) in rows">
      
        <van-col span="3" class="item"> 
        <img class="icon" src="~@/assets/images/btc.png" v-if="row.currencyName == 'BTC'" />
        <img class="icon" src="~@/assets/images/eth.png" v-if="row.currencyName == 'ETH'" />
        <img class="icon" src="~@/assets/images/bnb.png" v-if="row.currencyName == 'BNB'" />
        <img class="icon" src="~@/assets/images/ada.png" v-if="row.currencyName == 'ADA'" />
        <img class="icon" src="~@/assets/images/trx.png" v-if="row.currencyName == 'TRX'" />
        <img class="icon" src="~@/assets/images/usdc.png" v-if="row.currencyName == 'USDC'" />
        <img class="icon" src="~@/assets/images/matic.png" v-if="row.currencyName == 'MATIC'" />
        <img class="icon" src="~@/assets/images/doge.png" v-if="row.currencyName == 'DOGE'" />
        <img class="icon" src="~@/assets/images/sol.png" v-if="row.currencyName == 'SOL'" />
        <img class="icon" src="~@/assets/images/dot.png" v-if="row.currencyName == 'DOT'" />
      </van-col>
      <van-col span="5" class="">{{ row.currencyName }}</van-col>
      <van-col span="8" class="">${{ row.lastPrice }}</van-col>
      <van-col span="8" class=""><van-button size="small" :type="row.priceChange>0?'danger':'success'"  style="width:6rem">${{ row.priceChange }}</van-button></van-col>
    </van-row>
     
     
  </div>
  <div class="good">
    <van-row justify="left" >
      <van-col span="6" class=""><img src="~@/assets/images/good1.png" style="width:4rem" /></van-col>
      <van-col span="18" class="">
        <h1>安全資產儲存</h1>
        <span class="desc">我們領先的加密和儲存系統確保您的資產始終安全保密。</span>
      </van-col>
    </van-row>
    <Space></Space>
    <van-row justify="left" >
      <van-col span="6" class=""><img src="~@/assets/images/good2.png" style="width:4rem" /></van-col>
      <van-col span="18" class="">
        <h1>強大的賬戶安全性</h1>
        <span class="desc">我們堅持最高的安全標準並實施最嚴格的安全措施，以確保您的帳戶安全。</span>
      </van-col>
    </van-row>
    <Space></Space>
    <van-row justify="left" >
      <van-col span="6" class=""><img src="~@/assets/images/good3.png" style="width:4rem" /></van-col>
      <van-col span="18" class="">
        <h1>資產儲備證明—資產透明度</h1>
        <span class="desc">資產儲備證明（PoR）是一種廣泛使用的證明區塊鏈資產託管的方法。 這意味着 KuCoin 擁有涵蓋我們賬面上所有用戶資產的資金。</span>
      </van-col>
    </van-row>
    <Space></Space>
    <van-row justify="left" >
      <van-col span="6" class=""><img src="~@/assets/images/good4.png" style="width:4rem" /></van-col>
      <van-col span="18" class="">
        <h1>可信平台</h1>
        <span class="desc">我們有一個安全的設計基礎，以確保快速檢測和響應任何網絡攻擊。</span>
      </van-col>
    </van-row>
    <Space></Space>
  </div>
</div>
 
</template>
<style scoped>

 .index-ad-words  {
  font-size:2rem;
  font-weight: 600;
  line-height: 130%;
  font-family: Roboto, "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei";
 }

 .index-ad-words .primary {
    color: rgb(1, 188, 141);
}

.index-ad-words2  {
  margin-top:1rem;
  color:gray;
  font-size:12px;
  line-height: 130%;
}

.index-top-bg{
  font-family: Roboto, "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei";
  padding-top: 5rem;
  margin: 1rem .2rem 1rem .2rem;
  background-image: url('/src/assets/images/index-top-bg.png');
  background-size:cover;  
  background-repeat: no-repeat;
  background-position: center;  
  height: 100vw; /* 或者你需要的任何高度 */  
  width: 100%; /* 如果需要的话 */  
}

.info{
  width: 100%;
  margin-left:1rem;
}

.info .title {
    color: rgb(29, 29, 29);
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    height: 1.3em;
    white-space: nowrap;
}

.info .desc {
   
    margin-top: 10px;
    font-size: 14px;
    line-height: 130%;
    color: rgba(29, 29, 29, 0.4);
 
}

.symbols{
  margin-left:.5rem;
}

.symbols .title{
  color: rgb(29, 29, 29);
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    height: 1.3em;
    white-space: nowrap;
}

.symbols .list{
  margin-top:10px;
    border: 1px solid rgba(29, 29, 29, 0.08);
    width: 98%;
    height: 50rem;
    padding: 20px 16px;
    border-radius: 16px;
    
}

.symbols .list .item{
  height: 4rem;
}

.symbols .list .icon{
  width: 2rem;
  height: 2rem;
}

.good{
  margin-top: 1rem;
  width:100%
}

.good h1{
  font-weight: bold;
}

.good .desc{
  color:gray;
  font-size:12px
}

.btc{
  background-image: url("~@/assets/images/btc.png");
}

</style>