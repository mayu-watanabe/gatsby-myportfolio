import * as React from "react"
import PropTypes from "prop-types"
import * as Style from "../styles/components/footer.module.scss"

const Footer = ({ copyright }) => (
  <footer className={Style.footer}>
    <div className={Style.footer__text}>
      <p>{ copyright }</p>
    </div>
  </footer>
)

Footer.propTypes = {
  copyright: PropTypes.string,
}

Footer.defaultProps = {
  copyright: ``,
}

export default Footer
