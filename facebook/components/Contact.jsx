import Image from 'next/image'
import React from 'react'

function Contact({src,name}) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rouneded-xl">
        <img  className="rounded-full h-12 object-cover w-12" src={src}  layout="fixed" />
        <p>{name}</p>
        <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"/>
    </div>
  )
}

export default Contact