import { Outlet } from "react-router";
import "./App.css";
import Footer from "./common/Footer/footer";

function App() {
  return (
    <>
      <header>
        <h1>Andrews Porftfolio website</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
