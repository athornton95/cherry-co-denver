import { css } from '@emotion/react';

const styles = () => css`
  .container {
    padding: 4rem 0;
    background-color: white;
    text-align: center;
  }

  .section-header {
    margin-top: 1rem;
    margin-bottom: -3.5rem;
    img {
      height: 10rem;
      width: auto;
    }
  }

  .menu-section {
    padding-bottom: 2rem;
  }

  .menu-title-container {
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid black;
  }

  .menu-title {
    font-size: 7rem;
    font-family: "bello-caps", sans-serif;
    color: #CF2634;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, .9);
    margin-bottom: -.5rem;
  }

  .menu-subtitle {
    font-size: 1.75rem;
    text-transform: uppercase;
  }

  .grid-item-wrapper {
    margin-bottom: 2rem;
  }

  .pie-image {
    height: 250px;
    width: 250px;
    animation: rotation 35s infinite linear;
    filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.3));
  }

  .title {
    font-weight: bold;
    margin-top: .5rem;
    font-family: "bello-caps", sans-serif;
    font-size: 3rem;
    color: #CF2634;
    margin-bottom: -.25rem;
    line-height: 1;
    padding-bottom: 1rem;
  }

  .price {
    font-weight: bold;
  }

  .description {
    font-size: 1.1rem;
  }

  .additional {
    color: #CF2634;
    font-size: .75rem;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .text {
    font-size: 1.5rem;
    padding: .5rem 0;
    padding-bottom: 2rem;
  }

  .btn-cta {
    margin-top: 2rem;
  }

  .grid-container {
    padding-bottom: 2rem;
  }

  .contact-block {
    border-bottom: 1px solid black;
  }
`;

export default styles;
