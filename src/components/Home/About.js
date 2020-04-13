import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="About" subtitle="Us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="" />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the difference</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi necessitatibus ea earum!
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi necessitatibus ea earum!
                    </p>
                    <button type="button" className="btn-primary">
                        read more
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
