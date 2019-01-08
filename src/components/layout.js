import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            backgroundColor: `black`,
            color: `white`,
            textAlign: `center`,
          }}
        >
          {children}
          <footer style={{ textAlign: `left`,}}>
            <h1>We &#10084; <br></br> Open Source</h1>
            <p style={{maxWidth: `300px`,}}>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page
                  when looking at its layout. The point of using
                  Lorem Ipsum is that it has.
            </p>
            <p>
                  The point of using Lorem Ipsum is that it has.
            </p>
            <Link
                to="www.github.com"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  fontSize: `13px`,
                  textAlign: `left`,
                  
                }}
            >
              { "Check out Our Repos" }
            </Link>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
