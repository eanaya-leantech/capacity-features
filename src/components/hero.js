import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import ParticlesConfig from '../animation/particles.js'
import styles from './hero.module.css'
import Typewriter from 'typewriter-effect'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroContainer}>

      <Particles
        canvasClassName={styles.particles}
        params={ParticlesConfig}
      />

      <div className={styles.heroDetails}>

        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(data.title)
              .start()
          }}
          options={{
            wrapperClassName: styles.InfoTitle
          }}
        />

        <Link className={styles.linkTryDemo} to="/">LOGIN</Link>
        <Link className={styles.linkSignUp} to="/">TRY DEMO</Link>
        <img src={require('../animation/iphone.png')} className={styles.heroImage} draggable={false}/>

      </div>

    </div>
  </div>
)


/* <Img
  className={styles.heroImage}
  alt={data.name}
  fluid={data.heroImage.fluid}
/> */
/* <h3 className={styles.heroHeadline}>{data.name}</h3>
<p className={styles.heroTitle}>{data.title}</p>
<p>{data.shortBio.shortBio}</p> */