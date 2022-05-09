import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function Contact(props) {
  
  return (
    <div className={styles.contactPage}>
      <Head>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Contact | JY" />
        <title>Contact | JY</title>
      </Head>
      
      <Nav />
      <div className={styles.contactPageContent}>
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
            Send
          </button>
        </form>
        <div className={styles.contactInfo}>
          <p>Julie Yudowitch</p>
          <p>Julieyudo@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
