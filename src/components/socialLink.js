import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../styles/components/socialLink.module.scss"

const SocialLink = ({ }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
              wantedly
            }
          }
        }
      }
    `
  )
  return (
    <div className={Style.links}>
      <a href={data.site.siteMetadata.social.github} target="_blank" rel="noopener noreferrer">
        <StaticImage
          src="../images/icon-github.png"
          width={35}
          quality={95}
          alt="github icon"
        />
      </a>
      <a href={data.site.siteMetadata.social.wantedly} target="_blank" rel="noopener noreferrer">
        <StaticImage
          src="../images/icon-wantedly.png"
          width={35}
          quality={95}
          alt="wantedly icon"
        />
      </a>
    </div>
  )
}

export default SocialLink
