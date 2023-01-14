import React from 'react'
import '../Home/Home.css'
import TravelImg from '../assets/travelmal.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <img src={TravelImg} alt="travel-img"/>
        <h1>Dare to live the live you've always wanted to live!</h1>
        <div className="footer">
            <h2>SHARE YOUR TRAVEL DIARIES WITH US</h2>
            <div className="btn-box">
                <button className='btn-1'> <Link to="/add"> Share Your Stories </Link> </button>
                <button className='btn-2'> <Link to="/diaries">View Diaries</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Home