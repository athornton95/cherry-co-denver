import { css } from '@emotion/react';

const styles = () => css`
  position: sticky;
  top: 0;
  z-index: 50;

  .nav-container {
    box-shadow: none;
    padding: 0 2rem;
    color: white;
    display: flex;
  }

  .nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }

  .nav-link {
    font-size: 1rem;
    align-self: center;
    margin: 0 1rem;
    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);
  }

  .btn {
    margin-left: 1rem;
  }

  .logo {
    position: relative;
    img {
      position: absolute;
      height: 7rem;
      widith: 100%;
    }
  }
`;

export default styles;
