import React,{Component} from 'react';
import axios from 'axios';
import '../sass/ContentPage.scss'

class ContentPage extends Component{
	
	constructor(){
		super();
//		let cid = props.location.search.slice(1);
//		console.log(cid)
		this.state={
			contentpage:[]
		}
	}
	
	componentWillMount(){
		let id = this.props.match.params.id
		console.log(id)
		axios.get('/nfapi/mobile/contents/' + id)
		.then((res)=>{
//			console.log('内容',res.data.data.content.fulltext)
//			console.log('标题',res.data.data.content.subject)
			console.log('记者',res.data.data)
			let contentpage = res.data.data.content
			this.setState({
				contentpage
			})
//			console.log(contentpage)
		})
		
		
		
	}
	
	render(){
		console.log(this.state.contentpage)
		let title = this.state.contentpage.subject;
		let baoshe = this.state.contentpage.author;
		let neirong = this.state.contentpage.fulltext
		return <div className="contentpage">
			<div className="title">{title}</div>
			<p className="baoshe">{baoshe}</p>
			<div dangerouslySetInnerHTML={{__html:neirong}} className="neirong"></div>
		
		</div>
	}
	
}


	

export default ContentPage;