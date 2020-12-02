import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Trips from "../components/TripsSection"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Trips heading="Our Favorite Destination" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
