import * as React from "react";
import { Container } from '@material-ui/core';
import { About, Hero, Layout } from '../components';

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Container>
      <About/>
    </Container>
  </Layout>
);

export default IndexPage;

