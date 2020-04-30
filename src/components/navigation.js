import React, { useState, useEffect }from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

const navigation = () => {

  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setSrollPosition(position);
      console.log(scrollPosition)
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <nav role="navigation">
      <ul className={scrollPosition === 0 ? styles.navigation : styles.navigationStiky}>
        <div className={styles.navLogo}>
          <li className={styles.navigationItem}>
            <img src={require('./../animation/logo.svg')} className={scrollPosition === 0 ? styles.imageLogo : styles.imageLogoStiky} draggable="false" width="320px" height="auto"/>
          </li>
          <li className={styles.navigationItem}>
            <Link className={scrollPosition === 0 ? styles.linkSite : styles.linkSiteStiky} to="/">Our Website</Link>
          </li>
        </div>
        <div className={styles.navBtn}>
        <li className={styles.navigationItem}>
            <Link className={scrollPosition === 0 ? styles.linkTryDemo : styles.linkTryDemoStiky} to="/">LOGIN</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link className={scrollPosition === 0 ? styles.linkSignUp : styles.linkSignUpStiky} to="/blog/">TRY DEMO</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}
export default navigation;
