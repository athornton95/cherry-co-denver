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
    background: linear-gradient(270deg, rgba(185,0,11,1) 0%, rgba(207,38,48,1) 100%);
    max-height: 6rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    pointer-events: all;
  }

  .email-form {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      padding-right: 1rem;
      font-family: "bello-caps", sans-serif;
      font-size: 1.5rem;
    }

    input {
      padding: .75rem 1rem;
      border-radius: .5rem;
      width: 15rem;
      background-color: rgba(185,0,11,1);
      border: 1px solid white;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      color: white;

      &::placeholder { 
        color: white;
        opacity: .8;
    }
  }
`;

export default styles;
