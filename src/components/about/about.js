import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import ParticlesConfig from '../../animation/particles.js'
import styles from './about.module.css'
import Typewriter from 'typewriter-effect'
import AnimatedNumber from "animated-number-react";

//as hero
export default ({ data }) => (
  <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>{data ? data.aboutTitle : 'What is Capacity?'}</h2>
            <div>{data ? <p>{data.aboutDescription}</p> : <p>
            CAPACITY is a freight-matching platform providing an easy, accessible way for Edge carriers to book and bid on loads, view shipments, process payments and much more. <br/><br/>
            With its simple, user friendly interface, CAPACITY speeds up carriers booking and bidding processes giving you
            the time to focus on your business.
            </p>}</div>
      </div>

      <div className={styles.containerCards} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, flexWrap: 'wrap'}}>
        
        <div className={styles.cardSmall}>
          <p style={{textAlign: 'center', fontSize: 28, fontWeight: 'bold', marginTop: 12, color: '#009688'}}>1,789</p>
          <p style={{fontWeight: '700', textAlign: 'center', marginTop: -30, fontSize: 12, paddingBottom: 10, color: '#009688'}}>ACTIVE USERS</p>
        </div>
       
        <div className={styles.cardSmall}>
          <p style={{textAlign: 'center', fontSize: 28, fontWeight: 'bold', marginTop: 12, color: '#7C4DFF'}}>1,789</p>
          <p style={{fontWeight: '700', textAlign: 'center', marginTop: -30, fontSize: 12, paddingBottom: 10, color: '#7C4DFF'}}>ACTIVE USERS</p>
        </div>

        <div className={styles.cardSmall}>
          <p style={{textAlign: 'center', fontSize: 28, fontWeight: 'bold', marginTop: 12, color: '#4CAF50'}}>1,789</p>
          <p style={{fontWeight: '700', textAlign: 'center', marginTop: -30, fontSize: 12, paddingBottom: 10, color: '#4CAF50'}}>ACTIVE USERS</p>
        </div>

        <div className={styles.cardSmall}>
          <p style={{textAlign: 'center', fontSize: 28, fontWeight: 'bold', marginTop: 12, color: '#FF4081'}}>1,789</p>
          <p style={{fontWeight: '700', textAlign: 'center', marginTop: -30, fontSize: 12, paddingBottom: 10, color:'#FF4081'}}>ACTIVE USERS</p>
        </div>
        
      </div>

  </div>
)