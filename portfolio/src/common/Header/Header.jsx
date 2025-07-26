import styles from "./Header.module.css";
import backGroundImage from "../../assets/images/background.jpg";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <img
          src={backGroundImage}
          alt="Background"
          className={styles.titleImage}
        />
        <div className={styles.title}>
          <h1>BUSINESS ANALYST | FULL STACK DEVELOPER</h1>
          <h1>PORTFOLIO</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
