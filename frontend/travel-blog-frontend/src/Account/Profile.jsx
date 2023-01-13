import React, { useEffect } from 'react'
import { getUser } from '../api-helpers/helper'
import '../Account/Register.css'
import { useState } from 'react'
import DiaryItem from '../Diaries/DiaryItem'


const Profile = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    getUser()
      .then(data => setUser(data.user))
      .catch(err => console.log(err))
  }, [])




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
                        id={post.id} />
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