import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import ParticlesConfig from '../animation/particles.js'
import styles from './about.module.css'
import Typewriter from 'typewriter-effect'

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
  </div>
)