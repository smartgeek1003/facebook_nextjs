import React,{useRef, useState} from "react"
import {useSession} from "next-auth/react"
import Image from "next/image"
import {
    VideoCameraIcon,
    CameraIcon,
    EmojiHappyIcon
} from "@heroicons/react/solid"
import {addPost} from "../firebase"
function InputBox(){
    const {data:session}=useSession()
    const sendPost=(e)=>{
        e.preventDefault();
        if(!inputRef.current.value) return;
        const post={
            message:inputRef.current.value,
            name:session.user.name,
            image:session.user.image,
            email:session.user.email,
        }
        
        addPost(post,filePicker.current.files[0]);
        console.log("post",post)
        removeImage()
        inputRef.current.value="";
    }
    const addImageToPost=(e)=>{
        const reader=new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload=(readerEvent)=>{
            setImageToPost(readerEvent.target.result)
        }
    }
    const removeImage=()=>{
        setImageToPost(null)
    }
    const inputRef=useRef(null)
    const filePicker=useRef(null)
    const [imageToPost,setImageToPost]=useState(null)
    return(
        <div className="bg-white p-2 rounded-2xl p-2 shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image src={session.user.image} className="rounded-full" width={40} height={40} layout="fixed" />
                <form className="flex flex-1">
                    <input type="text" ref={inputRef} placeholder={`What's on your mind, ${session.user.name}?`}
                    className="rounded-full h-12 bg-gray-100 px-5 outline-none"/>
                     <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>
            <div className="flex justify-between p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="text-red-500 h-7"/>
                    <p className='text-xs  sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div onClick={()=>filePicker.current.click()} className="inputIcon">
                    <CameraIcon className="text-green-400 h-7"/>
                    <p className='text-xs  sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={filePicker} type="file" hidden onChange={addImageToPost} />
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="text-yellow-300 h-7"/>
                    <p className='text-xs  sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;