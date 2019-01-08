import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: `5rem`,
        paddingBottom: `2rem`,
        fontWeight: `900`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `50px`,
            
          }}
        >
          {" <SoftDev/> "}
        </Link>
      </h1>
      <br>
      </br>
        <div 
              style={{ 
                  color: `white`,
                  textDecoration: `none`,
                  lineHeight: `1`,
                  paddingTop: `20px`,
                }}
              >
          <h4 style={{ margin: 0 }}>
              
                <p> Digitalents Helsinki Software Development team.</p>
                <p> Second line here, woah.</p>
              
          </h4>
        </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
