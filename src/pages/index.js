import * as React from "react";
import { Container } from '@material-ui/core';
import { About, CTABanner, Menu, Footer, Hero, Layout, Navigation } from '../components';

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
        <Container maxWidth='md'>
          <Menu/>
        </Container>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;

