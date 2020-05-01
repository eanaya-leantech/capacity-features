import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import ParticlesConfig from '../../animation/particles.js'
import styles from './section-videos.module.css'
import Typewriter from 'typewriter-effect'
import Carousel from 'react-elastic-carousel'


//as hero
export default ({ data }) => (
  <div className={styles.section}>
    <Particles
        canvasClassName={styles.particless}
        params={ParticlesConfig}
      />

    <div>
    <div style={{width: '100%', position: 'absolute', textAlign: 'center', marginTop: '4%'}}>
        <h2 style={{color: 'white'}}>How to use platform</h2>
    </div>
    <Carousel itemsToShow={1} showArrows={false} style={{position: 'absolute', color: 'white', marginTop: '8%'}}>
        <div style={{width: '90%', height: 400, maxWidth: 700, marginTop: '5%'}}>
            <video controls width="100%" height="100%" src={'https://edge-assets-container.s3.us-east-2.amazonaws.com/Landing+Page/How+to/how_to_bid_on+load.mp4'}></video>
        </div>
        <div style={{width: '90%', height: 400, maxWidth: 700, marginTop: '5%'}}>
            <video controls width="100%" height="100%" src={'https://edge-assets-container.s3.us-east-2.amazonaws.com/Landing+Page/How+to/how_to_book_load.mp4'}></video>
        </div>
        <div style={{width: '90%', height: 400, maxWidth: 700, marginTop: '5%'}}>
            <video controls width="100%" height="100%" src={'https://edge-assets-container.s3.us-east-2.amazonaws.com/Landing+Page/How+to/how_to_preferred+lane.mp4'}></video>
        </div>
        <div style={{width: '90%', height: 400, maxWidth: 700, marginTop: '5%'}}>
            <video controls width="100%" height="100%" src={'https://edge-assets-container.s3.us-east-2.amazonaws.com/Landing+Page/How+to/how_to_see_multiple+drops.mp4'}></video>
        </div>
    </Carousel>
    </div>
  </div>
)