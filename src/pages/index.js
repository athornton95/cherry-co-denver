import * as React from "react";
import { Container } from '@material-ui/core';
import { About, CTABanner, Events, Menu, Footer, Hero, ImageBanner, Layout, Navigation } from '../components';

const IndexPage = () => (
  <Layout>
    <CTABanner/>
    <Hero/>
    <div className='content-body'>
      <Navigation/>
      <div className='menu-container'>
        <Container maxWidth='md'>
          <Menu/>
        </Container>
        <div class="wave-bottom"></div>
      </div>
      <Container maxWidth='md'>
        <About/>
      </Container>
      <Container maxWidth='md'>
        <Events/>
      </Container>
      <ImageBanner/>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;

