<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item @click="showTaskDialog(item)"
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar> 
</template>

<script setup>
import { ref, reactive } from "vue";
import {showDialog } from "vant"
const active = ref(0);
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: "首頁",
    to: {
      name: "Home"
    }
  },
  {
    icon: "gem-o",
    title: "合約交易",
    to: {
      name: "Market",
      params:{
        'symbol':'btc'
      }
    }
  },
  {
    icon: "bag-o",
    title: "任務",
    to: {
      name: "Task"
    }
    /*clickHandler: () => {
      // 使用 Vant 的 Dialog 弹窗
      Dialog.alert({
        title: '提示',
        message: '即將開啟，敬請期待'
      });
    }*/
  },
  {
    icon: "user-o",
    title: "個人中心",
    to: {
      name: "User" 
    }
  }
]);

const showTaskDialog = (item)=>{
  if(item.title=='質押x'){ 
    showDialog({
        title: '提示',
        message: '即將開啟，敬請期待'
      });
  }
}
</script>
