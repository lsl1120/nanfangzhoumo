import React,{Component} from 'react';
import '../sass/TuiJian.scss'
import TuiJianOne from './TuiJian/TuijianOne'

class TuiJian extends Component{	
	render(){
		return <div className="tuijian">
				<TuiJianOne/>
		  </div>
	}
}

export default TuiJian;