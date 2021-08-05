import * as React from "react";
import { Container } from '@material-ui/core';
import { About, CTABanner, Events, Menu, Footer, Hero, ImageBanner, Layout, Navigation } from '../components';

const IndexPage = () => (
  <Layout>
    <CTABanner/>
    <Hero/>
    <div className='content-body'>
      <Navigation/>
      <div>
        <Container maxWidth='md'>
          <About/>
        </Container>
      </div>
      <div className='menu-container'>
        <div className='wave'>
          <div className='wave-top'>
            <div className='wave-mid' /> 
          </div>
        </div>
        <Container maxWidth='lg'>
          <Menu/>
        </Container>
        {/* <div class="wave-mid"></div> */}
        <div class="wave-bottom"></div>
      </div>
      <Container maxWidth='md'>
        <Events/>
      </Container>
      <ImageBanner/>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;

