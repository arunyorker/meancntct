import React from "react";
import { render } from "react-dom";
export class Notes extends React.Component {
	constructor(){
		super()
		this.state={
			editing:false
		}
	}

	edit() {
	    this.setState({
		editing:true		
	    })
	}

	cancel(){
		this.setState({
		editing:false
			});
	} 
	remove(){	
		this.props.deleteFromBoard(this.props.index);
	}

	save(){
		var val=this.refs.newText.value;
		this.props.updateCommentText(val,this.props.index)
		this.setState({
		editing:false
			});
	}

	renderNormal(){
		return(
			<div className="notes" >
				<div className="noteBlock">{this.props.children}</div>
				<button onClick={this.edit.bind(this)} className="btn btn-warning">Edit</button>
				<button onClick={this.remove.bind(this)} className="btn btn-danger">Remove</button>
			</div>
			);
	}

	renderForm(){
		return(
			<div className="notes">
			<textarea placeholder="enter notes"class="form-control" ref="newText" defaultValue={this.props.children}></textarea>
				<button onClick={this.save.bind(this)} className="btn btn-success">Save</button>
<button onClick={this.cancel.bind(this)} className="btn btn-danger">Cancel</button>
			</div>
			);
	}

	render() {
		if(this.state.editing){
			return this.renderForm()
		}
		else{
			return this.renderNormal();
		}
		
	}
}



