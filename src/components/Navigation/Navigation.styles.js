import { css } from '@emotion/react';

const styles = () => css`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

  .nav-container {
    box-shadow: none;
    padding: 0 2rem;
    color: white;
  }

  .nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
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
