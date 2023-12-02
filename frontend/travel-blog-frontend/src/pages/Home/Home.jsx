import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const isloggedIn = useSelector((state) => state.isloggedIn);

  return (
      <div className="home-img-box">
        <h1>Dare to live the life you've always wanted!</h1>
        <h2>SHARE YOUR TRAVEL DIARIES WITH US</h2>
        <div className="btn-box">
          <button className='btn-1'>
            <Link to={isloggedIn ? `${'/add'}` : `${'/login'}`}>
              Share Story
            </Link>
          </button>
          <button className='btn-2'> <Link to="/diaries">View Travel Diaries</Link></button>
        </div>
      </div>
  )
}

export default Home