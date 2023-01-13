import React, { useState } from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPost } from '../api-helpers/helper';
import { useNavigate } from 'react-router-dom';


const AddDiary = () => {
  const navigate = useNavigate()

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const [posts, setPosts] = useState({
    title: "",
    description: "",
    image: "",
    location: "",
    date: ""
  })

  const handleChange = (event) => {
    setPosts({ ...posts, [event.target.name]: event.target.value });
  };


  const handleValidation = () => {
    const { title, description, image, location, date } = posts;
    if (title === "" || description === "" || image === "" || location === "" || date === "") {
      toast.error(
        "please fill out the form to proceed",
        toastOptions
      );
      return false;
    } 
    return true;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log(posts);
      addPost(posts)
      .then(()=>{
        toast.success('post successfully added', toastOptions)
      } )
      .then(()=> navigate('/diaries'))
      .catch((err)=> toast.error('something went wrong', toastOptions))
    }
  }



  return (
    <>
      <div className='add-diary-box'>
        <div className="text-box">
          <h1>Add Your Travel Diary</h1>
          <div className='icon'>
            <PostAddIcon className='add-icon' />
          </div>
        </div>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="image URL"
            name="image"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="location"
            name="location"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="date"
            placeholder="date"
            name="date"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Add Post</button>

        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddDiary