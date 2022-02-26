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
    font-size: 5rem;
    padding-top: 1rem;
    @media (max-width: 600px) {
      line-height: .75;
      margin: 1rem 0;
    }
    @media (min-width: 1024px) {
      font-size: 7rem;
      padding-top: 0;
      margin-bottom: -.5rem;
    }
    font-family: "bello-caps", sans-serif;
    color: #CF2634;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, .9);
  }

  .menu-subtitle {
    font-size: 1.75rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .menu-details {
    font-size: 1.25rem;
  }

  .featured {
    padding-bottom: 2rem;
    .pie-image {
      height: 250px;
      width: auto;
      border-radius: .5rem;
    } 
  }

  .grid-item-wrapper {
    margin-bottom: 2rem;
    position: relative;

    .pie-image {
      height: 250px;
      width: 250px;
      animation: rotation 35s infinite linear;
      filter: drop-shadow(0.1rem .5rem .5rem rgba(0, 0, 0, 0.2));
    }
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
    font-size: .85rem;
  }

  .pre-order {
    position: absolute;
    top: .5rem;
    left: 3.5rem;
    height: 5.5rem;
    width: 5.5rem;

    @media (min-width: 768px) {
      left: 0;
    }

    &:after {
      content: "";
      top: 0;
      left: 0;
      background-color: #CF2634;
      position: absolute;
      height: 5.5rem;
      width: 5.5rem;
      z-index: 0;
      border-radius: 50%;
    }

    p {
      color: white;
      position: relative;
      z-index: 1;
      top: .6rem;
      max-width: 4rem;
      margin: 0 auto;
      font-weight: 600;
    }
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
