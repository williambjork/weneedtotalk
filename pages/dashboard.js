import {auth, db} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Message from "../components/Message"
import {BsTrash2Fill } from "react-icons/bs"
import {AiFillEdit } from "react-icons/ai"
import { collection, where, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';



function dashboard() {

    const route = useRouter();
    const [user, loading] = useAuthState(auth);
    const [posts, setPosts] = useState([]);


    //Get user data
    const getData = async () => {
      if (loading) return;
      if (!user) return route.push("/auth/login");
  
      const collectionRef = collection(db, "posts");
      const q = query(collectionRef, where("user", "==", user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
        return unsubscribe;
    };

    useEffect(() => {
        getData();
    }, [user, loading]);

    //Delet post
    const deletePost = async (id) => {
      const docRef = doc(db, 'posts', id)
      await deleteDoc(docRef);
    }

  return (
    
    <div>
        <h1>Your posts</h1>
        <div>{posts.map(post => {

          return (
          <Message {...post} key={post.id}>
            <div className='flex gap-4'>

              <button
              onClick={() => deletePost(post.id)} 
              className='text-pink-500 text-sm flex items-center justify-center gap-2 py-2'> 
              <BsTrash2Fill /> 
              Delete </button>

              <button className='text-cyan-500 text-sm flex items-center justify-center gap-2 py-2'> 
              <AiFillEdit /> 
              Edit </button>
            </div>
          </Message>
          );

        })}</div>
        <button className="font-medium  text-white bg-gray-500 py-2 px-4" onClick={() => auth.signOut()}>Sign out</button>
    </div>
    
  )
}

export default dashboard