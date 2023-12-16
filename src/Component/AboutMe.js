import React from 'react'
import style from '../styles/AboutMe.module.css'

function AboutMe() {
    return (
        <>
        <div className={style.aboutemeDiv} id="aboutMe">
            <h1 className={style.h1}>About Me</h1>
            <p className={style.aboutMepara}>
                I'm a passionate and<span className={style.span}> results-driven Java Full Stack Developer</span> with a deep love for building innovative web applications. With
                <span className={style.span}> 2 years of experience</span> in the software development field, I've had the privilege of working on a diverse range of projects and technologies. My goal is to create
                <span className={style.span}> efficient, user-friendly, and robust software solutions</span> that not only meet the needs of clients but also push the boundaries of what's possible
            </p>
        </div>    
        </>
    )
}

export default AboutMe