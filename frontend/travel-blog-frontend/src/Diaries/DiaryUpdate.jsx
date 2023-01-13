import React, { useState, useEffect } from 'react'
import "../Diaries/Diaries.css"
import { useNavigate, useParams } from 'react-router-dom'
import { getSinglePost } from '../api-helpers/helper'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { updateSinglePost } from '../api-helpers/helper';
import axios from 'axios';



const DiaryUpdate = () => {
    const navigate = useNavigate()


    const id = useParams().id
    console.log(id);

    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    };


    const [updatePost, setUpdatePost] = useState({})

    const [posts, setPosts] = useState({
        title: "",
        description: "",
        image: "",
        location: "",
    })

    useEffect(() => {
        getSinglePost(id)
            .then(data => {
                console.log(data.post);
                setUpdatePost(data.post)

                setPosts({
                    title: data.post.title,
                    description: data.post.description,
                    location: data.post.location,
                    image: data.post.image
                })
            })
            .catch(err => console.log(err))
    }, [id])


    const handleChange = (event) => {
        setPosts((prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ));
    };

    const handleValidation = () => {
        const { title, description, image, location } = posts;
        if (title === "" || description === "" || image === "" || location === "") {
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

            try {
                const response = await axios.put(`http://localhost:3030/post/${id}`, posts)
                console.log(response.data);
                toast.success(response.data.message, toastOptions)
                navigate('/diaries')    
            } catch (error) {
                toast.error(error.message)
            }
        }
    }



    return (
        <>
            <div className='add-diary-box'>
                <div className="text-box">
                    <h1>Update Diary</h1>
                    <div className='icon'>
                        <PostAddIcon className='add-icon' />
                    </div>
                </div>

                {

                    updatePost && (

                        <form action="" onSubmit={(event) => handleSubmit(event)}>
                            <input
                                type="text"
                                placeholder="title"
                                value={posts.title}
                                name="title"
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                type="text"
                                value={posts.description}
                                placeholder="description"
                                name="description"
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                type="text"
                                value={posts.image}
                                placeholder="image URL"
                                name="image"
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                type="text"
                                value={posts.location}
                                placeholder="location"
                                name="location"
                                onChange={(e) => handleChange(e)}
                            />
                            <button type="submit">Update Post</button>

                        </form>
                    )
                }

            </div>
            <ToastContainer />
        </>
    )
}

export default DiaryUpdate