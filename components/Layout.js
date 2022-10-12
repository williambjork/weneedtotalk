import Nav from "./Nav"

function layout({children}) {
  return (
    <div>
        <Nav/>
        <main>{children}</main>
    </div>
  )
}

export default layout