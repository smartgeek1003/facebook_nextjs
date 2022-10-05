import React from "react"

function HeaderIcon({Icon,active}){
    return (
        <div className="flex cursor-pointer items-center sm:h-14  md:px-10 md:hover:bg-gray-100 rounded-xl active:border-blue-500 active:border-b-2 group" >
            <Icon className={`h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto text-gray-500 ${active && 'text-blue-500'}`}/>
        </div>
    ) 
}

export default HeaderIcon;