import React,{Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import '../bootstrap.css';
import '../sass/User/register.scss';
import axios from 'axios'

import Login from './Login'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import{
	faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faTimes
)


class Register extends Component{
	constructor(){
		super();
		this.state={
			icon:[
				{
					icon:'times'
				}
			],
			user:'',
			pass:'',
			affirmpass:'',
			code:'',
		}
	}
	
	
	//设置一个全局的变量，便于保存验证码
    createCode(){
        //首先默认code为空字符串
        var code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('code');
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
				code += random[index];
				code = code.toLowerCase();
			
        }
        
        //将拼接好的字符串赋值给展示的Value
        this.setState({
        	code
        })
        codeV.value = code;
        console.log(code)
        
    }

    //下面就是判断是否== 的代码，无需解释
//		validate(){
//      var oValue = document.getElementById('input').value.toUpperCase();
//      if(oValue ==0){
//          alert('请输入验证码');
//      }else if(oValue != this.state.code){
//          alert('验证码不正确，请重新输入');
//          oValue = ' ';
//          this.createCode();
//      }else{
//          window.open('http://www.baidu.com','_self');
//      }
//  }

    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    
    gologin(){
    	console.log(this.props.history)
    	this.props.history.push("/user/login");
    }
    
    userval(){
    	let user = document.getElementById("phone").value;
    	let ZZphone = /^1[3456789]\d{9}$/;
    	if(ZZphone.test(user)){
    		console.log(user)
    		document.getElementById("reginput").style.display=""
    		document.getElementById("reginput").style.color="green"
    		document.getElementById("reginput").innerHTML="手机号正确";
    		this.setState({
    			user
    		})
    		
    	}
    	else{
    		console.log('错误的手机号')
    		document.getElementById("reginput").style.display=""
    		document.getElementById("reginput").style.color="red"
    		document.getElementById("reginput").innerHTML="请输入正确的手机号";
    	}
//  	console.log(user)
    	
    }
    
    passval(){
    	let pass = document.getElementById("exampleInputPassword1").value;
    	let ZZpass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    	if(ZZpass.test(pass)){
    		console.log(pass)
//  		6-16位数字和字母
			document.getElementById("regpass").style.display=""
    		document.getElementById("regpass").style.color="green"
    		document.getElementById("regpass").innerHTML="密码输入格式正确";
    		this.setState({
    			pass
    		})
    	}
    	else{
    		document.getElementById("regpass").style.display=""
    		document.getElementById("regpass").style.color="red"
    		document.getElementById("regpass").innerHTML="请输入6-16位数字和字母";
    	}
    	
    }
    
    qrpass(){
    	let qrpass = document.getElementById("exampleInputPassword2").value;
    	let pass = document.getElementById("exampleInputPassword1").value;
    	console.log(pass)
    	console.log(qrpass)
    	if(qrpass == pass){
    		document.getElementById("QRregpass").style.display=""
    		document.getElementById("QRregpass").style.color="green"
    		document.getElementById("QRregpass").innerHTML="两次密码输入一致";
    	}else{
    		document.getElementById("QRregpass").style.display=""
    		document.getElementById("QRregpass").style.color="red"
    		document.getElementById("QRregpass").innerHTML="两次密码输入不一致";
    	}
    }
    
    securitycode(){
    	let securitycode = document.getElementById("input").value;
    	securitycode = securitycode.toLowerCase();
    	let codeV = this.state.code;
    	console.log(codeV,'图')
    	console.log(securitycode,'输入')
    	if(securitycode == codeV){
    		document.getElementById("codeval").style.display=""
    		document.getElementById("codeval").style.color="green"
    		document.getElementById("codeval").innerHTML="验证码正确";
    	}else{
    		document.getElementById("codeval").style.display=""
    		document.getElementById("codeval").style.color="red"
    		document.getElementById("codeval").innerHTML="验证码错误";
    	}
    }
    
    regbtn(){
    	console.log(this.state.user)
    	console.log(this.state.pass)
    	let data = {
    		user:this.state.user,
    		pass:this.state.pass
    	}
    	let rootpath = 'http://127.0.0.1:4000';
    	let url = '/api/users/reg'
    	axios.post(rootpath + url,data)
    	
    }
    
    componentWillMount(){
//  	var username =  document.getElementById("").value
    }
    
	componentDidMount(){
		this.createCode()
		
	}
    
	
	
	render(){
		return <div className="register">
			<Switch>
				<Route path="/user/login" component={Login} />
				
			</Switch>
		
			{
			this.state.icon.map((icon,idx)=>{
//				console.log(idx)
				return <p key={idx}>{<FontAwesomeIcon icon={icon.icon}/>}</p>
			})
		}
			<h1>注册账号</h1>
			
		<span id="reginput"></span>
		<div className="input-group mb-3">
			
		  <input type="text" id="phone" onBlur={this.userval.bind(this)} className="form-control" placeholder="请输入手机号" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
		</div>
		
		<span id="regpass"></span>
		<div className="form-group">
    		<input type="password" onBlur={this.passval.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="请输入密码（6-16位数字和字母）"/>
  		</div>
  		
  		<span id="QRregpass"></span>
  		<div className="form-group">
    		<input type="password" onBlur={this.qrpass.bind(this)} className="form-control" id="exampleInputPassword2" placeholder="请确认密码"/>
  		</div>
  		
  		<span id="codeval"></span>
  		<div className="codeinput">  
	        <input type = "text" id = "input" onBlur={this.securitycode.bind(this)} placeholder="请输入验证码"/>  
	        <input type = "button" id="code" onClick={this.createCode.bind(this)}/>    
    	</div> 
  		
  		<button type="button" className="btn btn-info" id="regbtn" onClick={this.regbtn.bind(this)}>注册账号</button>
  		<button type="button" className="btn btn-success" onClick={this.gologin.bind(this)}>已有账号,去登录?</button>
  		
			
		</div>
	}
}

Register = withRouter(Register);

export default Register;