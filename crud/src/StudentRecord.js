import React, {Component} from 'react';
import studentData from './data/studentData';

class Student extends Component{
    handleDelete(){
        console.log("dlete butn clicked");
    }
    handleEdit(){
        console.log("edit clicked");
    }
    render(){
        const {name, category, age, gender, email, designation} = this.props.studentData;

        return (
            <div className='tab-col'>
                <div className='tab-col'>{name}</div>
                <div className='tab-col'>{category}</div>
                <div className='tab-col'>{age}</div>
                <div className='tab-col'>{gender}</div>
                <div className='tab-col'>{email}</div>
                <div className='tab-col'>{designation}</div>
                <div className='tab-col'><button id='edit-btn' onClick={this.handleEdit}>EDIT</button></div>
                <div className='tab-col'><button id='delete-btn' onClick={this.handleDelete}>DELETE</button></div>
            </div>
        )
    }
}

class StudentRecord extends Component{
    render(){
        const DATA = studentData;
        return (
            <div>
                <div className='table-head'>
                    <div className='tab-col'>NAME</div>
                    <div className='tab-col'>CATEGORY</div>
                    <div className='tab-col'>AGE</div>
                    <div className='tab-col'>GENDER</div>
                    <div className='tab-col'>EMAIL</div>
                    <div className='tab-col'>DESIGNATION</div>                    
                </div>
                <div className='table-body'>
                    {
                        DATA.map((STUDENT_DATA, index) => {
                            return <Student key={index} studentData={STUDENT_DATA} />
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default StudentRecord;