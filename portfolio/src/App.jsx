import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>react router</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>This is my Footer</footer>
    </>
  );
}

export default App;
