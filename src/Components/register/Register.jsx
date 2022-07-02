import './registerPage.css'

import {useForm} from 'react-hook-form';

import ReactSelect from 'react-select'
import { useState } from 'react';


const Register = () =>{

    const {register , handleSubmit , watch, formState: { errors }} = useForm();

    // const password = watch("pass", "");
    const [isValid , setisValid] = useState(null);

    const formSubmit = (data) =>{
       console.log(data);
    }

    const genderOptions = [
        {
            value:'M',
            label:'Male'
        },
        {
            value:'F',
            label:'Female'
        },
    ];

    const skillsOptions = [
        {
            value : 1,
            label: "Angular"
        },
        {
            value : 3,
            label: "React"
        },
        {
            value : 3,
            label: "Flutter"
        },
        {
            value : 4,
            label: "Javascript"
        },
        {
            value : 5,
            label: "TypeScript"
        },
        {
            value : 6,
            label: "React native"
        },
        {
            value : 7,
            label: "Node.js"
        },
        {
            value : 8,
            label: "C++"
        }
    ]

    console.log('errors : ' , errors);
    return(
        <div className="registerWrapper">
            <div className="container">
                <div className="registerHeader">
                    <h1 style={{Color:'#3b4483'}}>Register</h1>
                    <div className="line"></div>
                </div>
                <form className='px-5 py-5 registerForm' onSubmit={handleSubmit(formSubmit)}>
                    <div className="row pb-4">
                        <div className="col has-validation">
                            <input type="text" name="fname" id="fname" className={`form-control py-3`} placeholder='First Name'
                            {...register('fname' , {required:true})}/>
                            {(errors.fname && errors.fname.type === 'required')?<p>This Field is Required</p>:null}
                        </div>
                        <div className="col">
                        <input type="text" name="lname" id="lname" className='form-control py-3' placeholder='Last Name' {...register('lname' , {required:true})}/>
                        {(errors.lname && errors.lname.type === 'required')?<p>This Field is Required</p>:null}
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col">
                            <input type="text" name="email" id="email" className='form-control py-3 email' placeholder='Email' {...register('email' , {required:true , pattern : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                            {(errors.email && errors.email.type === 'required')?<p>This Field is Required</p>:null}
                            {(errors.email && errors.email.type === 'pattern')?<p>Invalid Email</p>:null}
                        </div>
                        <div className="col">
                            <input type="text" name="username" id="username" className='form-control py-3' placeholder='Username' {...register('username' , {required:true , maxLength:20})} />
                        
                            {(errors.username && errors.username.type === 'required')?<p>This Field is Required</p>:null}
                            {(errors.username && errors.username.type === 'maxLength')?<p>Max Length is 20 Characters</p>:null}
                        </div>
                    </div>
                    <div className='row pb-4'>
                        <div className="col">
                            <ReactSelect options={genderOptions} {...register('gender' , {required:true})}/>
                            {(errors.gender && errors.gender.type === 'required')?<p>This Field is Required</p>:null}
                        </div>
                        <div className="col">
                            <ReactSelect options={skillsOptions} isMulti {...register('skills' , {required:true})}/>
                            {(errors.skills && errors.skills.type === 'required')?<p>This Field is Required</p>:null}
                        </div>
                        <div className="col">
                            <input type="number" name="age" id="age"  className='form-control' placeholder='Age' {...register('age' , {required:true , min:18,max:50})} />
                            {(errors.age && errors.age.type === 'required')?<p>This Field is Required</p>:null}
                            {(errors.age && errors.age.type === 'min')?<p>Minimum Age is 18</p>:null}
                            {(errors.age && errors.age.type === 'max')?<p>Maximum Age is 50</p>:null}
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col">
                            <input type="password" name="pass" id="pass" className='form-control py-3' placeholder='Password'{...register('pass'  ,{required:true , minLength:8})}/>
                            {(errors.pass && errors.pass.type === 'required')?<p>This Field is Required</p>:null}
                            {(errors.pass && errors.pass.type === 'minLength')?<p>Password Must be at least 8 Characters long</p>:null}
                        </div>
                        <div className="col">
                        <input type="password" name="confirm_pas" id="confirm_pass" className='form-control py-3' placeholder='Confirm Password' {...register('confirm_pass' , {required:true , validate: (val)=>{
                            if (watch('pass') !== val){
                                return "Password does Not Match!";
                            }
                        }})} />
                        {(errors.confirm_pass && errors.confirm_pass.type === 'required')?<p>This Field is Required</p>:null}
                        {(errors.confirm_pass && errors.confirm_pass.type === 'validate')?<p>{errors.confirm_pass.message}</p>:null}
                        </div>
                    </div>
                    <div className='pt-3'>
                    <button type="submit" className='btn btn-success w-100 m-auto d-block py-3 submitButton'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;