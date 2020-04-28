import React, {Component} from 'react';


class Main extends Component{
	render(){
	return(
		this.props.records.map((record, key)=>{
		return(
			<div key={key}>
				<h3>{record.name}</h3>
			</div>
	)
	})
	)

	
	}
}

export default Main;