import { css } from '@emotion/react';

const styles = () => css`
  text-align: center;

  .section-header {
    padding-bottom: 1rem;
    margin-bottom: 5rem;
    border-bottom: 1px solid black;

    .title {
      font-size: 5rem;
      @media (max-width: 600px) {
        line-height: 1;
        margin-bottom: 1rem;
      }

      @media (min-width: 1024px) {
        font-size: 7rem;
      }
      font-family: "bello-caps", sans-serif;
      color: #CF2634;
      text-shadow: 3px 3px 0px rgba(0, 0, 0, .9);
      margin-bottom: -.5rem;
    }

    .description {
      font-size: 1.75rem;
      text-transform: uppercase;
    }
  }
  
  .section-body {
    margin: -3rem auto 0 auto;
    @media (min-width: 1024px) {
      width: 75%;
    }

    .title {
      font-family: "voltage", sans-serif;
      color: #CF2634;
      font-size: 3rem;
    }

    .description {
      font-size: 1.5rem;
    }

    .additional {
      color: #CF2634;
    }

    .contact-block {
      padding-top: 1rem;
      p {
        font-size: 1rem;
        margin: 0 auto 2rem auto;
      }
    }

    .call-block {
      display: block;
      margin-top: 1.5rem;
      color: #CF2634;
      font-size: .75rem;

      p {
        margin-bottom: 0;
      }

      .btn-text {
        color: #CF2634;
        text-decoration: underline;
        font-size: 1rem;
      }
    }

  }
`;

export default styles;
