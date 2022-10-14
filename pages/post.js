import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter} from "next/router"
import { useEffect, useState } from "react"

function Post() {
  return (
    <div className="my-20 p-12 shadow-lg max-w-md mx-auto rounded-lg">
        <form>
            <h1 className="text-2xl font-bold">Create New Post</h1>
            <div className="py-2">
                <h3 className="text-lg py-2 font-medium">Description</h3>
                <textarea className="bg-gray-800 p-2 rounded-lg text-sm h-48 w-full text-white"></textarea>
                <p className="">0/300</p>
            </div>
            <button className="w-full bg-cyan-600 text-white fron-medium p-2 my-2 rounded-lg text-sm">Submit</button>
        </form>
    </div>
  )
}

export default Post