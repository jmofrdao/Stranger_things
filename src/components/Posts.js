
import React, { useState, useEffect } from 'react'

const Posts = ({posts}) => {
   
    console.log("Posts",posts)
    {posts.map((post, index) => {
        return (
            <div onClick={(event) =>{
            setPosts(post)  
            }}>
             {post}
                
            </div>
        )
    
    
    })
}
  
}
export default Posts


// we need to map over posts