import React from 'react'


import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`softdev`]} />
    <div className="projektit">
      <h1>Holy Friggin' Moly! We do Software Like Crazy</h1>
      <p>
          It is a long established fact that a
          reader will be distracted by the
          readable content of a page when
          looking at its layout. The point of using
          Lorem Ipsum is that it has
      </p>
    </div>

  </Layout>
)

export default IndexPage
