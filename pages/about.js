/* eslint-disable react/no-unescaped-entities */
import Head from "next/dist/shared/lib/head";
import Image from "next/dist/client/image";
import styles from '../styles/About.module.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

function About(props) {
  return (
    <div className={styles.aboutPage} id="aboutPageTop">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="About| JY" />
        <title>About | JY</title>
      </Head>
      <Nav />
      <div className={styles.aboutPageContent}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImgContainer}>
            <div className={styles.aboutImg}>
              <Image
                src="/avatar2.webp"
                priority
                alt=""
                width="738"
                height="826"
                placeholder="blur"
                blurDataURL="/avatar.webp"
              />
            </div>

            <p className={styles.aboutImgName}>Julie Yudowitch</p>
          </div>

          <div className={styles.infoContainer}>
            <p className={styles.info}>
              I studied Web Development on CodeCademy and completed thier
              Front-end program in Nov 2021.
            </p>
            <ul className={styles.infoUL}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Next</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>JSON</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>APIs</li>
              <li>Responsive Web Design</li>
              <li>Bootstrap</li>
              <li>Internationalization using i18next</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
