import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Message from '../components/Message'
import { useState, useEffect } from 'react'
import { db } from "../utils/firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"

const Home: NextPage = () => {

  //create state with all posts
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, 'posts');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    });

    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='my-12 text-lg flex-col justify-center items-center'>
        <h2 >See what other people are saying</h2>
        {allPosts.map((post) => 
        <Message {...post} key={post.id}>

        </Message>
        )}
        
      </div>

     
    </div>
  )
}

export default Home
