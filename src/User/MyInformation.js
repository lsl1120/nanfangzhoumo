import React,{Component} from 'react';

import myinf from '../img/7827303_221233267358_2.jpg'
import headImg from '../img/u3022101.jpg'
import '../sass/User/MyInformation.scss'

class MyInformation extends Component{
	
	gologin(){
		this.props.history.push('/user/login');
	}
	
	render(){
		return <div className="myinf">
				<div className="myImg">
					<img src={myinf}/>
				</div>
				
				<div className="headImg">
					<img src={headImg}/>
					<p onClick={this.gologin.bind(this)}>登录/注册</p>
				</div>
				
				<div className="mylist">
					<ul>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						<li>
							<span>我的南瓜</span>
							<span>></span>
						</li>
						
						<li>
							<span>退出</span>
							<span>></span>
						</li>
						
					</ul>
				</div>
				
		</div>
	}
}

export default MyInformation;