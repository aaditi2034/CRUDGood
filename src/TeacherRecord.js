import React, {Component} from 'react';
import teacherData from './data/teacherData';

class Teacher extends Component{
    render(){
        const {link, image} = this.props.teacherData;

        return (
            <div style= {{ margin:10}}>
                <a href={link}><img src={image} alt='social-profile' style={{ width: 30, height:30}}/></a>
            </div>
        )
    }
}

class TeacherRecord extends Component{
    render(){
        const DATA = teacherData;
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        DATA.map(TEACHER_DATA => {
                            return <Teacher key={TEACHER_DATA.id} teacherData={TEACHER_DATA} />;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TeacherRecord;