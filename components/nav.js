import Link from "next/link"
import { auth } from "../utils/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from "next/image";


function Nav() {
const [user, loading] = useAuthState(auth);
console.log(user)

  return (
    
        <nav className="flex justify-between items-ccenter py-10">
            <Link href="/">
                <button className="text-lg font-medium p-3">We Need to Talk</button>
            </Link>
        

        <ul className="flex items-center gap-10">

            
            {!user && (
            <Link href={"/auth/login"}>
                <a className="py-2 mr-3 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
                    Join Now
                </a>
            </Link>
            )}

            {user && (
                <div className="flex items-center gap-6 mr-3">
                    <Link href="/post">
                        <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-mg text-small">Post</button>
                    </Link>
                    <Link href="/dashboard">
                        <Image
                         className="w-12 rounded-full cursor-pointer" 
                         src={user.photoURL}
                         width={45}
                         height={45} />
                    </Link>
                </div>
            )}
        </ul>
        </nav>
    
  )
}

export default Nav