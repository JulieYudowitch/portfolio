import styles from "./Banner.module.css";
import Image from "next/dist/client/image";

function Banner() {
  return (
    <header>         
          <h1 className={styles.homeTitle}>
            JULIE YUDOWITCH<br></br>
            <span className={styles.homeTitleDescript}>
              WEB DEVELOPER | NEXT.JS
            </span>
          </h1>
    </header>
  );
}

export default Banner;
