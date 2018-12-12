const mongoose = require('mongoose')

//创建schema对象
let Schema = mongoose.Schema;

//实例化对象
let userSchema = new Schema({
	//required:true:判断是否为必填字段
	//type:字段类型
	
	Users:{type:String,require:true},
	Password:{type:String,require:true}
})

//参数1：集合名字 参数2：schema对象，将schema对象变成model
let usermodel = mongoose.model('users',userSchema);

module.exports = usermodel