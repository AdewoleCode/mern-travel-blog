import React, { useEffect, useState } from 'react'
import "../Diaries/Diaries.css"

import DiaryItem from './DiaryItem'
import { getAllPosts } from '../api-helpers/helper'


const Diaries = () => {

  const [posts, setPosts] = useState()

  useEffect(() => {
    getAllPosts().then(result => setPosts(result?.posts)).catch(error => console.log(error))
  }, [])


  return (
    <div className='diaries'>
      {
        posts && posts.map((post, index) => {
          return (
            <DiaryItem key={index}
              date={new Date(`${post.date}`).toLocaleDateString()}
              description={post.description}
              image={post.image}
              location={post.location}
              id={post._id}
              title={post.title}
              user={post.user._id}
              name={post.user.name}
            />
          )
        })
      }
    </div>
  )
}

export default Diaries