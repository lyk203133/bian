<template>
 <div class="history" style="height: 100vw;width:100%">
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
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
</van-list>
  </van-pull-refresh>
          
        </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getTickets,cancelBuy } from "@/api/";
import {showDialog} from "vant"
 
let page = ref(0);
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
let historyList = ref([]);
const getBuyHistory = async (page,limit)=>{
  let token = localStorage.getItem('jwt-token')
    let list = await getTickets({
      page,
      limit,
      token
    })
    let rows = list.data.data;
   
    return {
      count:list.data.count,
      rows
    }
}

const onLoad = async () => {
  if (refreshing.value) {
    list.value = [];
    refreshing.value = false;
  }
  const newHistory = await getBuyHistory(page.value+1,30);
  if(!newHistory || newHistory.rows.length == 0) {
    finished.value = true; 
    return;
  }

  historyList.value = [...historyList.value, ...newHistory.rows];
  console.log(historyList.value)
  loading.value = false;
  
  // 数据全部加载完成
  if (historyList.value.length >= newHistory.count) {
    finished.value = true;
  }
  page.value = page.value+1;
};

const onRefresh = async () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  await onLoad();
};

let cancelTicket =async (id)=>{

let token = localStorage.getItem('jwt-token')
 
  let res = await cancelBuy({
    id,
    token,
  })

  showDialog({ message: res.data.message });
  if(res.data.code == 200)
    await getBuyHistory(1,20);
}


onMounted(async () => {
  await getBuyHistory(30,10);
});
 
</script>
