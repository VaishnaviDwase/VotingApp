import axios from "axios";
import { useState } from "react";
import './voting.css' 
import { useNavigate } from "react-router-dom";
import './LoginSign.jsx'
import './Register.jsx'

const Voting = () => {
    const navigate=useNavigate();
    const [voteData, setvoteData] = useState({})

    const handleChnage = (e) => {
      const newValue = { [e.target.name] : e.target.value }
      setvoteData({...voteData, ...newValue})
    }
    const handleClick = async () => {
        
      await axios.post('https://653f42879e8bd3be29e0203a.mockapi.io/voitingapp', voteData).then((response) => {
        console.log('data added to api', response)
        navigate('/thankyou');
 
      })
      console.log(voteData)
    }
  return (
    <div className="container">
        <div className="header">
            <div className="text">Voting Page</div>
            <div className="underline"></div>
        </div>
        <div >
          <div className="inputs">
            <div className="input1">
          <input onChange={handleChnage} type="radio" value='candidate1' name="vote" /> Candidate 1
          </div>

          <div className="input1">
          <input onChange={handleChnage} type="radio" value='candidate2' name="vote" /> Candidate 2
          </div>

          <div className="input1">
          <input onChange={handleChnage} type="radio" value='candidate3' name="vote" /> Candidate 3 
          </div>
         
          <div className="input1">
          <input onChange={handleChnage} type="radio" value='candidate4' name="vote" /> Candidate 4
          </div>
          
          </div>
          <br /><br />
          <div className="submit-container">
            <div className="submit1"onClick={handleClick} >
            Vote
          </div>
          </div>
        </div>
  
      </div>
  )
}

export default Voting


// import axios from 'axios';
// import React, { useState } from 'react'

// const Voting = () => {
//     const [selectedOption, setSelectedOption] = useState('');
//     const [action, setAction] = useState('Vote');

//     const handleOptionChange=(e)=>{
//         setSelectedOption(e.target.value);
//     }

//     const voteSumbitForm= async ()=>{
        
//         const response = await axios.post('https://fakestoreapi.com/users', {
//             setSelectedOption
//             });
//     }
//   return (
//     <div>
//         <div className="container">
//         <div className="header">
//           <div className="text">{action}</div>
//           <div className="underline"></div>
//         </div>
//         <div className="inputs">
//           <div className="input">
//           <label>
//         <input
//           type="radio"
//           value="option1"
//           checked={selectedOption === 'option1'}
//           onChange={handleOptionChange}
//         />
//         candiate 1
//       </label>
//           </div>
//           <div className="input">
//           <label>
//         <input
//           type="radio"
//           value="option1"
//           checked={selectedOption === 'option1'}
//           onChange={handleOptionChange}
//         />
//        candiate 2
//       </label>
//           </div>
//           <div className="input">
//           <label>
//         <input
//           type="radio"
//           value="option1"
//           checked={selectedOption === 'option1'}
//           onChange={handleOptionChange}
//         />
//         candiate 3
//       </label>
          
//           </div>
//           <div className="input">
//           <label>
//         <input
//           type="radio"
//           value="option1"
//           checked={selectedOption === 'option1'}
//           onChange={handleOptionChange}
//         />
//         candiate 4
//       </label>
            
//           </div>
//         </div>
//         <div className="submit-container">
//           <div className= 'submit'onClick={voteSumbitForm}>Vote </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Voting

