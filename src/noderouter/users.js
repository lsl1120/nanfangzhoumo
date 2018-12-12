const express = require("express")
const Router = express.Router();
const utils = require('../nodeserver/utils.js')
const usermodel = require('../nodemodel/usermodel')


//注册
Router.post('/reg',(req,res)=>{
	let {user,pass} = req.body
	console.log(user)
	console.log(pass)
	usermodel.insertMany({Users:user,Password:pass})
	.then((data)=>{
		console.log(data)
		return res.send(utils.sendData(0,'注册成功',null))
	})
	.catch((err)=>{
		return res.send(utils.sendData(-1,'注册失败',null))
	})
})


module.exports = Router;