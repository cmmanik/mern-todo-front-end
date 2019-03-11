import React, { Component } from 'react';
import axios from 'axios';
import Todo from './../common/Todo';
const URL = 'http://localhost:4001/api/todo/'
class Todolist extends Component {
    state = { 
        todos:[]
     }

    componentDidMount() {
        axios.get(URL)
            .then((response) => {
                this.setState({todos:response.data})

            }).catch((err) => {
                console.log(err);
            });
    }

    isComplte = id => {
        const todos =[...this.state.todos];
        let complttodos = todos.filter(todo => todo._id === id )
        let sendTod = {
            iscomplete:false
        }
        if(complttodos[0].iscomplete === true) {
            sendTod = {
                iscomplete:false
            }
            complttodos[0].iscomplete = false
        } else {
            sendTod = {
                iscomplete:true
            }
            complttodos[0].iscomplete = true
        } 
        todos.concat(complttodos)
        this.setState(todos)
        axios.patch(URL+id,sendTod)
    }

    deleteTodo = id => {
        
        const todos = [...this.state.todos];
        let newtodos = todos.filter(todo => todo._id !== id)
        this.setState({
            todos:newtodos
        })
        axios.delete(URL+id)
    }

    render() { 
        const todos = this.state.todos.map(item => {
            return <Todo todo={item} key={item._id} complt={this.isComplte} delete={this.deleteTodo} />
        })
        return ( 
            <div>
                <h1>Todo List</h1>
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos}
                    </tbody>
                </table>
            </div>
         );
    }
}
 

export default Todolist; 