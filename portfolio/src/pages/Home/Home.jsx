import { Link } from "react-router";
import Header from "./Components/Header";
import Card from "../../common/Card/Card";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className={styles.projects}>
          <Card
            to="/BusinessAnalyst"
            title="Business Analyst"
            description="10 week Intership with Lean Canvas through Mission Ready"
            imageText="BA Projects"
          />
        </div>
      </main>
    </>
  );
}

export default Home;
