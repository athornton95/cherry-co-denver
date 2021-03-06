import { css } from '@emotion/react'

const styles = () => css`
  .hero {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .hero-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .hero-title {
    padding: 0 1rem;
    text-align: center;
    color: #CF2634;
    position: relative;

    @media (min-width: 600px) {
      padding: 0 4rem;
    }

    h3 {
      font-family: "voltage", sans-serif;
      font-size: 5rem;
      font-weight: bold;
      text-shadow:
        0 0 1px #CF2634,
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 30px #CF2634,
        0 0 82px #CF2634,
        0 0 92px #CF2634;
      position: relative;
      z-index: 10;

      @media (min-width: 600px) {
        line-height: 1.2;
        font-size: 9rem;
      }
    }

    h3.line-two {
      margin-top: -.75rem;
    }
  }

  .hero-scroll {
    position: absolute;
    color: white;
    bottom: 3rem;
  }

  .down-caret,
  .down-caret:before {
    position: absolute;
    left: 50%;
  }

  .down-caret {
    width: 30px;
    height: 30px;
    top: 50%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
  }
`;

export default styles;
