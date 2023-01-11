import axios from 'axios'

export const getAllPosts = async () => {
    
    const response = await axios.get('http://localhost:3030/post')
    if (response.status !== 200){
        return console.log('some error occured')
    }

    const data = response.data
    return data
}