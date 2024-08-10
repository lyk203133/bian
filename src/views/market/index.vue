

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
        <div id="chart" class="k-line-chart" style="height: 400px;"/>
         
      </p>
    </div>

    </div>
    <div class="tools-content pt-[20px] px-[12px]">
    
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
  :style="{ height: '60%' }"
>
<van-cell-group style="margin-top:3rem">
  <van-cell :title="buyTypeName" value=""  />
  <van-cell title="交易兌" value="BTCUSDT"  />
  <van-cell title="當前價格" value="59146.25"  />
 
  <van-row justify="left" style=" margin-left:15px;width:100%;font-size:14px;margin-top:1rem" >
    <van-col span="6" class="title" >交易時間</van-col>
    <!--van-col span="18"  class="flex-container" >
      <van-button  type="default" @click="" size="small">60S</van-button>
      <van-button  type="default" @click="" size="small" >180S</van-button>
      <van-button  type="default" @click="" size="small">300S</van-button>
      <van-button  type="default" @click="" size="small">600S</van-button>
      
    </van-col-->
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
  <van-divider />
  <van-row justify="left" style="margin-left:15px;width:100%;font-size:14px; " >
    <van-col span="6" class="title">交易金額</van-col>
    <van-col span="18" class="flex-container" >
       
      <van-button  
        type="default"  
        @click="handleAmountClick($event)"  
        :class="{'btn-active': buyAmount === amount}"  
        size="small"  
        :data-value="amount"  v-for="amount in buyAmountList"
      >{{ amount }}</van-button>  
      <!--van-button  type="default" @click="" size="small" class="btn-active">1</van-button>
      <van-button  type="default" @click="" size="small">10</van-button>
      <van-button  type="default" @click="" size="small">100</van-button>
      <van-button  type="default" @click="" size="small">1000</van-button>
      <van-button  type="default" @click="" size="small">10000</van-button-->
      
    </van-col>
  </van-row>

  
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
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
     
    <b>購買歷史</b>
    <br>
    <br>
    
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
            <van-col span="6" v-if="row.status == 0"><van-button type="default" @click="cancelTicket(row.id)">取消</van-button></van-col>
            <van-col span="6" v-if="row.status == 1">{{ parseFloat(row.result).toFixed(2) }}</van-col>
            <van-col span="6" v-if="row.status == -1">取消</van-col>
          </van-row>
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
</style>
<script ame="Task">
import { showDialog } from "vant";
import "vant/es/toast/style";
import { onMounted,ref,watch } from 'vue';  
import { useRoute,useRouter } from 'vue-router';
import { init } from 'klinecharts'
import { getMarketData,getTickets,doBuy,cancelBuy } from "@/api/";
import axios from "axios"
export default {  
  name: 'KLineChart',  
  setup() {  
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
    const chartInstance = ref();
    let socket;
    let currentPrice = 0;
    let showBuy = ref(false);
    let showBuyPop=()=>{
      showBuy.value = true;
    };

    let showHistory = ref(false)
    let setHistoryShow = () =>{
      showHistory.value = true;
    }
    let switchSymbol = (symbol)=>{
      window.location = '#/market/'+symbol;
       
      //router.push({ name: 'market', params: { symbol: symbol.toLowerCase() } });
      /*klineData = [];
      socket = null;
      initChart(symbol)
      createWebSocket(symbol+'usdt')*/
    }

    const mainUrl = 'https://api.jz1378.com'
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


    onMounted(() => {  
      console.log('onMounted')
      initChart(symbol,interval)
      createWebSocket(symbol,interval);
    });

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
                    size: 12,
                    family: 'Helvetica Neue',
                    weight: 'normal',
                    color: 'red',
                    marginLeft: 8,
                    marginTop: 4,
                    marginRight: 8,
                    marginBottom: 4
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

        socket.onmessage = function (event) {
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
                currentPrice = kline.c;
                //$('.current-price').val(kline.c)
                //console.log('當前價', kline.c)
                currentPrice = kline.c;
                //console.log('klineData',klineData)
                let data = dataPoint;
                chartInstance.value.updateData({
                    timestamp: data[0],
                    open: +data[1],
                    high: +data[2],
                    low: +data[3],
                    close: +data[4],
                    volume: Math.ceil(+data[5]),
                })

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
    const getBuyHistory = async ()=>{
      let token = localStorage.getItem('jwt-token')
        let list = await getTickets({
          token
        }) //await axios.get( mainUrl + '/ticket/history?token='+token);
        let rows = list.data.data;
        return rows;
    }

    

    let showBuyHistoryDialog = async ()=>{
      showHistory.value = true;
      historyList.value = await getBuyHistory();
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

 
    let handleAmountClick = (event)=>{
      const button = event.target;    
      const value = button.getAttribute('data-value');   
      buyAmount.value = parseInt(value, 10); // 将字符串转换为整数  
    }

    let buyAmountList = [1,10,100,1000,10000]

    let handleBuy =async ()=>{
      let token = localStorage.getItem('jwt-token')
        console.log(buyAmount.value,buySecond.value,buyType.value)
        let res = await doBuy({
          pair:pair.value,
          quantity:buyAmount.value,
          second:buySecond.value,
          buyType:buyType.value,
          token,
        })

        showDialog({ message: res.data.message });
      if(res.data.code == 200)
        showBuy.value = false
    }

    let cancelTicket =async (id)=>{

      let token = localStorage.getItem('jwt-token')
        console.log(buyAmount.value,buySecond.value,buyType.value)
        let res = await cancelBuy({
          id,
          token,
        })

        showDialog({ message: res.data.message });
      if(res.data.code == 200)
        showBuy.value = false
    }

    return {
      showBuy,
      showBuyPop,
      switchSymbol,
      getBuyHistory,
      historyList,
      showHistory,
      setHistoryShow,buyAmount,
      buySecond,
      handleSecondClick,
      buyAmountList,
      handleAmountClick,
      handleBuy,
      showBuyDialog,
      showBuyHistoryDialog,
      cancelTicket,
      buyTypeName,
      symbolActive
    }
  }
};  

</script>
