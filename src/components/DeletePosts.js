import './DeletePosts.css'
import react, {useEffect} from 'react'
import { removePost, fetchAllPosts } from '../api'




function DeletePosts ({post,  _id, posts, setPosts, filteredPosts, setFilteredPosts}) {

    const handleOnSubmit = async (event) => { 
        event.preventDefault()
        const token = localStorage.getItem('token')
        const postID = post._id
        await removePost(token, postID)
        const newPost = await fetchAllPosts()
        if(filteredPosts.length){
            const fineFilteredPost = filteredPosts.filter((element)=>{
                if(element._id === postID){
                    return false
                } else{
                    return true
                }
            })
            setFilteredPosts(fineFilteredPost)
            
        }
        setPosts(newPost)
    
    }   
 useEffect(()=> {

 }, [posts])
return (  
 <form onClick={handleOnSubmit} >   
<button type="submit">Delete</button>
</form> 
)
}

export default DeletePosts

