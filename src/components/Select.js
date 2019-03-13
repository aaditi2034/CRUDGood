import React from 'react';

const Select = function(props) {
    return (
        <div className="row-label">
			<div id='label-id'><label> {props.title} </label></div>
		    <div id='input-id'>
                <select 
                    id = {props.name}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    className="form-control">
                    <option value="" disabled>{props.placeholder}</option>
                    {props.options.map(option => {
                        return (
                            <option
                                key={option}
                                value={option}
                                label={option}>{option}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    )
};

export default Select;
