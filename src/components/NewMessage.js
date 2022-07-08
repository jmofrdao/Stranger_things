import './NewMessage.css'
import React from 'react'



function newMessage (){
return  (
    <aside>
        <h1>Message User about this Post</h1>
        <form>
        <input type='text' message='message'  placeholder='Write message here'/>
        <button>SEND MESSAGE</button>
        </form>
    </aside>

)
}

export default newMessage