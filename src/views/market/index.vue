

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">合約交易</h3>
    </div>
    <van-space>
       
      <van-button type="default" @click="switchSymbol('btc')" :class="{'btn-active': symbolActive === 'btc'}"  >BTCUSDT</van-button>
      <van-button type="default" @click="switchSymbol('eth')" :class="{'btn-active': symbolActive === 'eth'}">ETHUSDT</van-button>
      <van-button type="default" @click="switchSymbol('bnb')" :class="{'btn-active': symbolActive === 'bnb'}">BNBUSDT</van-button>
    </van-space>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        <div id="chart" class="k-line-chart" style="height: 450px;"/>
         
      </p>
    </div>

    </div>
    <div class="tools-content pt-[20px] px-[12px]">
      <van-row justify="center"  >
        <p>{{ currentTimes }} - {{ countdown }}</p><br> 
      </van-row>
      <van-row justify="center"  >
        
        <p style="line-height: 40px;">錢包餘額： ${{ walletBalance }}</p><br>
      </van-row>
   
    <van-row justify="center"  >
      <van-col span="2"  ></van-col>
      <van-col span="5" class="item"><van-button   type="success" @click="showBuyDialog(1)">買    多</van-button></van-col>
      <van-col span="5" class="item"><van-button  type="danger" @click="showBuyDialog(2)">買    空</van-button></van-col>
      <van-col span="8" class="item"><van-button style="background-color: black;color:white;"  type="default" @click="showBuyHistoryDialog()">購買歷史</van-button></van-col>
       
      </van-row>
      
      <!--div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
        <h3 class="font-bold text-[18px] my-[4px]">購買歷史</h3>
      </div>
      <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
       
        <div class="history" style="height: 100vw;width:100%">
          <van-row justify="center" gutter="16" class="title" >
            <van-col span="4">交易兌</van-col>
            <van-col span="6">買價</van-col>
            <van-col span="4">金額</van-col>
            <van-col span="4">時間</van-col>
            <van-col span="6">結果</van-col>
          </van-row>
          <van-row justify="center" gutter="16" v-for="row in historyList">
            <van-col span="4">{{ row.pair }}</van-col>
            <van-col span="6">{{ parseFloat(row.price).toFixed(2) }}</van-col>
            <van-col span="4">{{row.quantity}}</van-col>
            <van-col span="4">{{row.created}}</van-col>
            <van-col span="6">{{ parseFloat(row.result).toFixed(2) }}</van-col>
          </van-row>
        </div>
         
      
    </div-->

  </div>

  <!-- 圆角弹窗（底部） -->
<van-popup
  v-model:show="showBuy"
  round
  closeable
  position="bottom"
  :style="{ height: '80%' }"
>
<van-cell-group style="margin-top:3rem;padding: 1rem">
  
  <van-cell :title="buyTypeName" value=""  />
  <van-cell title="交易兌" :value="pair.toUpperCase()"  />
  <van-cell title="錢包餘額" :value="'$'+walletBalance"  />
  <van-cell title="交易價格" :value="'$'+lastMarketRow.lastPrice" />
 
  <!--van-row justify="left" style=" margin-left:15px;width:100%;font-size:14px;margin-top:1rem" >
    <van-col span="6" class="title" >交易時間</van-col>
    <van-col span="18"  class="flex-container" >
      <van-button  type="default" @click="" size="small">60S</van-button>
      <van-button  type="default" @click="" size="small" >180S</van-button>
      <van-button  type="default" @click="" size="small">300S</van-button>
      <van-button  type="default" @click="" size="small">600S</van-button>
      
    </van-col>
    <van-col span="18" class="flex-container">  
      <van-button  
        type="default"  
        @click="handleSecondClick($event)"  
        :class="{'btn-active': buySecond === 60}"  
        size="small"  
        data-value="60"  
      >60S</van-button>  
      <van-button  
        type="default"  
        @click="handleSecondClick($event)"  
        :class="{'btn-active': buySecond === 180}"  
        size="small"  
        data-value="180"  
      >180S</van-button>  
      <van-button  
        type="default"  
        @click="handleSecondClick($event)"  
        :class="{'btn-active': buySecond === 300}"  
        size="small"  
        data-value="300"  
      >300S</van-button>  
      <van-button  
        type="default"  
        @click="handleSecondClick($event)"  
        :class="{'btn-active': buySecond === 600}"  
        size="small"  
        data-value="600"  
      >600S</van-button>  
    </van-col>  
  </van-row>
  <van-divider /-->
  <van-row justify="left" style="margin-left:15px;width:100%;font-size:14px; " >
    <van-col span="6" class="title">交易金額</van-col>
    <van-col span="18" class="flex-container" >
      {{ buyAmount }}U  
    </van-col>
  </van-row>
  <van-row justify="center" style="margin-left:15px;margin-top:15px;width:100%;font-size:14px; " >

    <van-col span="6" class="title"> </van-col>
    <van-col span="18" class="flex-container" >
    <van-button  
        type="default"  
        @click="handleAmountClick($event)"  
        :class="{'btn-active': buyAmount === amount}"  
        size="small"  
        :data-value="amount"  v-for="amount in buyAmountList"
      >{{ amount }}</van-button>  

      <van-button  type="default"  @click="buyAmount=1" size="small"  >x</van-button>


 </van-col>
</van-row>
  <!--<van-row justify="center" style="margin-left:15px;margin-top:30px;margin-bottom:20px;width:100%;font-size:14px; " >
<van-col span="6" class="title"> </van-col>
<van-col span="18" class="flex-container" style="overflow: hidden;padding-right: 5px;" >
   <van-slider v-model="buyAmount" :min="1" :max="10000" @change="handleAmountSlider" style="width: 90%;"/>
 </van-col>
</van-row>
-->
  
</van-cell-group>
<van-row justify="center" style="margin-top: 2rem;" class="flex-container">
    <van-button justify="center"  style="width:10rem" type="success" @click="handleBuy">確定購買</van-button>
    <van-button justify="center"  style="width:8rem" type="default" @click="showBuy=false">取消</van-button>
  </van-row> 
</van-popup>


<van-popup
  v-model:show="showHistory"
  round
  closeable
  position="bottom"
  :style="{ height: '90%' }"
>
  <p style="padding: 1rem .2rem .2rem; line-height: 20px;">
     
    <b>購買歷史</b>
    <br>
    <br>
    
      <div class="history" style="height: 100vw;width:100%">
      
          
       
          <van-row justify="center" gutter="16" class="title" >
            <van-col span="4">交易兌</van-col>
            <!--van-col span="4">買價</van-col-->
            <van-col span="4">金額</van-col>
            <van-col span="4">操作</van-col>
            <van-col span="4">期號</van-col>
            
            <van-col span="4">結果</van-col>
          </van-row>
          <van-row justify="center" gutter="16" v-for="row in historyList">
            <van-col span="4">{{ row.pair }}</van-col>
            <!--van-col span="4">{{ parseFloat(row.price).toFixed(2) }}</van-col-->
            <van-col span="4">{{row.quantity}}</van-col>
            <van-col span="4" v-if="row.betType==1" style="color:green">買多</van-col>
            <van-col span="4" v-else style="color:red">買空</van-col>
            <van-col span="4">{{moment(row.buyTime).format('MMDDHHmm').toString()}}</van-col>
            <van-col span="6" v-if="row.result > 0" style="color:green">收益</van-col>
            <van-col span="6" v-if="row.result == 0 && row.status != 0" style="color: red;">虧損</van-col>
            <van-col span="6" v-if="row.result == 0 && row.status == 0" style="color: orange;">--</van-col>
            <van-col span="6" v-if="row.status == -1" style="color: orange;">取消</van-col>
            <!--
            <van-col span="4" v-if="row.status == 0">-</van-col>
            <van-col span="4" v-if="row.status == 1">{{ parseFloat(row.result).toFixed(2) }}</van-col>
            <van-col span="4" v-if="row.status == -1">取消</van-col>
            -->
          </van-row>
          <van-pagination  class="custom-pagination"   v-model="currentPage" :total-items="totalCount" :show-page-size="5" @change="change">
            <template #prev-text>
              <van-icon name="arrow-left" />
            </template>
            <template #next-text>
              <van-icon name="arrow" />
            </template>
            <template #page="{ text }">{{ text }}</template>
          </van-pagination>

        </div>
  
  </p>
</van-popup>

</template>
<style>
.flex-container {
  display: flex;
  gap: 8px; /* 设置元素之间的间距 */
  flex-wrap: wrap; /* 如果需要换行，可以添加这个属性 */
}
.history .van-col{
  text-align:center;
  line-height: 180%;
}
.history .title {
  font-weight: bold;
}
.btn-active{
  background-color: black;
  color:white
}
.van-pagination {
  --van-pagination-item-default-color: black;
}
</style>
<script setup>
import {showSuccessToast,showDialog } from "vant";
import "vant/es/toast/style";
import { onMounted, ref, watchEffect,watch } from 'vue';  
import { useRoute,useRouter } from 'vue-router';
import { init } from 'klinecharts'
import { getMarketData,getTickets,doBuy,cancelBuy,getMarketLast,getOpenPrice,getBetRow } from "@/api/";
import axios from "axios"
import moment from "moment"
  const route = useRoute();
  const router = useRouter();
  let symbol =  route.params.symbol || 'btc';
  let symbolActive = ref(symbol);

  symbol += 'usdt'
  const pair = ref(symbol)
  const interval = '1s';
  const binanceSocketUrl = 'wss://stream.binance.com:9443/ws/'+symbol+'@kline_' + interval;
  const reconnectInterval = 5000; // 5 seconds
  let klineData = [];
  let lastPrice = ref(0);
  const chartInstance = ref();
  let socket;
  let showBuy = ref(false);
  let showBuyPop=()=>{
    showBuy.value = true;
  };
  let countdown = ref(0)
  let currentTimes = ref('')
  let showHistory = ref(false)
  let setHistoryShow = () =>{
    showHistory.value = true;
  }

  let currentPage = ref(1);
  let totalCount = ref(0);
  const loading = ref(false);
  const finished = ref(false);
  const page = ref(0);
  let switchSymbol = (symbol)=>{
    window.location = '#/market/'+symbol;
      
    //router.push({ name: 'market', params: { symbol: symbol.toLowerCase() } });
    /*klineData = [];
    socket = null;
    initChart(symbol)
    createWebSocket(symbol+'usdt')*/
  }

  const walletBalance = ref(localStorage.getItem('walletBalance') || '0');
  watchEffect(() => {
  const storedBalance = localStorage.getItem('walletBalance');
  if (storedBalance !== null) {
    walletBalance.value = storedBalance;
  }
});

setInterval(()=>{
  walletBalance.value = localStorage.getItem('walletBalance') || '0'
},5000)
  
  let getHistoryKline = async (symbol,interval)=>{
    let token = localStorage.getItem('token')
      let data = await getMarketData({
        symbol : symbol,
        limit:150,
        interval:interval,
        token
      });//await axios.get(`${mainUrl}/market_data?symbol=${symbol}&interval=${interval}&token=${token}`)
      return data.data;
  }

  watch(() => route.params.symbol, (newId, oldId) => {
    window.location.reload()
    klineData = [];
    console.log('Route parameter changed from', oldId, 'to', newId);
    initChart(newId,interval)
    createWebSocket(newId + 'usdt',interval)
    
  });

  let marketLastData = []
  let lastMarketRow = ref({});
  let initMarketBetRow = async ()=>{
      let response = await getBetRow(symbol);
      console.log('initMarketBetRow.data.data',response.data.data)
      if(response.data.code == 200){
       
        lastMarketRow.value = response.data.data;
       
      }
    }
  let initMarketMinuteData = async ()=>{
      let response = await getMarketLast(symbol);
      if(response.data.code == 200){
        marketLastData = response.data.data;
        lastMarketRow.value = marketLastData.length > 0 ? marketLastData[0]:{};
        //console.log(marketLastData,lastMarketRow.value );

        for(let i in marketLastData){
          let d = marketLastData[i]
            chartInstance.value.updateData({
              timestamp: d.openTime,
              open: d.openPrice,
              high:d.highPrice,
              low: d.lowPrice,
              close: d.closePrice,
              volume: Math.ceil(d.volume)
          });
        }
      }
    }
  onMounted(async () => {  
    console.log('onMounted')
    initChart(symbol,interval)
    createWebSocket(symbol,interval);

    initMarketBetRow();
    setInterval(async ()=>{
      initMarketBetRow();
    },3000)
    
  });

  const onLoad = async () => {
    loading.value = false;

    const newHistory = await getBuyHistory(currentPage.value,10);
    //historyList.value = [...historyList.value, ...newHistory.rows];
    historyList.value = newHistory.rows;
    // 加载状态结束
    loading.value = true;

    // 数据全部加载完成
    if (historyList.value.length >= newHistory.count) {
      finished.value = true;
    }
    page.value = page;

    totalCount.value = newHistory.count;
    
  };

  const change = async  (e)=>{
    console.log('change',e)
    await onLoad();
  }

  const initChart = ()=>{
    console.log(klineData)
    const chartContainer = document.getElementById('chart');  
    if (chartInstance.value) {
      chartInstance.value.remove(); // 如果之前已经初始化过，先销毁
    }
    chartInstance.value = init(chartContainer, {
      locale: 'zh-HK',
      timezone: 'Asia/Shanghai',
      customApi: {
          formatDate: (dateTimeFormat, timestamp, format, type) => {
              const date = new Date(timestamp);
              //return date.toLocaleString();
              return date.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false  // 使用 24 小时制
              });
          },
          formatBigNumber: (value) => {
              return value.toString();
          }
      }
        
  }); // 假设 init 需要 DOM 元素作为参数 
  chartInstance.value.setLocale('zh-HK');

  klineData = [];//generatedDataList(); // 调用函数获取数据  
  console.log(klineData); // 查看数据是否正确  

  if (chartInstance.value && klineData) {  
    chartInstance.value.applyNewData(klineData); // 应用数据到图表  
  }  
  // 创建主图技术指标
  chartInstance.value.createIndicator('MA', false, { id: 'candle_pane' });

  // 创建副图技术指标 VOL
  chartInstance.value.createIndicator('VOL');
  chartInstance.value.setStyles({
      grid: {
          show: false
      },
      xAxis: {
          axisLine: {
              show: true // Hide x-axis line
          },
          tickLine: {
              show: true // Hide x-axis tick lines
          },
          tickText: {
              // 格式化显示秒级别的时间
              formatter: timestamp => {
                  const date = new Date(timestamp);
                  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                    
              }
          },
          tickInterval: 1000 // 每秒一个间隔
      },
      yAxis: {

          axisLine: {
              show: false // Hide y-axis line
          },
          tickLine: {
              show: false // Hide y-axis tick lines
          }
      }, 
      separator: {
          size: 0,
      }, 
      candle: {
          tooltip: {
              text: {
                  size: 11,
                  family: 'Helvetica Neue',
                  weight: 'normal',
                  color: 'red',
                  marginLeft: 8,
                  marginTop: 1,
                  marginRight: 8,
                  marginBottom: 1
              },

          },
          priceMark: {
              last: {
                  text: {
                      color: '#ffffff',
                  }
              }
          }

      }
  });
  }

  let waitingPrice = 0;
  const createWebSocket = (symbol='btcusdt',interval='1s') =>{
      console.log('ws',symbol,interval)
      
      socket = new WebSocket(binanceSocketUrl);
      socket.onopen = function () {
          console.log('WebSocket connection opened.');
          const subscribeMessage = JSON.stringify({
              method: "SUBSCRIBE",
              params: [symbol+"@kline_" + interval],
              id: 1
          });
          socket.send(subscribeMessage);
      };

      socket.onmessage = async function (event) {
          const message = JSON.parse(event.data);


          if (message.e === 'ping') {
              socket.send(JSON.stringify({ pong: message.ping }));
          } else if (message.k) {
              // Handle Kline data
              

              const kline = message.k;
              const dataPoint = [
                  kline.t, // timestamp
                  (kline.o), // open price
                  (kline.h), // high price
                  (kline.l), // low price
                  (kline.c),  // close price
                  (kline.v),
              ];
              // Otherwise, add a new data point
              lastPrice.value = kline.c;
              //$('.current-price').val(kline.c)
              //console.log('當前價', kline.c)
              //console.log('klineData',klineData)

              const now = new Date();
              const seconds = now.getSeconds();
              console.log('当前秒数',seconds)
              if(seconds > 45  ){
                
                if(waitingPrice === 0){
                  console.log('45开始取数据')
                  const openTime = getNextMinuteTimestamp();
                  let openPrice =  await getOpenPrice(symbol.toUpperCase(),openTime)
                  waitingPrice = openPrice.data.price
                  console.log('获取价格',waitingPrice)
                }
              }else if(seconds === 0){
                if(waitingPrice > 0){
                  console.log('秒数为0',waitingPrice)
                  lastPrice.value = waitingPrice
                }
              }else if(seconds > 5){
                waitingPrice = 0;
              }

              let data = dataPoint;
              chartInstance.value.updateData({
                  timestamp: data[0],
                  open: +data[1],
                  high: +data[2],
                  low: +data[3],
                  close: parseFloat(lastPrice.value),
                  volume: Math.ceil(+data[5]),
              })

              const nowByUTC = moment.utc().add(8, 'hours'); // 获取 UTC 时间并加8小时以转换为北京时间

              if (nowByUTC.seconds() >= 46) {
                currentTimes.value = nowByUTC.add(1, 'minute').format("YYYYMMDDHHmm");
              } else {
                currentTimes.value = nowByUTC.format("YYYYMMDDHHmm");
              }
              //console.log( moment(parseInt(data[0])+60).unix() ,'-',  moment(parseInt(data[0])).format("YYYY-MM-DD HH:mm:00") ,  moment().format("YYYY-MM-DD HH:mm:ss") )
 
              const nowTime = moment().add(15,'seconds').format("YYYY-MM-DD HH:mm:ss");
              const lastTime = moment(parseInt(data[0])).add(15,'seconds').format("YYYY-MM-DD HH:mm:00");
              countdown.value = 60 - (moment(nowTime).unix() - moment(lastTime).unix() ) 
          }
      };

      socket.onerror = function (error) {
          console.error('WebSocket error:', error);
      };

      socket.onclose = function (event) {
          console.log('WebSocket connection closed. Reconnecting in', reconnectInterval / 1000, 'seconds.');
          setTimeout(createWebSocket, reconnectInterval);
      };
  }
  
  let historyList = ref([]);
  const getBuyHistory = async (page,limit=10)=>{
    console.log('page',page.value)
    let token = localStorage.getItem('jwt-token')
      let list = await getTickets({
        token,
        page,
        limit
      }) //await axios.get( mainUrl + '/ticket/history?token='+token);
      let rows = list.data.data;
      return {
        count:list.data.count,
        rows
      };
  }

  

  let showBuyHistoryDialog = async ()=>{
    showHistory.value = true;
    await onLoad();
    return;
    page.value = 0;
    historyList.value = [];
    historyList.value = await getBuyHistory(1,20);
  }

  let showBuyDialog = (type)=>{
    showBuy.value=true;
    buyType.value = type;
    buyTypeName.value = type == 1? '買多' : '買空'
  }
  let buyType = ref(1);
  let buyTypeName = ref(1);
  let buyAmount = ref(1);
  let buySecond = ref(60);
  let handleSecondClick = (event)=>{
    const button = event.target;    
    const value = button.getAttribute('data-value');   
    buySecond.value = parseInt(value, 10); // 将字符串转换为整数  
  }
  let handleAmountSlider = (value)=>{
    //const button = event.target;    
    //const value = button.getAttribute('data-value');   
    buySecond.value = parseInt(value, 10); // 将字符串转换为整数  
  }


  let handleAmountClick = (event)=>{
    const button = event.target;    
    const value = button.getAttribute('data-value');   
    buyAmount.value += parseInt(value, 10); // 将字符串转换为整数  
    //if(buyAmount.value > 10000) buyAmount.value = 10000;
  }

  const getBuyAmounts = ()=>{
    if(localStorage.getItem('buyAmounts'))
      return localStorage.getItem('buyAmounts').split(',')
    else
      return [1,10,100,1000]
  }
  let buyAmountList = ref([1,10,100,1000]);
  setInterval(()=>{
    buyAmountList.value = getBuyAmounts()
  },1000);

  let handleBuy =async ()=>{
    // 获取当前时间
    const now = new Date();
    const seconds = now.getSeconds();
    
    let token = localStorage.getItem('jwt-token')
    console.log(buyAmount.value,buySecond.value,buyType.value)
    let res = await doBuy({
      pair:pair.value,
      quantity:buyAmount.value,
      second:buySecond.value,
      buyType:buyType.value,
      token,
    })

    showSuccessToast( res.data.message );
    if(res.data.code == 200)
      showBuy.value = false
 
    buyAmount.value = 1;
  }

  let cancelTicket =async (id)=>{

    let token = localStorage.getItem('jwt-token')
      console.log(buyAmount.value,buySecond.value,buyType.value)
      let res = await cancelBuy({
        id,
        token,
      })

    
    if(res.data.code == 200){
      showBuy.value = false
      onLoad()
    }else{
      showSuccessToast( res.data.message );
    }
  }


  const getNextMinuteTimestamp = function () {
    const now = new Date(); // 当前时间
    now.setSeconds(0, 0);   // 将秒数和毫秒数设置为 0，即整分
    now.setMinutes(now.getMinutes() + 1); // 分钟加 1，得到下一个自然分钟
    return Math.floor(now.getTime() ); // 返回 Unix 时间戳，单位为秒
 
  }
 
</script>
