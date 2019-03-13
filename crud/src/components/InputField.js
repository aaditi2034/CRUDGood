import React from 'react';

const Input = function(props) {
    return (
        <div className='row-label'>
            <div id='label-id'>
                <label className='form-label'>{props.title}</label>
            </div>
            <div id='input-id'>
                <input
                    type={props.inputType}
                    className='form-control'
                    id={props.name}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
}

export default Input;