import React from 'react'
import FooterLogo from '../data/FooterData'
import style from '../styles/Footer.module.css'

function Footer() {
  return (
    <>
    <div className={style.text}>
        <h3>Connect with me on</h3>
    </div>
    <div className={style.logo}>
        {
            FooterLogo.map((item)=>{
                return(
                    <>
                    <a href={item.link} className={style.footAchor} target='blank'>
                    <img className={style.FootImg} src={item.logo} alt={item.alt}/>
                    </a>
                    </>
                )
            })
        }
        
    </div>
    <p className={style.text}> All right reserved Copyright</p>
    </>
  )
}

export default Footer