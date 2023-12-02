import React, { useEffect, useState } from 'react'
import "../Diaries/Diaries.css"
import DiaryItem from '../component/DiaryItem'
import { getAllPosts } from '../api-helpers/helper'
import Spinner from "../component/spinner/Spinner"


const Diaries = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(result => setPosts(result?.posts)).catch(error => console.log(error))
  }, [])


  return (
    <div className='diaries'>

      {
        posts.length !== 0 ? posts.map((post, index) => {
          return (
            <DiaryItem
              key={index}
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
          :
          <div className='loading-div'>
            <h2>loading travel diaries...</h2>
            <Spinner />
          </div>
      }
    </div>
  )
}

export default Diaries