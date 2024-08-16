import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import FeaturedBlog from "../components/FeaturedBlog"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
    </Layout>
  </div>
)

export default IndexPage
