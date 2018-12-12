import React,{Component} from 'react';
import '../bootstrap.css'
import '../sass/User/Login.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import{
	faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faTimes
)



class Login extends Component{
	constructor(){
		super();
		this.state={
			icon:[
				{
					icon:'times'
				}
			]
		}
	}
	
	goreg(){
		this.props.history.push('/user/reg')
	}
	
	render(){
		return <div className="login">
		{
			this.state.icon.map((icon,idx)=>{
//				console.log(idx)
				return <p key={idx}>{<FontAwesomeIcon icon={icon.icon}/>}</p>
			})
		}
		
		<h1>登录账号</h1>
		
		<div className="input-group mb-3">
		  <input type="text" className="form-control" placeholder="请输入手机号" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
		</div>
		
		<div className="form-group">
    		<input type="password" className="form-control" id="exampleInputPassword1" placeholder="请输入密码"/>
  		</div>
  		
  		<button type="button" className="btn btn-success">登录</button>
  		<button type="button" className="btn btn-info" onClick={this.goreg.bind(this)}>注册账号</button>
			
		</div>
	}
}
export default Login;