import Link from "next/link";
import styles from '../styles/404.module.css';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function FourOhFour(props) {
  return (
    <div className={styles.fourOhFourPage}>
      <Nav />
      <div className={styles.fourOhFourPageContent}>
        <h1>404 | Not Found</h1>
        <Link href="/">
          <a>Return Home</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
