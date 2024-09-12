#!/bin/bash

# 在第2秒执行的任务
sleep 1
curl https://atlaswealth.markets/admin/market/make

# 在第5秒执行的任务
sleep 2  # 累积到5秒
curl https://atlaswealth.markets/ticket/calculate
