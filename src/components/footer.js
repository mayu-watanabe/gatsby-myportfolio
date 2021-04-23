import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ copyright }) => (
  <footer>
    <div>
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
