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

  .image-container {
    position: relative;
  }

  .image {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
      border-radius: 50%;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

      @media (min-width: 600px) {
        width: 80%;
        margin: 0 2rem;
      }
    }
  }

  .image:after {
    @media (min-width: 960px) {
      height: 12.6rem;
      width: 12.6rem;
      content: '';
      border: .5rem double #CF2634;
      border-radius: 50%;
      position: absolute;
      z-index: 10;
    }
  }

  .image:before {
    @media (min-width: 960px) {
      height: 12.6rem;
      width: 12.6rem;
      content: '';
      border: .5rem solid #FEFEFE;
      border-radius: 50%;
      position: absolute;
      z-index: 10;
    }
  }
`;

export default styles;
