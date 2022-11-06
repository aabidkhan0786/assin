import React, { useState, useEffect } from 'react'
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        itemName: "",
        link: "",
        resource: "",
        desc: ""
    });
    const [load,setLoad] =useState(false)

    // const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (post) setPostData(post);
    // }, [post])


    const clear = (e) => {
        // e.preventDefault();
        // setCurrentId(0);
        setPostData({ itemName: '', link: '', resource: '', desc: ''});
    };

    const handleSubmit = async (e) => {
        setLoad(true)
        e.preventDefault();
        // if (currentId === 0) {

        // } else {
        //     dispatch(updatePost(currentId, postData));
        //     clear();
        //     setLoad(false)
        // }
        if (postData.itemName === "" || postData.resource === "") {
            setLoad(false)
            return alert("Please atleast fill Item name and resource field !")
        }
        dispatch(createPost(postData));
        setLoad(false)
        clear();
        
    }
    console.log(postData);
    return (
        <>
            <div className="row-fluid fixed">
                <div className="col-11 mx-auto my-3">
                    <form className="shadow-lg p-2 mb-5 bg-transparent text-dark rounded">
                        <div className="row-fluid">
                            <div className="col my-2 ">
                                <input type="text" name="itemName" value={postData.itemName} onChange={e => setPostData({ ...postData, itemName: e.target.value })} className="form-control" placeholder="itemName" />
                            </div>
                            <div className="col my-2">
                                <input type="text" name="link" value={postData.link} onChange={e => setPostData({ ...postData, link: e.target.value })} className="form-control" placeholder="link" />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="col my-2">
                                <input type="text" name="resource" value={postData.resource} onChange={e => setPostData({ ...postData, resource: e.target.value })} className="form-control" placeholder="resource" />
                            </div>
                            <div className="col my-2">
                                <input type="text" name="desc" value={postData.desc} onChange={e => setPostData({ ...postData, desc: e.target.value })} className="form-control" placeholder="desc" />
                            </div>
                        </div>

                        <div className="row-fluid">
                            <div className="col my-2">
                                <button className="btn btn-sm btn-block btn-primary my-2" onClick={handleSubmit}><i class="fas fa-dot-circle p-2"></i>{load ? "Creating..." : "Submit"}</button>
                                <button className="btn btn-sm btn-block btn-secondary my-2" onClick={()=>clear}><i class="fas fa-broom p-2"></i>Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
