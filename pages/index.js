/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

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

      <Banner />
      <div className={styles.gradientsection}>
        <div className={styles.homeGrid}>
          <div className={styles.homeImgContainer}>
            <div>
              <Image
                src="/avatar.webp"
                alt=""
                width="738"
                height="826"
                placeholder="blur"
                blurDataURL="/avatar.webp"
                className={styles.homeImg}
              />
            </div>
            <p className={styles.name}>Front-End Developer | Next.js</p>
          </div>
          <div className={styles.homeIntroCard}>
            <p className={styles.homeIntro}>
              Hi I'm Julie Yudowitch and I build responsive webapps using
              Next.js and React. I studied Web Development on CodeCademy and
              completed thier Front-end path in Nov 2021. I enjoy solving
              problems whether it requires a little out of the box thinking,
              something much more practical, or maybe a mixture of both!
            </p>
          </div>
        </div>
        <div className={styles.tech}>
          <div className={styles.nextImgContainer}>
            <div className={styles.nextImg}>
              <Image
                src="/next.png"
                alt=""
                width="500"
                height="500"
                placeholder="blur"
                blurDataURL="/next.png"
              />
            </div>
          </div>

          <div className={styles.reactImgContainer}>
            <div className={styles.reactImg}>
              <Image
                src="/react.png"
                alt=""
                width="522"
                height="343"
                placeholder="blur"
                blurDataURL="/react.png"
              />
            </div>
          </div>

          <div className={styles.htmlImgContainer}>
            <div className={styles.htmlImg}>
              <Image
                src="/html.png"
                alt=""
                width="331"
                height="433"
                placeholder="blur"
                blurDataURL="/html.png"
              />
            </div>
          </div>

          <div className={styles.cssImgContainer}>
            <div className={styles.cssImg}>
              <Image
                src="/css.png"
                alt=""
                width="315"
                height="430"
                placeholder="blur"
                blurDataURL="/css.png"
              />
            </div>
          </div>

          <div className={styles.jsImgContainer}>
            <div className={styles.jsImg}>
              <Image
                src="/js.jpg"
                alt=""
                width="449"
                height="446"
                placeholder="blur"
                blurDataURL="/js.jpg"
              />
            </div>
          </div>

          <div className={styles.gitImgContainer}>
            <div className={styles.gitImg}>
              <Image
                src="/git.png"
                alt=""
                width="910"
                height="380"
                placeholder="blur"
                blurDataURL="/git.png"
              />
            </div>
          </div>

          <div className={styles.nodeImgContainer}>
            <div className={styles.nodeImg}>
              <Image
                src="/node.png"
                alt=""
                width="800"
                height="600"
                placeholder="blur"
                blurDataURL="/node.png"
              />
            </div>
          </div>
          <div className={styles.pythonImgContainer}>
            <div className={styles.pythonImg}>
              <Image
                src="/python.webp"
                alt=""
                width="449"
                height="502"
                placeholder="blur"
                blurDataURL="/python.webp"
              />
            </div>
          </div>
        </div>
      </div>
      <h2>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.project}>
          <a
            href="https://internationalbusiness.netlify.app"
            target="blank"
            rel="noopener noreferrer"
          >
            <div className={styles.projectImg}>
              <Image
                src="/intlbusiness.webp"
                alt=""
                width="886"
                height="889"
                placeholder="blur"
                blurDataURL="/intlbusiness.webp"
              />
            </div>
          </a>

          <a
            href="https://internationalbusiness.netlify.app"
            target="blank"
            rel="noopener noreferrer"
          >
            <p className={styles.projectDescript}>
              An internationalized app using i18next to deliver content in both
              English and Spanish.
            </p>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://juliesgardenblog.vercel.app"
            target="blank"
            rel="noopener noreferrer"
          >
            <div className={styles.projectImg}>
              <Image
                src="/gardenblog.webp"
                alt=""
                width="1246"
                height="873"
                placeholder="blur"
                blurDataURL="/gardenblog.webp"
              />
            </div>
          </a>

          <a
            href="https://juliesgardenblog.vercel.app"
            target="blank"
            rel="noopener noreferrer"
          >
            <p className={styles.projectDescript}>
              Built with Next.js, NextAuth, and Firebase
            </p>
          </a>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form
          action="https://formsubmit.co/julieyudo@gmail.com"
          method="POST"
          className={styles.form}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className={styles.field}
          ></input>
          <br></br>
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            className={styles.messageField}
          ></textarea>
          <br></br>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            required
            className={styles.field}
          ></input>
          <br></br>
          <input
            type="hidden"
            name="_next"
            value="https://julieyudowitch.com/thank-you"
          ></input>
          <button type="submit" className={styles.send}>
            Message Me
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
