import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    author
                    description
                    data
                }
            }
        }
    `)
    console.log(siteMetadata)
    return (
        <div>
            <h1>title: {siteMetadata.title}</h1>
            <h1>author:</h1>
        </div>
    )
}

export default Header
