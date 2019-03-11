import React, { Component } from 'react';
import axios from 'axios';
import Input from './../common/Input';
const URL = 'http://localhost:4001/api/todo/';

class Edite extends Component {
        state = { 
            description:'',
            responsible:'',
            priority:'',
            iscomplete:false,
            id:this.props.match.params.id
         }
         
         componentDidMount() {
             axios.get(URL+this.state.id)
                .then((result) => {
                   this.setState({
                    description:result.data.description,
                    responsible:result.data.responsible,
                    priority:result.data.priority,
                    iscomplete:result.data.iscomplete
                   })
                }).catch((err) => {
                    console.log(err);
                });
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
            axios.patch(URL+this.state.id, newTodo)
               
           
           this.setState({
               description:'',
               responsible:'',
               priority:'',
               iscomplete:false
           })
          window.location="/"
        }
   

    render() { 
        return ( 
            <div>
                <h1>Update Todo-</h1>
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
 

export default Edite;