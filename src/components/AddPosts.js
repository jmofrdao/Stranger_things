import './AddPosts.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { createNewPost } from '../api'



const AddPosts = ({username, setPosts, posts}) => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('free')
    const [location,setLocation] = useState('On Request')
    const [willDeliver,setWillDeliver] = useState(false)
    const [checkedBox, setCheckedBox] = useState(false)
    const navigate = useNavigate()

    function handleCheckBox (){
        if (checkedBox) {
            setCheckedBox(true)
        } else {
            setCheckedBox(false)
        } return checkedBox
    }
    const handleSubmit = async (event) => {
        
        event.preventDefault()
        const token = localStorage.getItem("token")
        const newPost = {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver,
            
        }
        const freshPost = await createNewPost(token, newPost)
        setPosts([...posts, freshPost])
        navigate('/Posts')
        
    }
        return (
        <div id="newPostBox">
            <form id="newPost" onSubmit={handleSubmit}>
                <label className="postTitles">
                    Title:
                </label>
                <input onChange={(event)=>{setTitle(event.target.value)}}type='text' title="title" value = {title} required/>
                <label className="postTitles">
                    Description:
                </label>
                <input id="descriptionID" onChange={(event)=>{setDescription(event.target.value)}}  type='text' description='description' value = {description} required/>
                <label className="postTitles">
                    Location:
                </label>
                <input className="postTitles" onChange={(event)=>{setLocation(event.target.value)}}type="text" location='location' value = {location}/>
                <label className="postTitles">
                Price:
                </label>
                <input className="postTitles" onChange={(event)=>{setPrice(event.target.value)}}type='text' price='price' value = {price} required/>
                <div className="postTitles" > 
                <input id="checkbox" className="postTitles" onChange={(event)=>{setWillDeliver({handleCheckBox})}}type='checkbox'  name='delivery' value={willDeliver}/>
                Will Deliver
                </div> 
                <button className="submitPost" type="submit">Submit Post</button>
            </form>
        </div>
    )
}
export default AddPosts