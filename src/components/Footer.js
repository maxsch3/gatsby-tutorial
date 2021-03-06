import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import social from "../constants/social-links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((item, index) => {
                    return (
                        <AniLink key={index} to={item.path} fade>
                            {item.text}
                        </AniLink>
                    )
                })}
                <div className={styles.icons}>
                    {social.map((item, index) => {
                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
                <div className={styles.copyright}>
                    copyright &copy; backroads travel company{" "}
                    {new Date().getFullYear()} all rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
