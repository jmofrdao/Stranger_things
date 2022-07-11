import './NewMessage.css'
import React, {useState} from 'react'
import { createMessage } from '../api'




function NewMessage ({myInfo, setMyInfo, post, _id}){
const [typedMessage, setTypedMessage] = useState('')

const handleSubmit = async (event) => {
    event.preventDefault()
    const postID = post._id
    const token = localStorage.getItem('token')
    const myMessage = await createMessage(token, postID, typedMessage)
    console.log(myMessage)
    
}

return  (
    <aside>
        <form onSubmit={handleSubmit}>
        <input id="messageUserBox" onChange={(event)=>{setTypedMessage(event.target.value)}}type='text' value = {typedMessage} required/>
        <button type='submit'>SEND MESSAGE</button>
        </form>
    </aside>

)
}

export default NewMessage