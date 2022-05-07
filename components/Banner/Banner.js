import styles from "./Banner.module.css";
import Image from "next/dist/client/image";

function Banner() {
  return (
    <header>
      <div className={styles.banner}>
        <div className={styles.bannerImg}>
          <Image src="/banner.webp" alt="" priority width="2377" height="939" />
        </div>
        <div className={styles.homeTitleWrapper}>
          <p className={styles.flexSpacer}>{""}</p>
          <h1 className={styles.homeTitle}>
            JULIE YUDOWITCH<br></br>
            <span className={styles.homeTitleDescript}>WEB DEVELOPER | NEXT.JS</span>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
