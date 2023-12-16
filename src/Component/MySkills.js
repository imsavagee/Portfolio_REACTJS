import React from 'react'
import style from '../styles/Skills.module.css'
import SkillsData from '../data/SkillData'

function MySkills() {
    return (
        <>
        <div id='skill' className={style.skill} >
            <h1 className={style.h1} >My Skills</h1>
            <p className={style.flexPara}>
                {
                    SkillsData.map((item)=>{
                        return(
                            <>
                                <img className={style.skillsImg} src={item.img} alt={item.alt} />

                            </>
                        )
                    })
                }
            </p>
            </div>
        </>
    )
}

export default MySkills