import { css } from '@emotion/react';

const styles = () => css`
  text-align: left;

  .content {
    padding: 4rem 0;

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
    padding-right: 2rem;
  }
  .text-left {
    padding-left: 2rem;
  }

  .image {
    img {
      margin: 0 2rem;
      width: 100%;
      border-radius: 50%;
    }
  }
`;

export default styles;
