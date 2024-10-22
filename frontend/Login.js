import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from'./LoginValidation';
import axios from 'axios';
import eyeclose from './Assets/eye-close.png';
import eyeopen from './Assets/eye-open.png';
import './Login.css';

const Login = () => {
    const [values,setValues]=useState({
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
        setValues(prev=>({...prev, [event.target.name]:event.target.value}))
    }
    const handleSubmit =(event) =>{
        event.preventDefault()
        setErrors(Validation(values))
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8080/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/about');
                }else{
                    alert("data is not exist");
                }
            })
            .catch(err => console.log(err));
        }

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25 '>
            <h2>Login</h2>
            <form action='' onSubmit={handleSubmit}>
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
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                <p>You are agree to our terms and policies</p>
                <Link to='/Signup' className='btn btn-default border w-100 text-dark bg-light rounded-0 text-decoratio-none'>Create account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login