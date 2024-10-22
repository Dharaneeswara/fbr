import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import './Signup.css'
import eyeclose from './Assets/eye-close.png'
import eyeopen from './Assets/eye-open.png'

const Signup = () => {

    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors]=useState({})

    useEffect(() => {
        const eyeicon = document.getElementById("eyeicon");
        const password = document.getElementById("password");

        if (eyeicon && password) {
            eyeicon.onclick = function () {
                if (password.type === "password") {
                    password.type = "text";
                    eyeicon.src = eyeopen;
                } else {
                    password.type = "password";
                    eyeicon.src = eyeclose;
                }
            };
        }
    }, []);

    const handleInput = (event)=>{
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit =(event) =>{
        event.preventDefault()
        setErrors(Validation(values))
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8080/signup', values)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err));
        }

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25 '>
            <h2>Sign Up</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='name' placeholder='Enter Name' name='name' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <div className='input'>
                        <input type='password' placeholder='Enter Passsword' name='password' id='password' onChange={handleInput} className='form-control rounded-0'/>
                        <img src={eyeclose} alt='eyeclose' id='eyeicon'/>
                    </div>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
                <p>if you already have an account?</p>
                <Link to='/' className='btn btn-default border w-100 text-dark bg-light rounded-0 text-decoratio-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup