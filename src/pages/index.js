import * as React from "react";
import { Container } from '@material-ui/core';
import { About, Hero, Layout, Navigation } from '../components';

const IndexPage = () => (
  <Layout>
    <Navigation/>
    <Hero/>
    <Container>
      <About/>
    </Container>
  </Layout>
);

export default IndexPage;

