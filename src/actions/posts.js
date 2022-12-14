import * as api from "../Api"


//action creators
 export const getPosts = ()=> async(dispatch)=> {
     try {
         const { data } = await api.fetchPosts();
         dispatch({type: "FETCH_ALL", payload:data});
     } catch (error) {
         console.log(error);
     }
 }


 export const createPost =(post) => async (dispatch)=>{
     try {
         const {data} = await api.createPost(post);
        console.log(data)
         dispatch({type:"CREATE", payload: data})
     } catch (error) {
         console.log(error.message);
     }
 }

//  export const updatePost = (id,post) => async (dispatch)=>{
//      try{
//         const {data} = await api.updatePost(id, post);
//         dispatch({type:"UPDATE", payload: data});
//      }catch(error){
//         console.log(error.message);
//      }
//  }

//  export const deletePost =(id)=> async (dispatch)=>{
//      try {
//          await api.deletePost(id);

//          dispatch({type:"DELETE", payload:id});
//      } catch (error) {
//          console.log(error);
//      }
//  }

//  export const likePost = (id, post) => async (dispatch)=>{
//      try {
//          const { data } = await api.likePost(id, post);
//          dispatch({type:"LIKEPOST", payload: data});
//      } catch (error) {
//         console.log(error);
//      }
//  }