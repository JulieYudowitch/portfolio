import styles from "./Nav.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/dist/client/image";
import { AiOutlineMenu } from "react-icons/ai";
import React from 'react';

function Nav(props) {  

 
  const [showMobileNav, setShowMobileNav] = useState(false);
  let menuref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (
        showMobileNav &&
        menuref.current &&
        !menuref.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [showMobileNav]);

  function handleMenuClick() {
    if (!showMobileNav) {
      setShowMobileNav(true);
    } else {
      setShowMobileNav(false);
    }
  }
  return (
    <nav className={styles.navbarcont}>
      <div className={styles.navbar}>
        <div className={styles.leftside}>
          <Link href="/" passHref>
            <div className={styles.logo}>
              <Image src="/logo.webp" alt="" width="630" height="630" />
            </div>
          </Link>
        </div>

        <div className={styles.rightsidecont}>
          <div className={styles.rightside}>
            <div
              className={styles.navbarlinks}
              onClick={handleMenuClick}
              id={showMobileNav ? styles.hidden : ""}
            >
              <div>
                <Link
                  href="/"
                  ref={menuref}
                  passHref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>Home</p>
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  ref={menuref}
                  passHref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>About</p>
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  ref={menuref}
                  passHref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>contact</p>
                </Link>
              </div>
            </div>

            <div
              className={styles.mobilemenuicon}
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <AiOutlineMenu color="#411e21" />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
