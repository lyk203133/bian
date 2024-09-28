<script setup>
import {ref,onMounted} from 'vue';
import axios from 'axios';
import {showDialog} from 'vant'
import {doTaskVerify,getTasks} from "@/api/";
import { getApiUrl } from "@/utils/base";
let addr = ref()
addr.value = localStorage.getItem('walletAddr');

let mainUrl = getApiUrl();
let showTask = ref(false)

let getTask = async (name,id)=>{
  verifyPhoto.value = '';
  taskInfoValue.value = ''
  fileList.value= []
  if(name == '幣安')
    taskInfoTitle.value = '手機'
  else
    taskInfoTitle.value = '郵箱'

    taskName.value = name
    platformId.value  = id
  showTask.value = true
}
let platformId = ref(0)
let taskName = ref('幣安')
let taskInfoTitle = ref('手機')
let taskInfoValue = ref('')
let verifyPhoto = ref('');


let onSubmit = async ()=>{
  let data = {
      info:taskInfoValue.value,
      platform: platformId.value,
      verifyPhoto:verifyPhoto.value,
      token:localStorage.getItem('jwt-token')
  };
  let res = await doTaskVerify(data);//await axios.post(mainUrl + '/task/verify',data)

  console.log(res);
  showDialog({ message: res.data.message });
  //if(res.data.code == 200)
  showTask.value = false
}

const afterRead = async (file) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
  file.status = 'uploading';
  file.message = '上傳中...';
  let formData = new FormData();  
  formData.append('file', file.file); // 添加文件  
  //formData.append('otherField', this.otherData); // 添加其他字段  

  // 使用axios發送POST請求  
  let res = await axios.post(mainUrl + '/admin/upload', formData, {  
    headers: {  
      'Content-Type': 'multipart/form-data' // 注意：這里通常不需要設置Content-Type，因為axios會自動設置  
    }  
  })
  file.status = 'done';
  file.message = '上傳成功';
  console.log(res,res.data.data.src)  
  verifyPhoto.value = res.data.data.src;
};

const fileList = ref([]);

const platforms = ref([]);
const activeNames = ref(['1']);

 
onMounted(async ()=>{
  let res = await getTasks({
      token:localStorage.getItem('jwt-token')
  })
  if(res.data.code == 200)platforms.value = res.data.data
 console.log(res.data.data)
})
</script>
 

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">贊助商任務</h3>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        <van-collapse v-model="activeNames" >
          <van-collapse-item v-for="(platform,index) in platforms" :title="platform.name+'任務認證'"  :name="index" >
            <div v-if="platform.Task"> 
              <label v-if="platform.Task.platform == 1">手機：{{ platform.Task.info }}</label>
              <label v-else>郵箱{{ platform.Task.info }}</label>
              <br><br>
              <van-image
                width="100"
                height="100"
                :src="platform.Task.photo"
              />
              <br><br>
              <label v-if="platform.Task.status === 0">未驗證</label>
              <label v-if="platform.Task.status === 1">驗證中</label>
              <label v-if="platform.Task.status === 2">驗證成功</label>
              <label v-if="platform.Task.status === -1">驗證失敗</label><br>
              <van-button  v-if="platform.Task.status === -1" type="default" @click="getTask(platform.name,platform.id)">重新驗證</van-button>
            </div>
            <div v-else> 
              <label v-if="platform.id == 1">任務說明：上傳手機與圖片。</label>
              <label v-else>任務說明：上傳郵箱與圖片。</label>
              <van-button type="default" @click="getTask(platform.name,platform.id)">馬上驗證</van-button>
            </div>
        </van-collapse-item>
       <!--
        <van-collapse-item title="Maicion任務" name="2">
          任務說明：上傳郵箱與圖片。<van-button type="default" @click="getTask('Maicion')">馬上驗證</van-button>
        </van-collapse-item>
        <van-collapse-item title="Ace任務" name="3">
          任務說明：上傳郵箱與圖片。<van-button type="default" @click="getTask('Ace')">馬上驗證</van-button>
        </van-collapse-item>
        <van-collapse-item title="Bito任務" name="4">
          任務說明：上傳郵箱與圖片。<van-button type="default" @click="getTask('Bito')">馬上驗證</van-button>
        </van-collapse-item>-->
      </van-collapse>
 
         
      </p>
    </div>
     
     
  </div>

  <van-popup
  v-model:show="showTask"
  round
  closeable
  position="bottom"
  :style="{ height: '90%' }"
>
  <p style="padding : 3rem 1rem 1rem 1rem;line-height: 20px;">
     
    <b>{{taskName}}任務驗證</b>
    <br>
    <br>
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="taskInfoValue"
      :name="taskInfoTitle"
      :label="taskInfoTitle"
      :placeholder="taskInfoTitle"
      :rules="[{ required: true, message: '請輸入' }]"
    />
     

    <van-field name="verifyPhoto" label="圖片">
      <template #input>
        <van-uploader  v-model="fileList" :after-read="afterRead"/>
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
</van-popup>

 
</template>
 

<style scoped></style>
