import * as React from "react";
import { Helmet } from "react-helmet"
import { Container } from '@material-ui/core';
import { About, CTABanner, Events, Menu, Footer, Hero, ImageBanner, Layout, Navigation } from '../components';

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Colorado Cherry Co, Pie + Provisions</title>
      <meta name="keywords" content="pie shop, local pie, cherry pie, pie" />
      <meta name="description" content="Fourth generation neighborhood pie shop, located in Denver, CO." />
      <link rel="canonical" href="https://coloradocherrycodenver.com/"/>
      <meta name="icon" href='../favicon.ico' />
    </Helmet>
    <Layout>
      <CTABanner/>
      <Hero/>
      <div className='content-body'>
        <Navigation/>
        <div className='menu-container'>
          <Container maxWidth='md'>
            <Menu/>
          </Container>
          <div className="wave-bottom"></div>
        </div>
        <Container maxWidth='md'>
          <About/>
        </Container>
        <div className='events-container'>
          <Container maxWidth='md'>
            <Events/>
          </Container>
        </div>
        <ImageBanner/>
      </div>
      <Footer />
    </Layout>
  </>
);

export default IndexPage;

