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