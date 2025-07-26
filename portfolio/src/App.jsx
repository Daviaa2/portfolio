import { Outlet } from "react-router";
import "./App.css";
import Footer from "./common/Footer/footer";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
