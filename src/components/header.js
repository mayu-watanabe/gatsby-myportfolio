import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Style from "../styles/components/header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={Style.header}>
    <div className={Style.header__container}>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
