import React, { Component } from 'react';
import Input from './../common/Input';
import axios from 'axios'
const URL = 'http://localhost:4001/api/todo'
class Create extends Component {
    state = { 
        description:'',
        responsible:'',
        priority:'',
        iscomplete:false
     }

     omcngHandlr = (e) => {
         this.setState({
            [e.target.name]:e.target.value
         })
     }
     cngPriority = e => {
         this.setState({
            priority:e.target.value
         })
     }
     submitHandlr = e => {
         e.preventDefault();
         let newTodo = {
            description:this.state.description,
            responsible:this.state.responsible,
            priority:this.state.priority,
            iscomplete:this.state.iscomplete
         }
         axios.post(URL,newTodo)
            .then((result) => {
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
            });
        
        this.setState({
            description:'',
            responsible:'',
            priority:'',
            iscomplete:false
        })
     }

    render() { 
        return ( 
            <div>
                <h3>Create To do</h3>
                <form onSubmit={this.submitHandlr} className="mt-2">
                    <Input
                        label="Description"
                        placeholder="Enter your Description"
                        value={this.state.description}
                        cngHandlr = {this.omcngHandlr}
                        type="text"
                        name="description" />
                    <Input
                        label="Responsible"
                        placeholder="Enter your responsible"
                        value={this.state.responsible}
                        cngHandlr = {this.omcngHandlr}
                        type="text"
                        name="responsible" />
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                type="radio"
                                id="low" 
                                name="priorityoptins"
                                value="Low"
                                checked={this.state.priority==='Low'}
                                onChange={this.cngPriority}
                                />
                            <label className="form-check-label" htmlFor="low">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                type="radio"
                                id="medium" 
                                name="priorityoptins"
                                value="Medium"
                                checked={this.state.priority==='Medium'}
                                onChange={this.cngPriority}
                                />
                            <label className="form-check-label" htmlFor="medium">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                type="radio"
                                id="high" 
                                name="priorityoptins"
                                value="High"
                                checked={this.state.priority==='High'}
                                onChange={this.cngPriority}
                                />
                            <label className="form-check-label" htmlFor="high">High</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 

export default Create;