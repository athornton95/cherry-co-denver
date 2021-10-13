import * as React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/react';
import { Layout, Navigation } from '../components'

const styles = () => css`
  .wrapper {
    display: flex;
    width: 100%;
    height: calc(100vh - 15rem);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .title {
    font-family: "bello-caps", sans-serif;
    font-size: 10rem;
    color: #CF2634;
    line-height: 1;
    @media (min-width: 600px){
      font-size: 15rem;
    }
  }

  .text {
    padding: 0 2rem;
    margin-bottom: 1rem;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Navigation />
    <div css={styles}>
      <div className='wrapper'>
        <h1 className='title'>404</h1>
        <p className='text'>We're sorry, the page you're looking for does not exist.</p>
        <Link className='btn btn-cta' to="/">Go home</Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage
