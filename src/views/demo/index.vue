<script setup name="Demo">
import { reactive } from "vue";
//模擬登錄
let addr = '0x079Ba1E1d27a38447B01d1012D31BA8167e0479D';
localStorage.setItem('walletAddr', addr);
localStorage.setItem('jwt-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsInVzZXJuYW1lIjoiMHgwNzlCYTFFMWQyN2EzODQ0N0IwMWQxMDEyRDMxQkE4MTY3ZTA0NzlEIiwiaWF0IjoxNzI0NDY2MzQ4LCJleHAiOjE3MjQ0Njk5NDh9.kBx6h56YLaDRf8wFcOs7nLefMYnJtn9BOLO8dFRk9rM')
localStorage.setItem('userInfo',JSON.stringify({
        "id": 27,
        "username": "0x079Ba1E1d27a38447B01d1012D31BA8167e0479D",
        "password": "",
        "balance": "1729.70",
        "lv": 1,
        "created": "2024-07-31T06:25:13.000Z",
        "updated": "2024-07-31T06:25:13.000Z",
        "email": "",
        "salt": "1722407113",
        "status": 1,
        "truename": "1",
        "birthday": "",
        "mobile": "1",
        "card": "1",
        "verifyPhoto": "/public/uploads/948edaf9-b0e0-4d35-8749-4fff9b2c1de7.png",
        "verifyStatus": 2
    }))
const contentList = reactive([
  "✔ ⚡ Vue3 + Vite4",
  "✔ ✨ Vant4 组件库",
  "✔ 🌀 Tailwindcss 原子类框架",
  "✔ 🍍 Pinia 状态管理",
  "✔ 🌓 支持深色模式",
  "✔ Vue-router 4",
  "✔ 支持 SVG 图标自动注册组件",
  "✔ vmin 视口适配",
  "✔ Axios 封装",
  "✔ 打包资源 gzip 压缩",
  "✔ 开发环境支持 Mock 数据",
  "✔ ESLint",
  "✔ 首屏加载动画",
  "✔ 开发环境调试面板"
]);
</script>

<template>
  <div class="demo-content px-[12px]">
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    />
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a
        class="flex items-center"
        href="https://github.com/yulimchen/vue3-h5-template"
        target="_blank"
      >
        <svg-icon class="text-[20px] mr-[8px]" name="github" />
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
        <svg-icon class="text-[12px] ml-[5px]" name="link" />
      </a>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
        移动端项目基础模板
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>
