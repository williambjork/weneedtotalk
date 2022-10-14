import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from "../../utils/firebase"
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

function login() {

  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  //Sign in with google
const googleProvider = new GoogleAuthProvider();
const GoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    route.push("/")
  } catch (error) {

  }
}

//If user logged in redirect to home
useEffect(() => {
  if(user){
    route.push("/")
  } else {
    console.log("login")
  }
}, [user]);

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
        <button onClick={GoogleLogin} className="rounded-lg flex align-middle gap-2 p-4 w-full text-white bg-gray-700">
        <FcGoogle className='text-2xl'/> Sign in with Google</button>
        
      </div>
    </div>
  );
}

export default login;
