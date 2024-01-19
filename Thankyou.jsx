import React from 'react'
import './Thankyou.css'
import { useNavigate } from 'react-router-dom'

const Thankyou = () => {
  const navigate=useNavigate();
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh'
    }} >
        <p style={{fontSize:'120px'}}>😊 Thank You !</p>
         <div className="logout-container">
          <div className="logout" onClick={() => navigate('/')}>logout</div>
         </div>
    </div>
  )
}

export default Thankyou