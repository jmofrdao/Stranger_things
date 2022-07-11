import "./Search.css";
import React, { useState } from "react";

function Search({ post, posts, setPosts, setFilteredPosts }) {
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    if (post.description.includes(text) || post.title.includes(text)) {
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
    {
      filteredPosts.length
        ? setFilteredPosts(filteredPosts)
        : setFilteredPosts([]);
    }

}
return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Seach posts..."
      value={searchTerm}
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    ></input>
    <button type="submit">Search</button>
  </form>

);
}

export default Search;
