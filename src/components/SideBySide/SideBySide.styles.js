import { css } from '@emotion/react';

const styles = () => css`
  text-align: left;

  .content {
    padding: 1rem 0;

    .title {
      color: #CF2634;
      font-family: "voltage", sans-serif;
      float: left;
      font-size: 3rem;
      line-height: 0;
      padding-right: .5rem;
    }
  }

  .text-right {
    @media (min-width: 600px) {
      padding-right: 2rem;
    }
  }
  .text-left {
    @media (min-width: 600px) {
      padding-left: 2rem;
    }
  }

  .image {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
      border-radius: 50%;

      @media (min-width: 600px) {
        width: 80%;
        margin: 0 2rem;
      }
    }
  }
`;

export default styles;
