import React,{Component} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {showtabbar} from '../actions';
import MyInformation from './MyInformation'
import Login from './Login'
import Register from './Register'


class User extends Component{
	constructor(){
		super();
//		this.state={
//			
//		}
	}
	
	componentWillMount(){
//		console.log(this.props.showStatus)
		this.props.showTabbar(false)
	}
	
	render(){
		console.log(this.props.showStatus)
		return <div>

		<Switch>
			
			<Route path="/user/reg" component={Register} />
			<Route path="/user/login" component={Login} />
			<Route path="/user/myinf" component={MyInformation} />
			<Redirect from="/user" to="/user/myinf" />
			
		</Switch>
			
		</div>
	}
}

let mapStateToProps=state=>({showStatus:state.commonReducer.tabbarStatus});
let mapDispatchToProps = dispatch=>{
    return {
       showTabbar(status){
       		dispatch(showtabbar(status));
       }
    }
}




User = connect(mapStateToProps,mapDispatchToProps)(User);
//User = connect(mapStateToProps)(User);
User = withRouter(User);

export default User;