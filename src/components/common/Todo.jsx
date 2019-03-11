import React from 'react';
import {Link} from'react-router-dom';
const Todo = (props) =>(
   
   <tr>
      <td className={props.todo.iscomplete ? 'completed' : ''}>{props.todo.description}</td>
      <td className={props.todo.iscomplete ? 'completed' : ''}>{props.todo.responsible}</td>
      <td className={props.todo.iscomplete ? 'completed' : ''}>{props.todo.priority}</td>
      <td>
          <Link to={"/edite/" + props.todo._id}><i className="fa fa-edit info "></i></Link>
          <span> || 
             <i onClick={() => props.complt(props.todo._id)}
                  className={props.todo.iscomplete ? ' fa fa-check completed' : 'fa fa-check'}
                  style={{cursor:'pointer'}}  aria-hidden="true"></i>
         </span>
         <span className="danger"> ||
            <i onClick={() => props.delete(props.todo._id)}
               className="fa fa-trash"
               style={{color:'red', cursor:'pointer'}}>
            </i>
         </span>
      </td>
   </tr>
)
 
export default Todo;