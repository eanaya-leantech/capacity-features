import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import ParticlesConfig from '../../animation/particles.js'
import styles from './hot-offer.module.css'
import Typewriter from 'typewriter-effect'

//as hero
export default ({ data }) => (
  <div className={styles.hotOffer}>
    <div className={styles.fire} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%'}}>
      <img src={require('../../animation/fire.svg')} className={styles.imageFire} draggable={false}/>
      <p className={styles.now} style={{color: 'white', fontSize: 18, fontWeight: '500'}}>HOT NOW! </p>
    </div>
    <div style={{display: 'flex',  alignItems: 'center', flex: 1, paddingLeft: 20, paddingRight: 20, height: '100%', overflowY: 'scroll', whiteSpace: 'nowrap'}}>
      
      <div style={{display: 'flex', flexDirection: 'row', height: '100%', justifyContent: 'center', alignItems: 'center', marginRight: 25}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{color: 'white', fontSize: 21}}>Chicago, IL</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: -10, marginLeft: 6}}>
            <img src={require('../../animation/arrow-right.svg')} className={styles.arrow} draggable={false}/>
            <span style={{color: 'white', fontSize: 12, marginTop: 5}}>Houston, TX</span>
          </div>
        </div>
        <div style={{fontSize: 21, fontWeight: '700', marginLeft: 20, color: '#CDDC39'}}>$ 1,350 USD</div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', height: '100%', justifyContent: 'center', alignItems: 'center', marginRight: 25}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{color: 'white', fontSize: 21}}>Chicago, IL</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: -10, marginLeft: 6}}>
            <img src={require('../../animation/arrow-right.svg')} className={styles.arrow} draggable={false}/>
            <span style={{color: 'white', fontSize: 12, marginTop: 5}}>Houston, TX</span>
          </div>
        </div>
        <div style={{fontSize: 21, fontWeight: '700', marginLeft: 20, color: '#CDDC39'}}>$ 1,350 USD</div>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', height: '100%', justifyContent: 'center', alignItems: 'center', marginRight: 25}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{color: 'white', fontSize: 21}}>Chicago, IL</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: -10, marginLeft: 6}}>
            <img src={require('../../animation/arrow-right.svg')} className={styles.arrow} draggable={false}/>
            <span style={{color: 'white', fontSize: 12, marginTop: 5}}>Houston, TX</span>
          </div>
        </div>
        <div style={{fontSize: 21, fontWeight: '700', marginLeft: 20, color: '#CDDC39'}}>$ 1,350 USD</div>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', height: '100%', justifyContent: 'center', alignItems: 'center', marginRight: 25}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{color: 'white', fontSize: 21}}>Chicago, IL</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: -10, marginLeft: 6}}>
            <img src={require('../../animation/arrow-right.svg')} className={styles.arrow} draggable={false}/>
            <span style={{color: 'white', fontSize: 12, marginTop: 5}}>Houston, TX</span>
          </div>
        </div>
        <div style={{fontSize: 21, fontWeight: '700', marginLeft: 20, color: '#CDDC39'}}>$ 1,350 USD</div>
      </div>

    </div>
    <div className={styles.fire2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%'}}>

    </div>
  </div>
)