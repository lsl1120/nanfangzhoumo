import React,{Component} from 'react';
import axios from 'axios';
import '../../sass/TuiJian/tuijianOne.scss';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

class TuiJianOne extends Component{
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
		this.content=this.content
		this.contentClick = this.contentClick.bind(this);
	}
	
	contentClick(id){
		console.log(this.state.tabs)
		console.log('222',id)
		let url =this.state.content[0].path + '/' + id;
		this.props.history.push(url);
		console.log(url)
		
	
		
		
	}
	
	componentWillMount(){
		axios.get('/nfapi/mobile/contents?version=1.1.1&platform=wap&machine_id=1fe604d4ef741b82fadd41ed780913f7&user_id=&token=&limit=20&page=1&term_id=1')
		.then(res=>{
			console.log(res)
			var tabs = res.data.data.list;
			this.setState({
				tabs,

			})
			console.log(tabs)
			
		})
	}
	
	render(){
		let {match} = this.props;
		return <div className="tj">
		{
			this.state.tabs.map((item)=>{
//				console.log(item)
					if(item.covers!=""){
					return <div className="tujianOne" key={item.id} onClick={this.contentClick.bind(this,item.id)}>
					
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
				}
					
				if(item.covers=""){
					return <div className="tujianOne" key={item.id}>
					
					<div className="TJcontent3">
					<div className="Importance" >
						<p>{item.subject}</p>
						
					</div>
					<div className="tuijianTime">
						<p>{item.author}</p>
					</div>
					</div>
					
				</div>
					
				}
			})
			
		}
		</div>
	}
}
TuiJianOne = withRouter(TuiJianOne);
export default TuiJianOne;
