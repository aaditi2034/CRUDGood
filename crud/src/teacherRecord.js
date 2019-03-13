import React, {Component} from 'react';
import teacherData from './data/teacherData';

class Teacher extends Component{
    handleDelete(){
        console.log("dlete butn clicked");
    }
    handleEdit(){
        console.log("edit clicked");
    }
    render(){
        const {name, category, age, gender, email, designation} = this.props.teacherData;

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

class TeacherRecord extends Component{
    render(){
        const DATA = teacherData;
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
                        DATA.map((TEACHER_DATA, index) => {
                            return <Teacher key={index} teacherData={TEACHER_DATA} />
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default TeacherRecord;