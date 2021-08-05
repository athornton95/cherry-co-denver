import { css } from '@emotion/react';

const styles = () => css`
  .container {
    padding: 4rem 0;
    background-color: white;
    text-align: center;
  }

  .menu-title {
    font-size: 5rem;
    font-family: "voltage", sans-serif;
    padding-bottom: 2rem;
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
    margin-bottom: -.5rem;
  }

  .description {
    padding-bottom: .5rem;
    font-size: 1.25rem;
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
`;

export default styles;
