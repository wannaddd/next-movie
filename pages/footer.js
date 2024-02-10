import React from 'react'
import styles from '../styles/Home.module.css'

const Footer=()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.titlefooter}>PcariMovie</p>
                    <p className={styles.footerText}>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <p><b>Join Newsletter</b></p>
                    <div className={styles.mailContainer}>
                        <input type="text" placeholder="Insert your mail here" className={styles.mail} />
                        <button className={styles.submitButton}>
                        <span>&rarr;</span>
                        </button>
                    </div>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li className={styles.boldLink}><a href="#">Product</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV Show</a></li>
                        <li><a href="#">Videos</a></li>
                    </ul>
                    <ul>
                        <li className={styles.boldLink}><a href="#">Media Group</a></li>
                        <li><a href="#">Nice Studio</a></li>
                        <li><a href="#">Nice News</a></li>
                        <li><a href="#">Nice TV</a></li>
                    </ul>
                    <ul>
                        <li className={styles.boldLink}><a href="#">Sitemap</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                    <ul>
                        <li><img src="marker.png" alt="Marker Icon"  className={styles.iconImage} />8819 Ohion St. South Gate, California 90280</li>
                        <li><img src="mail.png" alt="Mail Icon"  className={styles.iconImage} />ourstudio@hello.com</li>
                        <li><img src="phone.png" alt="Phone Icon"  className={styles.iconImage} />+271 386-647-3637</li>
                    </ul>

                </div>
                    
            </div>
        </footer>
    )
}

export default Footer;