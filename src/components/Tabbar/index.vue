<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
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
  },
  {
    icon: "user-o",
    title: "個人中心",
    to: {
      name: "User"
    }
  }
]);
</script>
