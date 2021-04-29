import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Style from "../styles/components/header.module.scss"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({ siteTitle }) => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    setAnimation()
  }, [])

  const setAnimation = () => {
    gsap.fromTo('.siteName',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: 'section:nth-child(2)',
          start: 'top top',
          end: 'top bottom',
          onEnter: () => {},
          onEnterBack: () => {},
          scrub: 1
        }
      }
    )
  }

  return (
    <header className={Style.header}>
      <div className={Style.header__container}>
        <div className={Style.header__siteName + " " + "siteName"}>
          <AnchorLink to="/#top" title="top">
              <span>{siteTitle}</span>
          </AnchorLink>
        </div>
        <div className={Style.header__menu + " " + "menu"}>
          <li>
            <AnchorLink to="/#about" title="about">
              <span>about</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#service" title="service">
              <span>service</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#skills" title="skills">
              <span>skills</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#projects" title="projects">
              <span>projects</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#contact" title="contact">
              <span>contact</span>
            </AnchorLink>
          </li>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
