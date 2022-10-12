import Link from "next/link"


function Nav() {
  return (
    <>
        <nav>
            <Link href="/">
                <button>Click</button>
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