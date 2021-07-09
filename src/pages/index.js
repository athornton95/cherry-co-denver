import * as React from "react";
import { Container } from '@material-ui/core';
import { About, Hero, Layout, Navigation } from '../components';

const IndexPage = () => (
  <Layout>
    <Hero/>
    <div>
      <Navigation/>
      <Container maxWidth='md'>
        <About/>
      </Container>
    </div>
  </Layout>
);

export default IndexPage;

