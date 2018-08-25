
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import Carousel from "../components/Carousel/Carousel";
import Watson from "../components/Watson/Watson";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  Segment,
  Card,
  Image
} from 'semantic-ui-react'

class Index extends Component {
  render() {
    //const postEdges = this.props.data.allAirtableFrontQuery.edges;
    const postEdges = this.props.data.allAirtableFrontQuery.edges;
    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <main>
            <Grid columns='equal' inverted padded verticalAlign='middle'>
              <Grid.Row color='black' textAlign='center'>
                <Grid.Column width={10} color='black'>
                  <Segment color='black' inverted>
                    <Header as='h1' inverted>Hi, I'm Max</Header>
                    <p>In 30 seconds <i>max</i>, you can know my <b>unique value.</b></p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Segment color='black' inverted>
                    <Image circular src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sobo_1909_260.png/250px-Sobo_1909_260.png"/>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment vertical padded='very'>
              <Container text>
                <p>You can start by looking at my talents, my blog, my photography, and (upcoming) business.</p>
                <script src="https://embed.small.chat/TCBSFG76YGCBC5P864.js"></script>
              </Container>
            </Segment>
            <Segment vertical>
              <Carousel data={postEdges}>
                <Watson />
              </Carousel>
            </Segment>
          </main>
          <section>
            <Segment vertical padded>
              <Card.Group centered>
                <Card>
                  <Card.Content>
                    <Card.Header>A Civilized Discusion about Civility in Civil Civilization</Card.Header>
                    <Card.Meta>The amazing</Card.Meta>
                    <Card.Description>Some description.</Card.Description>
                  </Card.Content>
                  <Card.Content>
                    Some xtra
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>A Civilized Discusion about Civility in Civil Civilization</Card.Header>
                    <Card.Meta>The amazing</Card.Meta>
                    <Card.Description>Some description.</Card.Description>
                  </Card.Content>
                  <Card.Content>
                    Some xtra
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>A Civilized Discusion about Civility in Civil Civilization</Card.Header>
                    <Card.Meta>The amazing</Card.Meta>
                    <Card.Description>Some description.</Card.Description>
                  </Card.Content>
                  <Card.Content>
                    Some xtra
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </section>
          <section>
            <Segment vertical>
              <Container text>
                <Header as="h2">Resume</Header>
                <p>My Resume.</p>
              </Container>
            </Segment>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query FrontQuery {
    allAirtableFrontQuery (sort: {
      fields: Id,
      order: ASC
    }){
    edges {
      node {
        Id
        Title
        Body
        Tags
        Color
        Cover {
          url
        }
        Background {
          url
        }
      }
    }
  }
}
`;
