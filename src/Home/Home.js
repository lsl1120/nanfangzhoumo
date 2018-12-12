import React,{Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';

import NFlogo from "../img/HomeImg/NFlogo.png"

import {SearchBar,Tabs} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import '../sass/Home.scss'

import TuiJian from './TuiJian'
import XinWen from './XinWen'

import TuijianOne from './TuiJian/TuijianOne'

class Home extends Component{
		    
	constructor(){
		super();
		this.state = {
			tabs:[
				{
					id:'1',
					title:'推荐',
					path:'/tuijian',
					
				},
				{
					id:'2',
					title:'新闻',
					path:'/xinwen'
				},
				{	id:'3',
					title:'观点'
				},
				{	id:'4',
					title:'文化'
				},
				{	id:'7',
					title:'人物'
				},
				{
					id:'8',
					title:'专题'
				},
				{
					id:'6',
					title:'生活'
				}
			],
			NavTab:0
		}
	}
	
	homeNavClick(item){
		console.log(item)
		this.props.history.push("/home"+item.path);
//		this.setState({
//			NavTab:item.id
//		});
//		console.log(item.id)
	}
	
	///nfapi/mobile/terms?version=1.1.1&platform=wap&machine_id=9ee71ec3170377fd110d849102f418b3&user_id=&token=&limit=10&type=channel
	componentWillMount(){
//		console.log(this.props)
//		window.location.reload(true);
		let hash = window.location.hash.slice(1);
		let NavTab = 0
		this.state.tabs.some((item)=>{
			NavTab = item.id;
			return item.path === hash
		});
		console.log(this.props.match.path)
		this.setState({
			NavTab
		})

	 }
	
	render(){

		return (<div className="home">
			<Switch>
				<Route path={this.props.match.path + "/tuijian"} component={TuiJian}/>
				<Route path={this.props.match.path + "/xinwen"} component={XinWen}/>
			</Switch>
		<div className="homeHeader">	
			<div className="nflogo">
				<img src={NFlogo} />
			</div>
			
			<div className="homeSearch">
      			
			      <SearchBar placeholder="点击搜索" maxLength={8} />
			</div>
		</div>
		
		<div className="homeNav">
	
				 <Tabs 
		        tabs={this.state.tabs}
		        tabBarActiveTextColor='red'
		        onTabClick={this.homeNavClick.bind(this)}
		        >
		        </Tabs>
		    
      	</div>
	</div>
	)}
	
}
Home = withRouter(Home)
export default Home;