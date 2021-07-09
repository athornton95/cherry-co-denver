import * as React from "react";
import { Container } from '@material-ui/core';
import { About, CTABanner, Footer, Hero, Layout, Navigation } from '../components';

const IndexPage = () => (
  <Layout>
    <CTABanner/>
    <Hero/>
    <div className='content-body'>
      <Navigation/>
      <Container maxWidth='md'>
        <About/>
      </Container>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;

