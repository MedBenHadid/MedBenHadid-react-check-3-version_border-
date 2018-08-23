import React, {Component} from "react";

class Member extends React.Component{
	render(){
		return(
			<div className="box">
			{this.props.value==='h' ?
				<img src={this.props.image} style={{"border" : "3px solid blue"}} width="100%"/>:
				<img src={this.props.image} style={{"border" : "3px solid yellow"}} width="100%"/>
					
			}
     			<h2>{this.props.name}</h2>
    			<p>{this.props.role}</p>
     		</div>
		);
	}
}

export default Member;