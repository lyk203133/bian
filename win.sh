#!/bin/bash

# 在第2秒执行的任务
sleep 1
curl http://127.0.0.1:8087/admin/market/make

# 在第5秒执行的任务
sleep 2  # 累积到5秒
curl http://localhost:8087/ticket/calculate
