import axios from 'axios'

// const url = "http://localhost:3000//posts";
// const url = "https://avisits.herokuapp.com/posts";

const url = "https://media-content.ccbp.in/website/react-assignment/resources.json"
const addResource = "https://media-content.ccbp.in/website/react-assignment/add_resource.json"

export const fetchPosts = () => axios.get(url);

export const createPost =(newPost) => axios.post(addResource, newPost);

// export const updatePost =(id,updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// export const deletePost = (id) => axios.delete(`${url}/${id}`);

// export const likePost = (id) => axios.patch(`${url}/${id}/likeposts`);