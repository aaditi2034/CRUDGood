import React, {Component} from 'react';
import Input from './InputField';
import Select from './Select';
import teacherData from '../data/teacherData';
import studentData from '../data/studentData';

import { Redirect } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newMem:{
                id: '',
                name: '',
                category: '',
                age: '',
                gender: '',
                email: '',
                designation: ''
            },
            redirectCheck: false,
            categoryOptions: ['Teacher', 'Student'],
            genderOptions: ['Male', 'Female', 'Others'],
            designationOptions: ['WebTech', 'DataStructures', 'Android', 'OS', 'DAA', 'Compiler']
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let name = e.target.name;
        let val = e.target.value;
        const { newMem } = this.state;
        newMem[name] = val;
        this.setState({ newMem });
    }

    //Works when form is submitted.
    handleSubmit(e){ 
        e.preventDefault();
        this.setState({redirectCheck: true});
        const data = this.state.newMem;
        if(data.category == 'Teacher')
            teacherData.push(data);
        else
            studentData.push(data);
    }    

    onRedirect(){
        if(this.state.redirectCheck) {
            if(this.state.newMem.category == 'Teacher') {
                return <Redirect to='./viewTeacher' />
            }
            else{
                return <Redirect to='/viewStudent' />
            }
        }        
    }


    render() {
        
        return (
            <form className='teacher-container' name='form-name'>
                {this.onRedirect()}
                <Input 
                    inputType={'text'} 
                    title={'Full Name'} 
                    name={'name'} 
                    value={this.state.newMem.name}
                    placeholder={'Enter Full Name'} 
                    onChange={this.handleChange}
                /> <br/>
                <Select
                    title={'Category'} 
                    name={'category'} 
                    value={this.state.newMem.category}
                    options={this.state.categoryOptions} 
                    placeholder = {'Select Category'}
                    onChange={this.handleChange}
                /> <br />
                <Input 
                    inputType={'number'} 
                    title={'Age'} 
                    name={'age'} 
                    value={this.state.newMem.age}
                    placeholder={'Enter Age'} 
                    onChange={this.handleChange}
                /> <br/>
                <Select
                    title={'Gender'} 
                    name={'gender'} 
                    value={this.state.newMem.gender}
                    options={this.state.genderOptions} 
                    placeholder = {'Select Gender'}
                    onChange={this.handleChange}
                /> <br />
                <Input 
                    inputType={'text'} 
                    title={'Email'} 
                    name={'email'} 
                    value={this.state.newMem.email}
                    placeholder={'abc@gmail.com'} 
                    onChange={this.handleChange}
                /> <br/>
                <Select 
                    title={'Designation'} 
                    name={'designation'} 
                    value={this.state.newMem.designation}
                    options={this.state.designationOptions} 
                    placeholder = {'Select Designation'}
                    onChange={this.handleChange}
                /> <br/>
                <button onClick={this.handleSubmit}>INSERT</button>
            </form>
        );
    }
}

export default Form;