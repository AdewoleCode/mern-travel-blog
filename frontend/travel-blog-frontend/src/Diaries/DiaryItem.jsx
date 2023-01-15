import React from 'react'
import "../Diaries/Diaries.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { deletePost } from '../api-helpers/helper';
import { toast } from "react-toastify";

const DiaryItem = ({ title, description, image, location, date, id, user, name }) => {


  const handleDelete = async () => {
    try {
      deletePost(id)
      toast.success('post deleted successfully!')
    } catch (error) {
      toast.error(error.message)
    }
  }

  const isLoggedInUser = () => {
    if (localStorage.getItem('userId') === user) {
      return true
    }
    else return false
  }


  return (
    <div className='diary'>
      <div className="diary-head">
        <div className="diary-date">
          <div className="diary-d">
            <h1> {name.charAt(0).toUpperCase()}</h1>
            <div className="loc">
              <h4>{location}</h4>
              <h4>{date}</h4>
            </div>
          </div>
        </div>
        <div className="diary-icon-loc">
          <LocationOnIcon />
        </div>
      </div>
      <div className="diary-image">
        <img src={image} alt="img" />
      </div>
      <div className="diary-title">
        {title}
      </div>
      <hr />
      <div className="diary-username">
        <span>{name.toUpperCase()}</span> : {description}
      </div>

      {
        isLoggedInUser() ?
          <div className="diary-btn">
            <Link to={`/post/${id}`}><EditIcon className='upd-icon' /></Link>
            <AutoDeleteIcon onClick={handleDelete} className='icon-d' />
          </div> : null
      }
    </div>
  )
}

export default DiaryItem