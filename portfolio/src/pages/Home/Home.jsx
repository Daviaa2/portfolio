import { Link } from "react-router";
import Header from "../../common/Header/Header";

function Home() {
  return (
    <>
      <Header/>
      <p>This is the Home Page</p>
      <Link to="/">Home</Link>
      <Link to="BusinessAnalyst">Business Analyst</Link>
    </>
  );
}

export default Home;
