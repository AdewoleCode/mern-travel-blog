import axios from 'axios'

import { PostsRoute, loginRoute, registerRoute, usersRoute } from '../utils/APIRoutes'


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


export const getSinglePost = async (id) => {
    const response = await axios.get(`${PostsRoute}/${id}`)

    if (response.status !== 200){
        return console.log('some error occured')
    }

    const data = response.data
    return data

}

// export const updateSinglePost = async (dataObj, id) => {
//     const response = await axios.put(`${PostsRoute}/${id}`, {
//         title: dataObj.title,
//         description: dataObj.description,
//         location: dataObj.location,
//         image: dataObj.image
//     })

//     if (response.status !== 200){
//         return console.log('something went wrong!')
//     }

//     const data = response.data
//     return data
// }


export const deletePost = async (id)=> {
    const response = await axios.delete(`${PostsRoute}/${id}`).catch(err=> console.log(err))

    if (response.status !== 200){
        return console.log('unable to delete post!')
    }

    const data = response.data
    return data

}


export const getUser = async () => {
    const id = localStorage.getItem('userId')
    const response = await axios.get(`${usersRoute}/${id}`).catch(err=> console.log(err))

    if (response.status !== 200){
        return console.log('unable to get user')
    }

    const data = response.data
    return data

}