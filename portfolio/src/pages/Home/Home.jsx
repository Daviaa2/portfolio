import { Link } from "react-router"

function Home() {
  return (
    <>
      <p>This is the Home Page</p>
      <Link to='/'>Home</Link>
      <Link to='BusinessAnalyst'>Business Analyst</Link>
    </>
  )
}

export default Home