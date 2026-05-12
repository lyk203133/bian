const redis = require("redis");

// 创建 Redis 客户端
const client = redis.createClient({
  host: '127.0.0.1', // Redis 服务器地址
  port: 6379, // Redis 服务器端口号
});

// 异步获取 Redis 中键为 key 的值
const redisHelper = {
  setValue: async function (key, value) {
    try {
      if (!client.isOpen)
        await client.connect();
      await client.select(process.env.redis_db || 1)
      await client.set(key, value);
    } catch (err) {
      console.error(err);
    }
  },
  setExValue: async function (key, time, value) {
    try {
      if (!client.isOpen)
        await client.connect();
      await client.select(process.env.redis_db || 1)
      await client.setEx(key, time, value);
    } catch (err) {
      console.error(err);
    }
  },
  getValue: async function (key) {
    try {
      if (!client.isOpen)
        await client.connect();
      await client.select(process.env.redis_db || 1)
      const value = await client.get(key);
      //console.log(value);
      return value;
    } catch (err) {
      console.error(err);
    }
    return null;
  },/*
  push: async function (key, value) {
    try {
      //console.log(value)
      await rpushAsync(key, value)
    } catch (err) {
      console.error(err);
    }
  },
  pop: async function (key, n) {
    try {
      return await lpopAsync(key, n)
    } catch (err) {
      console.error(err);
    }
    return null;
  },
  len: async function (key) {
    try {
      return await llenAsync(key)
    } catch (err) {
      console.error(err);
    }
    return null;
  },*/
}
module.exports = redisHelper 
