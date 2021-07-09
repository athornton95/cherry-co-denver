import { css } from '@emotion/react';

const styles = () => css`
  .footer {
    color: white;
    background-color: #629460;
    padding: 4rem;
    padding-bottom: 10rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    .logo {
      margin-bottom: 1rem;
      
      img {
        height: 6rem;
        width: auto;
      }
    }

    .details {
      text-align: center;
      padding-bottom: 1rem;

      p {
        font-weight: 400;
        font-size: 1.25rem;
      }
    }

    p {
      font-weight: 300;
      font-family: proxima-nova-condensed, sans-serif;
    }
  }
`;

export default styles;
