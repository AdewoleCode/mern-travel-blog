import React, { useEffect } from 'react'
import { getUser } from '../../api-helpers/helper'
import './Register.css'
import { useState } from 'react'
import DiaryItem from '../../component/DiaryItem'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/store'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const [user, setUser] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
      .then(data => setUser(data.user))
      .catch(err => console.log(err))
  }, [])

  const handleLogout = () => {
    dispatch(authActions.logout())
    localStorage.removeItem('userId')
    navigate('/')
  }

  return (
    <div className='profile-box'>
      <h1>User Profile</h1>

      {
        user ?
          (
            <div className="user-box">
              <div className="user-info">
                <h3>Name : {user.name}</h3>
                <h3>Email : {user.email}</h3>
                <button onClick={handleLogout} className='logout-btn' >Logout</button>
              </div>
              <div className="user-post">
                {
                  user.posts.map((post, index) => {
                    return (
                      <DiaryItem
                        key={index}
                        title={post.title}
                        location={post.location}
                        description={post.description}
                        date={new Date(`${post.date}`).toLocaleDateString()}
                        image={post.image}
                        id={post.id}
                        user={user._id}
                        name={user.name}
                      />
                    )
                  })
                }
              </div>
            </div>
          ) : null
      }
    </div>
  )
}

export default Profile