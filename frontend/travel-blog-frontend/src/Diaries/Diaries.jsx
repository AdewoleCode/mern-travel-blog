import React from 'react'
import "../Diaries/Diaries.css"

import DiaryItem from './DiaryItem'


const Diaries = () => {
  return (
    <div className='diaries'>
        {
            [1,2,3,4,5].map(item=> {
                return(
                    <DiaryItem key={item} />
                )
            })
        }
    </div>
  )
}

export default Diaries