import React from 'react';

const Radio = function(props) {
    return (
        <div className='row'>
            <div className='col-lg-6'>
                <label className='form-label'>{props.title}</label>
            </div>
            <div className='col-lg-6'>
                <input 
                    type='radio'
                    className='form-control field-width'
                    id={props.name}
                    name={props.name}
                    value={props.title}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
}

export default Radio;