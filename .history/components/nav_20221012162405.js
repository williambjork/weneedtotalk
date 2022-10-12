import Link from "next/link"


function Nav() {
  return (
    
        <nav className="flex justify-between items-ccenter py-10">
            <Link href="/">
                <button className="text-lg font-medium">Click</button>
            </Link>
        

        <ul className="flex items-center gap-10">
            <Link href={"/auth/login"}>
                <a className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
                    Join Now
                </a>
            </Link>

        </ul>
        </nav>
    
  )
}

export default Nav