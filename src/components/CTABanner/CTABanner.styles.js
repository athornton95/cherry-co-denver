import { css } from '@emotion/react';

const styles = () => css`
  .container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    pointer-events: none;
    z-index: 1999;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    vertical-align: baseline;
  }

  .stage {
    position: -webkit-sticky;
    position: sticky;
    top: calc(100% - 6rem);
    width: 100%;
    height: 6rem;
    color: #fff;
    background: none;
    background-color: black;
    max-height: 6rem;
    pointer-events: all;
    grid-template-areas: "img button button text wwf close";
  }
`;

export default styles;
