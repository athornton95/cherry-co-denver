import { css } from '@emotion/react';

const styles = () => css`
  .footer {
    color: white;
    background: rgb(57,108,55);
    background: linear-gradient(90deg, rgba(57,108,55,1) 0%, rgba(115,170,112,1) 0%, rgba(98,148,96,1) 100%);
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

    .social {
      display: block;
      padding-bottom: .75rem;
      svg {
        height: 1.75rem;
        width: 1.75rem;
        padding: 0 .5rem;
      }

      @media (min-width: 1023px) {
        display: none;
      }
    }

    .details {
      text-align: center;
      padding-bottom: 1rem;

      p {
        text-align: center;
        font-weight: 400;
        font-size: 1.25rem;
      }
    }

    p,
    span {
      text-align: center;
      font-weight: 300;
      font-family: proxima-nova-condensed, sans-serif;
    }

    .inline-button {
      font-weight: 300;
      font-family: proxima-nova-condensed, sans-serif;
      color: white;
      display: inline
    }
  }
`;

export default styles;
