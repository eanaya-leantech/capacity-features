import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import ParticlesConfig from '../animation/particles.js'
import styles from './footer.module.css'
import Typewriter from 'typewriter-effect'

//as hero
export default ({ data }) => (
  <div className={styles.footer}>
    <Particles
        canvasClassName={styles.particles}
        params={ParticlesConfig}
      />
  </div>
)