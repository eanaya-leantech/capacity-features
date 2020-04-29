import React from 'react'
import Img from 'gatsby-image'
import Particles from 'react-particles-js'
import ParticlesConfig from '../animation/particles.js'
import styles from './hero.module.css'
import Typewriter from 'typewriter-effect'

export default ({ data }) => (
  <div className={styles.hero}>
    <div
      className={styles.heroContainer}
      // alt={data.name}
      // fluid={data.heroImage.fluid}
    >
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
      <a style={{textDecoration: 'none', borderRadius: 25, borderWidth: 3, borderStyle: 'solid', fontSize: 13, paddingTop: 7, paddingBottom: 7, paddingLeft: 30, paddingRight: 30, fontWeight: 'bold', cursor: 'pointer', marginLeft: '10%'}}>TRY DEMO</a>
      <a style={{textDecoration: 'none', borderRadius: 25, borderWidth: 3, borderStyle: 'solid', fontSize: 13, paddingTop: 7, paddingBottom: 7, paddingLeft: 38, paddingRight: 38, fontWeight: 'bold', backgroundColor: 'red', borderColor: 'red', cursor: 'pointer', marginLeft: '2%'}}>SIGN UP</a>
      <img src={require('../animation/iphone.png')} className={styles.heroImage}/>
      {/* <Img
        className={styles.heroImage}
        alt={data.name}
        fluid={data.heroImage.fluid}
      /> */}
      {/* <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p> */}
    </div>

    </div>
  </div>
)
