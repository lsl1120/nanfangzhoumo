import React,{ Component } from 'react';
import {Route,Redirect,Switch,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


import {TabBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import './sass/App.scss'; 

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './Home/Home';
import Video from './Video/Video';
import YanXuan from './YanXuan/YanXuan';
import User from './User/User';
import ContentPage from './components/ContentPage'

import{
	faBook,
	faPlayCircle,
	faUser,
	faAtom,
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faBook,
	faPlayCircle,
	faUser,
	faAtom,
)


class App extends Component {
	constructor(){
			super();
			this.state = {
				tabs:[
					{
						title:'首页',
						path:'/home/tuijian',
						icon:'book'
					},
					{
						title:'影像',
						path:'/video',
						icon:'play-circle'
					},
					{
						title:'南周严选',
						path:'/yanxuan',
						icon:'atom'
					},
					{
						title:'我',
						path:'/user',
						icon:'user'
					}
				],
				currentTab:0
			}
	}
	
	appClick(idx,path){
		this.setState({
			currentTab:idx
		});
		//编程式导航
		this.props.history.push(path);
//		console.log(this.props.history.push)
		
	}
	
	componentWillMount(){
		//获取hash值
		let hash = window.location.hash.slice(1);
		
		//找出对应索引值
		let currentTab = 0
		this.state.tabs.some((item,idx)=>{
			currentTab = idx;
			return item.path === hash
		});
		
		this.setState({
			currentTab
		});
	}
	
  render() {
    return <div className="App">
    <div className="content">
    	<Switch>
//		    <Route path="/home" component={Home} />
		     <Route path="/home/:path" component={Home} />
		    <Route path="/video" component={Video} />
		    <Route path="/yanxuan" component={YanXuan} />
		    <Route path="/user" component={User} />
		    <Route path="/contentpage/:id" component={ContentPage} />
//		    <Redirect from="/" to="/home/tuijian" />
		    <Redirect to="/404"/>
		</Switch>
    </div>
        <TabBar
          tabBarPosition="bottom"
           tintColor="red"
//         hidden = {!this.props.tabbarStatus}
        >
          {
          	this.state.tabs.map((tab,idx)=>{
          	return <TabBar.Item
            title={tab.title}
            key={tab.path}
            icon={<FontAwesomeIcon icon={tab.icon}/>}
            selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
            selected={this.state.currentTab === idx}
            onPress={this.appClick.bind(this,idx,tab.path)}
          >
          </TabBar.Item>
          })
        }
          </TabBar>
      </div>
  }
}

let mapStateToProps=state=>({showStatus:state.commonReducer.tabbarStatus});

//利用高阶组件传递路由参数
App = connect(mapStateToProps)(App);

App = withRouter(App);

export default App;
