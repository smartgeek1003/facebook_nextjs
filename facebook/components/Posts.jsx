import React, { useEffect, useState } from "react"
import { getPosts } from "../firebase"
import Post from "./Post"
function Posts(){
    const [posts,setPosts]=useState(null)
    useEffect(()=>{
        getPosts(setPosts)
    })
    return(
        <div className="scrollbar">
            {posts && posts.map(post=>(<Post
                key={post.id}
                name={post.name}
                email={post.email}
                message={post.message}
                timestamp={post.timestamp}
                image={post.image}
                postImage={post.postImage}
             />))}
        </div>
    )
}

export default Posts