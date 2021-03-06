import * as React from "react";
import { Helmet } from "react-helmet"
import { Footer, Layout, SignUpForm } from '../../components';
import SimpleNav from "../../components/SimpleNav/SimpleNav";

const FreePie = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Free Pie!</title>
      <meta name="keywords" content="pie shop, local pie, cherry pie, pie" />
      <meta name="description" content="Sign up htmlFor out mailing list and receive a coupon htmlFor free slice of pie from our Tennyson St. location." />
      <meta name="facebook-domain-verification" content="rh7r5bkxc0d3m9gyzgxkzs0pqkhidm" />
      <link rel="canonical" href="https://coloradocherrycodenver.com/free-pie"/>
      <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
      <meta name="icon" href='../favicon.ico' />
    </Helmet> 
    <Layout>
      <SimpleNav />
      <SignUpForm />
      <Footer
        padding={false}
      />
    </Layout>
  </>
);

export default FreePie;
