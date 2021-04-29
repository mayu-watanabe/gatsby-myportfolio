import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Style from "../styles/components/header.module.scss"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Header = ({ siteTitle }) => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    setAnimation()
  }, [])

  const setAnimation = () => {
    gsap.fromTo('.nav',
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
      <div className={Style.header__container + " " + "nav"}>
        <div className={Style.header__siteName}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
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
