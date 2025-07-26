import styles from "./Card.module.css";
import { Link } from "react-router";

const Card = ({ to, title, description, imageText }) => {
  return (
    <Link to={to} className={styles.cardLink}>
      <div className={styles.container}>
        <div className={styles.image}>
          <h1>{imageText || "Card Image"}</h1>
        </div>
        <div className={styles.title}>
          <h1>{title || "Card Title"}</h1>
        </div>
        <div className={styles.content}>
          <h1>{description || "Card Description"}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
