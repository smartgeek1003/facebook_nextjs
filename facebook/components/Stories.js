import React from "react"
import StoryCard from "./StoryCard"

const story=(name,src,profile)=>{
    return {
        name,
        src,
        profile
    }
}
const stories=[
    story("Sonny Saangha","https:links.papareact.com/zof","https:links.papareact.com/l4v"),
    story("Elon Musk","https:links.papareact.com/4zn","https:links.papareact.com/kxk"),
    story("Jeff Bezos","https:links.papareact.com/k2j","https:links.papareact.com/f0p"),
    story("Mark Zuckberg","https:links.papareact.com/xql","https:links.papareact.com/snf"),
    story("Bill Gates","https:links.papareact.com/4u4","https:links.papareact.com/zvy"),
]
function Stories(){
    return(
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story)=>(<StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />))}
        </div>
    )
}

export default Stories;