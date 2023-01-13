import axios from 'axios'

import { PostsRoute, loginRoute, registerRoute } from '../utils/APIRoutes'


export const getAllPosts = async () => {
    
    const response = await axios.get(PostsRoute)
    if (response.status !== 200){
        return console.log('some error occured')
    }

    const data = response.data
    return data
}

export const signUp = async (dataObj) => {
    const response = await axios.post(registerRoute, {
        name: dataObj.name ? dataObj.name : "",
        email: dataObj.email,
        password: dataObj.password
    }).catch(err => console.log(err))

    if (response.status !== 200 && response.status !== 201){
        return console.log('unable to authenticate')
    }

    const data = response.data
    return data
}

export const login = async (dataObj) => {
    const response = await axios.post(loginRoute, {
        email: dataObj.email,
        password: dataObj.password
    })

    if (response.status !== 200){
        return console.log('some error occured')
    }

    const data = await response.data
    return data
}

export const addPost = async (dataObj) => {
    
    const response = await axios.post(PostsRoute, {
        title: dataObj.title,
        description: dataObj.description,
        image: dataObj.image,
        location: dataObj.location,
        date: dataObj.date,
        user: localStorage.getItem('userId')
    } )

    if (response.status !== 201){
        return console.log('some error occured')
    }

    const data = response.data
    return data
}