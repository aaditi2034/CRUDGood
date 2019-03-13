import React, {Component} from 'react';
import Student from './StudentRecord';
import Teacher from './teacherRecord';
import Addteacher from './AddTeacherInfo';
import Addstudent from './AddStudentInfo';
import TEACHERDATA from './data/teacherData';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class DisplayArea extends Component {
    render() {
        return (
            <Router>
                <div className='routerContainer'>
                    <div className='part' id='part1'>
                        <ul>
                            <li><Link to='/'>Teacher</Link></li>
                            <ul>
                                <li><Link to='/addTeacher'>Add Record</Link></li>
                                <li><Link to='/viewTeacher'>View Records</Link></li>
                            </ul>
                            <li><Link to='/'>Student</Link></li>
                            <ul>
                                <li><Link to='/addStudent'>Add Record</Link></li>
                                <li><Link to='/viewStudent'>View Record</Link></li>
                            </ul>
                        </ul>
                    </div>
                
                    <div className='part' id='part2'>
                        <Route path='/addTeacher' component={Addteacher} />
                        <Route path='/viewTeacher' render={(props) => (
                                <Teacher {...props} data={TEACHERDATA} />
                            )}
                        />
                        <Route path='/addStudent' component={Addstudent} />
                        <Route path='/viewStudent' component={Student} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default DisplayArea;