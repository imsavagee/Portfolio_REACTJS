import React from 'react'
import styles from '../styles/Header.module.css'
import logo from '../img/HeaderLogo/logo.png'
import { Link } from 'react-scroll'

function Header() {
  return (
    <div className={styles.mainDiv}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <ul className={styles.ul}>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className={styles.link}>Home</Link>
        <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-100} duration={500} className={styles.link}>About</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className={styles.link}>Skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-80} duration={500} className={styles.link}>Project</Link>

      </ul>
      <button className={styles.btn} onClick={() => document.getElementById("contactPage").scrollIntoView({ behavior: "smooth" })}
      >Contact Me</button>

    </div>
  )
}

export default Header