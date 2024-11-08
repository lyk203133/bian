import { http } from "@/utils/http";
import { getApiUrl } from "@/utils/base";
import axios from "axios";
let mainUrl = getApiUrl();//import.meta.env.VITE_BASE_API;//'https://api.jz1378.com';
export function getSetting() {
  return http.request({
    url: "/setting",
    method: "get",
  })
}

export async function getPricing() {
  let data = await axios.get(mainUrl + '/pricing')
  return data;
}

export async function getOpenPrice(symbol, time) {
  let data = await axios.get(mainUrl + '/open/' + symbol + '/' + time)
  return data;
}

export async function getBetRow(symbol) {
  let data = await axios.get(mainUrl + '/market/bet_row?symbol=' + symbol)
  return data;
}

export async function getMarketLast(symbol) {
  let data = await axios.get(mainUrl + '/market/last?symbol=' + symbol)
  return data;
}

export async function profile(params) {
  let data = await axios.get(mainUrl + '/market_data', params)
  return data;
  return http.request({
    url: "/profile",
    method: "get",
    params
  })
}

export async function getMarketData(params) {
  let data = await axios.get(mainUrl + '/market_data', params)
  return data;
  return http.request({
    url: "/market_data",
    method: "get",
    params
  })
}

export async function getTickets(params) {

  if (!params.limit) params.limit = 10;
  let data = await axios.get(mainUrl + '/ticket/history?page=' + params.page + '&token=' + params.token + '&limit=' + params.limit, params)
  return data;
  return http.request({
    url: "/ticket/history",
    method: "get",
    params
  })
}



export async function getArticle(id) {

  let data = await axios.get(mainUrl + '/article/' + id)
  return data;
  return await http.request({
    url: "/article/" + id,
    method: "get"
  })
}

export async function getTransfer(params) {
  let data = await axios.get(mainUrl + '/transfer/recharge?token=' + params.token + '&type=' + params.type + '&page=' + params.page + '&limit=' + params.limit)
  return data;
}


export async function getBalanceLog(params) {
  let data = await axios.get(mainUrl + '/balance-log?token=' + params.token + '&type=' + params.type + '&page=' + params.page + '&limit=' + params.limit)
  return data;
}

export async function doTaskVerify(params) {
  let data = await axios.post(mainUrl + '/task/verify', params)
  return data;
  return http.request({
    url: "/task/verify",
    method: "post",
    params
  })
}

export async function doVerify(params) {
  let data = await axios.post(mainUrl + '/verify', params)
  return data;
  return http.request({
    url: "/verify",
    method: "post",
    params
  })
}

export async function doUpload(params) {
  let data = await axios.post(mainUrl + '/admin/upload', params, {
    'Content-Type': 'multipart/form-data' // 注意：這里通常不需要設置Content-Type，因為axios會自動設置  
  })
  return data;
  return http.request({
    url: "/admin/upload",
    method: "post",
    params,
    headers: {
      'Content-Type': 'multipart/form-data' // 注意：這里通常不需要設置Content-Type，因為axios會自動設置  
    }
  })
}

export async function doBuy(params) {
  return await axios.post(mainUrl + '/buy', params)
}

export async function cancelBuy(params) {
  return await axios.get(mainUrl + '/ticket/cancel?token=' + params.token + '&id=' + params.id, params)
}

export async function getTasks(params) {
  let data = await axios.get(mainUrl + '/task/list?token=' + params.token, params)
  return data;

}