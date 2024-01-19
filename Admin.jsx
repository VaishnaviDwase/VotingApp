import { useState, useEffect } from 'react'
import axios from 'axios'
import './voting.css'
import './Admin.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Admin = () => {
    const [apiData, setapiData] = useState([])
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get("https://653f42879e8bd3be29e0203a.mockapi.io/voitingapp").then((x) => {
            console.log('responce data', x.data)
            setapiData(x.data)
        })
    }, [])
    const logoutsubmit = () => {
        Navigate('/');
    }

    const cadidate1VoteCount = apiData.filter((elm) => elm.vote === 'candidate1').length;
    //inside apidata below data available
    // {vote: 'candidate4', id: '1'}
    // {vote: 'candidate2', id: '2'}
    // {vote: 'candidate4', id: '3'}
    // {vote: 'candidate1', id: '5'}
    const cadidate2VoteCount = apiData.filter((elm) => elm.vote === 'candidate2').length;
    const cadidate3VoteCount = apiData.filter((elm) => elm.vote === 'candidate3').length;
    const cadidate4VoteCount = apiData.filter((elm) => elm.vote === 'candidate4').length;

    console.log('candidate 1 votes -> ', cadidate1VoteCount)
    console.log('candidate 2 votes -> ', cadidate2VoteCount)
    console.log('candidate 3 votes -> ', cadidate3VoteCount)
    console.log('candidate 4 votes -> ', cadidate4VoteCount)

    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="text">Admin Page</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input1">
                        Candidate 1 votes  : <span className='count'>{cadidate1VoteCount}</span>
                    </div>
                    <div className="input1">
                        Candidate 2 votes  : <span className='count'>{cadidate2VoteCount}</span>
                    </div>
                    <div className="input1">
                        Candidate  votes  : <span className='count'>{cadidate3VoteCount}</span>
                    </div>
                    <div className="input1">
                        Candidate 4 votes  : <span className='count'>{cadidate4VoteCount}</span>
                    </div>
                </div>
                 <div className="submit-container">
                    <div className="submit1" onClick={logoutsubmit} >
                        logout
                    </div>
              </div>
                </div>
           
        </>
    )
}

export default Admin