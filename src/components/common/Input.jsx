import React from 'react';
const Input = (props) => {
    return ( 
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                type={props.type} 
                value={props.value} 
                name={props.name} 
                className="form-control" 
                onChange={props.cngHandlr}
                placeholder={props.placeholder}/>
        </div>
     );
}
 
export default Input;