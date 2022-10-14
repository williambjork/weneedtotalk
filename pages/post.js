import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Router, { useRouter} from "next/router"
import { useEffect, useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

function Post() {

    //From state
    const [post, setPost] = useState({ description: "" })
    const [user, loading] = useAuthState(auth)
    const route = useRouter();

    //Submit post
    const submitPost = async (e) => {
        e.preventDefault();
        
        //Create new post
        const collectionRef = collection(db, 'posts') 
        await addDoc(collectionRef, {
            ...post, 
            timestamp: serverTimestamp(),
            user: user.uid,
            avatar: user.photoURL,
            userName: user.displayName
        });
        setPost({description: ""});
        return route.push('/')

    }

  return (
    <div className="my-20 p-12 shadow-lg max-w-md mx-auto rounded-lg">
        <form onSubmit={submitPost}>
          
            <h1 className="text-2xl font-bold">Create New Post</h1>
            <div className="py-2">
               
                <h3 className="text-lg py-2 ">Description</h3>
                <textarea 
                value={post.description} 
                onChange={(e) => setPost({...post, description: e.target.value})}
                className="bg-gray-800 p-2 rounded-lg text-sm h-48 w-full text-white"></textarea>
                <p className={`text-cyan-600 text-sm ${post.description.length > 300 ? 'text-red-600' : ""}`}>{post.description.length}/300</p>
            </div>
            <button
            type="submit"
            
            className="w-full bg-cyan-600 text-white fron-medium p-2 my-2 rounded-lg text-sm">Submit</button>
        </form>
    </div>
  )
}

export default Post