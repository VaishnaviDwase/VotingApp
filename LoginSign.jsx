import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './LoginSign.css';
import Voting from './Voting';

const LoginSign = () => {
    const [adminLoginCredentials, setadminLoginCredentials] = useState({
        email: 'admin@voitinapp.com',
        password: 'admin@124578'
    })
    const navigate = useNavigate()
    const [action, setAction] = useState('Login');
    const [userLoginData, setuserLoginData] = useState({
        username: '',
        password: '',
    });

    const [data, setdata] = useState()

    useEffect(() => {
        axios.get("http://localhost:8580/login").then((elm) => {
            console.log('api responce -> ',elm.data);
            setdata(elm.data)
        })
    }, [])

    const handleChnage = (e) => {
        const newValues = { [e.target.name]: e.target.value }
        setuserLoginData({ ...userLoginData, ...newValues });
    }
   
    const handleFormSubmit = () => {
        var count=0;
        const userlogin = data.find((elm) => {
            console.log('find working ' ,elm)
            if(elm.username === userLoginData.username &&  elm.password === userLoginData.password){
                console.log('in if condition ele match username ->', elm.username)
                return elm;
            }
            localStorage.setItem('loginseremail', JSON.stringify(elm.username))

        })
        console.log(userlogin)
        if(userLoginData.username !== "" && userLoginData.password !== ""){
            
            if (userLoginData.username === adminLoginCredentials.email && userLoginData.password === adminLoginCredentials.password) {
                console.log('in if condion admin')
                navigate('/admin');
            } else if (userlogin !== undefined && count==0) {
                count++;
                navigate('/voting');
            }
            else if(count!=0){
                alert("you already voted");
    
            } else {
                alert("please register firstly");
            }
        }
        else if(userLoginData.username === "" && userLoginData.password === ""){
            alert("PLEASE ENTER USERNAME AND PASSOWRD")
        }
        else if(userLoginData.username === ""){
            alert("PLEASE ENTER USERNAME")
        }
        else{
            alert("PLEASE ENTER PASSWORD")
        }
        
        
    };

    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="enter username"
                            name='username'
                            onChange={handleChnage}
                        />
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="enter password"
                            onChange={handleChnage}
                        />
                    </div>
                </div>
                <div className="submit-container">
                    <div className={action === 'Register' ? 'submit gray' : 'submit'} onClick={handleFormSubmit}> Login</div>
                    <div className={action === 'Register' ? 'submit gray' : 'submit'} onClick={() => navigate('/register')}> Register</div>
                </div>
            </div>
        </div>

    );
};

export default LoginSign;
