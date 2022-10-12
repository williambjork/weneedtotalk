import Link from "next/link"


function Nav() {
  return (
    <>
        <nav className="flex justify-between items-ccenter py-10">
            <Link href="/">
                <button className="font-poppins text-lg font-medium">Click</button>
            </Link>
        </nav>

        <ul>
            <Link href={"/auth/login"}>
                <a>Join Now</a>
            </Link>

        </ul>
    </>
  )
}

export default Nav