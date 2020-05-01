import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import ParticlesConfig from '../../animation/particles.js'
import styles from './footer.module.css'
import Typewriter from 'typewriter-effect'

//as hero
export default ({ data }) => (
  <div className={styles.footer}>
    <Particles
        canvasClassName={styles.particles}
        params={ParticlesConfig}
      />
      <div className={styles.containerFooter}>
        <div>
          <p className={styles.tf} style={{color: 'white' }}>
          Edge Logistics
          </p>
          <p className={styles.df} style={{color: 'white'}}>
          333 N Michigan Ave Ste. 1200, Chicago, IL 60601
          </p>
          <p className={styles.df} style={{color: 'white'}}>
          (312) 319-4766
          </p>
        </div>
        <div>
          <img className={styles.imgFooter} src={require('../../animation/footerlogos.png')} draggable={false}/>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
        <p style={{color: 'white'}}>© 2020 Capacity from Edge Logistics v.1.0.0</p>
        <p style={{color: 'white'}}>Chicago | Detroit | Los Angeles | New York</p>
      </div>
  </div>
)