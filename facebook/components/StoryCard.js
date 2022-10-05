
import React from "react"
import Image from "next/image"
function StoryCard({name,src,profile}){
    return(
        <div className="hover:scale-95 transition ease-in-out hover:opacity-70 relative h-14 w-14 md:w-20 md:h-20 lg:w-36 lg:h-56 cursor-pointer overflow-x p-3">
            <Image src={profile} className="absolute opacity-0 lg:opacity-100 rounded-full z-40 top-10"
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
            />
            <Image className="object-cover filter brightness-75 rounded-full lg:rounded-3xl" src={src} layout="fill"/>
            <p className="hidden md:flex text-white left-3 absolute bottom-3     text-sm ">{name}</p>
        </div>
    )
}
export default StoryCard