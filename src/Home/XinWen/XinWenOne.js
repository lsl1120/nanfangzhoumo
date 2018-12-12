import React,{Component} from 'react';
import axios from 'axios';
import '../../sass/XinWen/xinwenOne.scss'
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

class XinWenOne extends Component{
	constructor(){
		super();
		this.state={
			tabs:[],
			content:[
				{
					path:'/contentpage'
				}
			],
		}
		this.content = this.content
		this.contentClick = this.contentClick.bind(this);
	}
	
	contentClick(id){
//		console.log(this.state.content[0].path)
//		console.log('333',id)
		let url = this.state.content[0].path + '/' + id;
		this.props.history.push(url);
//		console.log(this.props)
	}
	
	componentWillMount(){
		axios.get('/nfapi/mobile/contents?version=1.1.1&platform=wap&machine_id=1fe604d4ef741b82fadd41ed780913f7&user_id=&token=&limit=20&page=1&term_id=2')
		.then(res=>{
			var tabs = res.data.data.list
			this.setState({
				tabs
			})
			console.log('111',tabs)
		})
	}
	
	render(){
		return <div className="xw">
			{
				this.state.tabs.map((item)=>{
					return <div className="xinwenOne" key={item.id} onClick={this.contentClick.bind(this,item.id)}>
					<div className="TJcontent3">
						<div className="Importance" >
							<p>{item.subject}</p>
							<img src={"http://images.infzm.com/medias/" + item.covers[0].file_path}/>
						</div>
					<div className="tuijianTime">
						<p>{item.author}</p>
							</div>
						</div>
					</div>
				})
			}
		
		</div>
	}
	
}
XinWenOne = withRouter(XinWenOne);
export default XinWenOne