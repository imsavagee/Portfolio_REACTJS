import React from 'react'
import styles from '../styles/Project.module.css'
import projectData from '../data/projectData'
function Project() {

    return (
        <div className={styles.ProjectOuterDiv} id='project'>
            <h1 className={styles.projectH1}>PROJECTS</h1>
            <div className={styles.flexDiv}>
                {projectData.map((item) => {
                    return (
                        <>
                        <a href={item.link} target='blank'>
                            <div className={styles.ProjectImgDiv} style={{ backgroundImage: `url(${item.src})` }}>
                                <div className={styles.flexInnerDiv}>
                                    <h3 className={styles.projectH1}>{item.name}</h3>
                                    <ul className={styles.ul}>
                                        <li className={styles.projectLi}>{item.tech1}</li>
                                        <li className={styles.projectLi}>{item.tech2}</li>
                                        <li className={styles.projectLi}>{item.tech3}</li>
                                        <li className={styles.projectLi}>{item.tech4} </li>
                                    </ul>
                                </div>
                            </div>
                            </a>
                        </>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Project