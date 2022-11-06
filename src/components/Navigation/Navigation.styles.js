import { css } from '@emotion/react';

const styles = () => css`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  
  @media (min-width: 720px) {
    padding: 0 0 1rem 0;
  }

  .nav-secondary {
    background-color: #629640;
    color: white;
    text-align: center;
    padding: .5rem 2rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    @media (min-width: 721px) {
      box-shadow: none;
      margin-bottom: 1rem;
    }
  }

  .nav-container {
    // @media (max-width: 720px) {
    //   padding: 1rem 2rem;
    // }
    padding: 0 2rem;
    box-shadow: none;
  }

  .nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .span-link {
    margin-left: .5rem;
    a {
      color: white;
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom: 1px solid white;
    }
  }

  .nav-link {
    @media (max-width: 600px) {
      display: none;
    }
    font-size: 1rem;
    align-self: center;
    margin: 0 1rem;
    text-decoration: none;
    color: #CF2634;
    border-bottom: 1px solid white;
  }

  .nav-link:hover {
    border-bottom: 1px solid #CF2634;
  }

  .btn {
    margin-left: 1rem;
  }

  .order {
    @media (max-width: 600px) {
      margin: 0 auto;
      margin-left: 0;
      width: 100%;
    }
  }

  .logo {
    @media (max-width: 600px) {
      display: none;
    }
    position: relative;
    img {
      position: absolute;
      height: 7rem;
      widith: 100%;
    }
  }
`;

export default styles;
