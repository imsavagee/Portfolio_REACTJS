import React from 'react'
import styles from '../styles/Main.module.css'
import proImg from '../img/ProfesstionalBoy.png'

function Main() {
  return (
    <>
      <div className={styles.mainCont} id='home'>

        <div className={styles.left}>
          <p className={styles.hello}>HELLO,</p>
          <p className={styles.intro}>I'm <span className={styles.myName}>SHAVEZ</span></p>
          <p className={styles.intro}>Java Full Stack Developer</p>
          <p className={styles.description}>A professional Java Full Stack Developer,Front-End Developer using ReactJS,i am SKilled And passionate web desiger with experinde and got to go with someijdf </p>
          <button className={styles.mainLeftBtn} onClick={()=>document.getElementById("contactPage").scrollIntoView({behavior:"smooth"})}>👜 Hire Me</button>
        </div>

        <div className={styles.right}>
          <img className={styles.selfImg} src={proImg} alt="" />
        </div>

      </div>
    </>
  )
}

export default Main