/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

export default function Home(props) {
  return (
    <div className={styles.homePage} id="pageTop">
      <Head>
        <meta property="og:title" content="Julie Yudowitch Web Developer" />
        <meta property="og:image" content="./ssi.webp" />
        <meta
          property="og:description"
          content="Front-end Developer | Next.js"
        />
        <meta property="og:url" content="https://julieyudowitch.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="681" />
        <meta property="og:image:alt" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="./ssi.webp" />
        <meta name="twitter:site" content="@YudowitchJulie" />
        <meta name="twitter:title" content="Julie Yudowitch Web Developer" />
        <meta
          name="twitter:description"
          content="Front-end Developer | Next.js"
        />
        <meta name="twitter:image" content="./ssi.webp" />
        <meta name="description" content="Front-end Developer | Next.js" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <title>Julie Yudowitch Web Developer</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z1PTGJM5PZ"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Z1PTGJM5PZ');
        `}
      </Script>
      <Nav />
      <Banner />
      <div className={styles.homeGrid}>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/avatar.webp"
              alt=""
              width="738"
              height="826"
              placeholder="blur"
              blurDataURL="/avatar.webp"
            />
          </div>
          <p>Julie Yudowitch</p>
          <p>Front-End Developer | Next.js</p>
        </div>
        <div className={styles.homeIntroCard}>
          <p className={styles.homeIntro}>
            Hi I'm Julie Yudowitch, a Front-end JavaScript Developer. I started
            out working with React then began using Next.js when I learned about
            it's SEO benefits. I enjoy gardening, DIY/fixing stuff, and solving
            problems.
          </p>
        </div>
        <div className={styles.projects}>
          <h2>Projects</h2>
          <a
            href="https://internationalbusiness.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            <div className={styles.projectImg}>
              <Image
                src="/project.webp"
                alt=""
                width="1447"
                height="860"
                placeholder="blur"
                blurDataURL="/project.webp"
              />
            </div>
          </a>

          <a
            href="https://internationalbusiness.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            <p>
              An internationalized website using i18next to deliver content in
              both English and Spanish.
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
