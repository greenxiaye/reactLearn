const express = require('express')
const { readFileSync } = require('fs')  //同步读取文件的方式
const { resolve } = require('path')  //处理路径的方式，从path中取出来
const bodyParser = require('body-parser') //处理post请求的一个方案

const app = express()//创建一个应用
app.unsubscribe(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//处理跨域
//因为前端是3000 后端是8000 端口不一样肯定跨域了

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') //背下来
    res.header('Access-Control-Allow-Methods', 'POST,GET')
    next()
})

// app.get('/getStudents')