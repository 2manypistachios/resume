import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import Watson from "../components/Watson/Watson";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";

import {
  Segment
} from 'semantic-ui-react'

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <ErrorBoundary>
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
          <Segment>
            <Watson />
          </Segment>
          
        </ErrorBoundary>
      </Layout>
    );
  }
}

export default AboutPage;
