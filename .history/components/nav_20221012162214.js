import Link from "next/link"


function Nav() {
  return (
    <>
        <nav className="flex justify-between items-ccenter py-10">
            <Link href="/">
                <button className="text-lg font-medium">Click</button>
            </Link>
        

        <ul>
            <Link href={"/auth/login"}>
                <a>Join Now</a>
            </Link>

        </ul>
        </nav>
    </>
  )
}

export default Nav