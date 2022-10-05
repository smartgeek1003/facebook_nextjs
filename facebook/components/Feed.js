import React from "react"
import  Stories from "./Stories"
import InputBox from "./InputBox"
import Posts from "./Posts"
function Feed(){
    return(
    <div className="flex-grow h-screen xl:ml-52  pt-6 mr-4 xl:mr-52 overflow-y-auto scrollbar-hide">
    <Stories />
    <InputBox />
    <Posts />
    </div>)
}

export default Feed;