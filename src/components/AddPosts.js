import './AddPosts.css'
import React, { useState } from 'react'

const AddPosts = ({username}) => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('free')
    const [location,setLocation] = useState('On Request')
    const [willDeliver,setWillDeliver] = useState(false)
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     const token = localStorage.getItem("token")
    //     const addPost = {
    //         title: title,
    //         description: description,
    //         price: price,
    //         location: location,
    //         willDeliver: willDeliver,
    //     }
    //     const freshPost = await createNewPost(token, addPost)
    // }
        return (
        <div>
            <form>
                
                <label>
                    Title:
                </label>
                <input type='text' title="title" required/>
                <label>
                    Description:
                </label>
                <input type='text' description='description' required/>
                <label>
                    Location:
                </label>
                <input type="text" location='location'/>
                <label>
                Price:
                </label>
                <input type='text' price='price' required/>
                <input type='checkbox' id='delivery' name='delivery' value={willDeliver}/>
            </form>
        </div>
    )
}
export default AddPosts