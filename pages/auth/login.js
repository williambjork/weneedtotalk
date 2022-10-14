import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from "../../utils/firebase"
import { Router } from 'next/router';

function login() {

  //Sign in with google
const googleProvider = new GoogleAuthProvider();
const GoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    Router.push("/")
  } catch (error) {

  }
}

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
