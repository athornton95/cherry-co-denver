import { css } from '@emotion/react';

const styles = () => css`
  .container {
    padding: 4rem 0;
    background-color: white;
    text-align: center;
  }

  .menu-title {
    font-size: 3rem;
  }

  .pie-image {
    height: 250px;
    width: 250px;
    animation: rotation 35s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
      filter: drop-shadow(5px 10px 10px #fefefe);
    }
    to {
      transform: rotate(359deg);
      filter: drop-shadow(5px 10px 10px #666666);
    }
  }
`;

export default styles;
