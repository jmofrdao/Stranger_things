const cohortName = '2206-FTB-ET-WEB-FT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`

export const fetchAllPosts = async () => {
    try {
        const response = await fetch(`${APIURL}/posts`);
        const result = await response.json();
        console.log("API index", result)
        if(result.error) throw result.error
        return result.data.posts
        
    } catch (error){
        console.error('Trouble fetching posts', error)
    }
}

export const registerPerson = async () => {
    const response = await
    fetch(`${APIURL}/users/login`,
    {
     method: "POST",
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({
         user: {
             username: registerUsername,
             password: registerPassword
         }
     })
    }
    )
}
//fetch my post function

//we need a POST function for when someone creates a post

//we need a POST function for when someone registers

//we need a delete function for when someone deletes a post. they can only delete their own posts and not posts belonging to other people

//we need a post function for when someone messages