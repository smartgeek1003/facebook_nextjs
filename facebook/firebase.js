// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore,addDoc,doc,setDoc,serverTimestamp, getDocs } from "firebase/firestore";
import {getStorage,getDownloadURL} from "firebase/storage"
import firebase from 'firebase/app';
import {ref,uploadBytes} from "firebase/storage"
import {v4} from "uuid"
// import {v4}  from "uuid"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCijYEVwIdyjPrqX5J78Fq9f3l99iyKhg8",
  authDomain: "facebook-clone-d36ce.firebaseapp.com",
  projectId: "facebook-clone-d36ce",
  storageBucket: "facebook-clone-d36ce.appspot.com",
  messagingSenderId: "504847121677",
  appId: "1:504847121677:web:1765debf446d1551efc444"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)
const postsRef=collection(database, "post")
const storage=getStorage(app)
export const addPost=(post,postImage)=>{
    addDoc(postsRef,{...post,timeStamp:serverTimestamp()}).then(postDoc=>{
        if(postImage){
            const imageRef=ref(storage,`images/${postImage.name+v4()}`)

            uploadBytes(imageRef,postImage).then((image)=>{
                
                let fieldToUpdate=doc(database,"post",postDoc.id);
                console.log("Image uploaded successfully")
                getDownloadURL(ref(storage,image.metadata.fullPath)).then((imageUrl)=>{  
                    console.log(imageUrl)                  
                    setDoc(fieldToUpdate,{postImage:imageUrl},{merge:true})
                })
            }).catch(err=>console.log(err))
        }
    })
    
}

export const getPosts=async (setPosts)=>{
    await getDocs(postsRef).then(response=>{
        setPosts(response.docs.map((data)=>{
            return {...data.data(),id:data.id}
        }))
    })
}