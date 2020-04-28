import React, {Component} from 'react';


class Main extends Component{
	render(){
	return(
		this.props.records.map((record, key)=>{
		return(
			<div class="card" key={key}>
			  <div class="card-header">
			    Records of Contributors
			  </div>
			  <div class="card-body">
			    <h5 class="card-title">Name of Contributor:{record.name}</h5>
			    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
			    <a href="#" class="btn btn-primary">{record.amount}</a>
			  </div>
			</div>
	)
	})
	)

	
	}
}

export default Main;