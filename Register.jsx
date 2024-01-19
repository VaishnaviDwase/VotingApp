import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [action, setAction] = useState('Register');
  const [userRegisterData, setuserRegisterData] = useState({});

  const handleChange = (e) => {
    const newValues = { [e.target.name]: (e.target.value) }
    setuserRegisterData((prevData) => ({ ...prevData, ...newValues }));
  };



  const handleFormSubmit = async () => {

    console.log(userRegisterData)
    try {
      const response = await axios.post('http://localhost:8580/register', userRegisterData).then((x) => {
        console.log('responce from api', x.data);
        alert("Register sucessfully");
      })

    }
    catch (error) {
      console.error('API error:', error.message);
    }

   
  }

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
              value={userRegisterData?.username || ''}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="input">
            <label>Password</label>
            <input
              type="password"
              placeholder="enter password"
              value={userRegisterData?.password || ''}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="input">
            <label>Email Id</label>
            <input
              type="email"
              placeholder="enter emailId"
              value={userRegisterData?.emailid || ''}
              onChange={handleChange}
              name="emailid"
            />
          </div>
          <div className="input">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="enter mobile Number"
              value={userRegisterData?.mobilenumber || ''}
              onChange={handleChange}
              name="mobilenumber"
            />
          </div>
        </div>
         <div className="submit-container">
          <div
            className={action === 'Login' ? 'submit gray' : 'submit'} onClick={handleFormSubmit}>Register </div>
          <div
            className={action === 'Register' ? 'submit gray' : 'submit'} onClick={() => navigate('/')}> Login
          </div>
        </div> 
        
      </div>
    </div>
  )
}

export default Register