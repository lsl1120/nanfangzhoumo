const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-Parser")
const path = require('path')
const db = require('./dbconnect.js')

app.use(cors());

//引入路由
const users = require('../noderouter/users.js')

//post参数解析
//解析form表单
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
//解析json
app.use(bodyParser.json())

//调用路由
app.use('/api/users',users)

app.listen(4000,()=>{
	console.log('服务器开启:' + 4000)
})