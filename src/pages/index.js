import React from 'react'

import LandingBio from '../components/landing-bio'
import Manifesto from '../components/manifesto'
import Assine from '../components/assine'
import SocialShare from '../components/social-share'
import WhoWeAre from '../components/who-we-are'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Manifesto />
    <Assine />
    <SocialShare />
    <WhoWeAre />
  </Layout>
)

export default IndexPage
