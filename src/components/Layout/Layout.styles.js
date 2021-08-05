import { css } from '@emotion/react';

const styles = css`
* {
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 1.4;
  font-family: "Proxima Nova", helvetica, sans-serif;
  outline: none;
}

.main {
  position: relative;
}

html {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  position: relative;
}

body {
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #EEE;
  scroll-behavior: smooth;
  position: relative;
}

section {
  padding-top: 48px;
  padding-bottom: 48px;
}

hr {
  border: 0;
  height: 1px;
  background-color: #DFDFDF;
  margin-bottom: 2rem;
}

.btn {
  padding: .75rem 1rem;
  border-radius: .5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

.btn-white {
  color: #CF2634;
  border: 1px solid #CF2634;
}

.btn-white:hover {
  color: #fff;
  background-color: #CF2634;
  border: 1px solid #CF2634;
  text-shadow: none;
}

.title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 2px;
}

.title-2 {
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
}

.subtitle {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1A2453;
}

.menu-container {
  background-color: white;

  .wave {
    position: relative;
    margin-top: 20px;
  }

  .wave-top::before,
  .wave-top::after {
    border-bottom: 5px solid white;
  }

  .wave-top::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background-size: 20px 40px;
    background-image: radial-gradient(circle at 10px -15px, transparent 20px, white 21px);
  }
  
  .wave-top::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 15px;
    background-size: 40px 40px;
    background-image: radial-gradient(circle at 10px 26px, white 20px, transparent 21px);
  }

  .wave-mid {
    background-color: #EEE;
    height: 50px;
  }

  .wave-bottom {
    position: relative;
  }
  
  .wave-bottom::before,
  .wave-bottom::after {
    border-top: 5px solid white;
  }
  
  .wave-bottom::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background-size: 20px 40px;
    background-image: radial-gradient(circle at 10px -15px, transparent 20px, #EEE 21px);
  }
  
  .wave-bottom::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 15px;
    background-size: 40px 40px;
    background-image: radial-gradient(circle at 10px 26px, #EEE 20px, transparent 21px);
  }
}

.meta {
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: #7179A5;
}

.list-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1A2453;
}

.color-blue {
  color: #0E84F9;
  padding-bottom: 8px;
}

.color-blue-dark {
  color: #3B4472;
}

// .description {
//   font-size: 16px;
// }

// .sub-description {
//   font-size: 14px;
// }

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1672E4;
  opacity: 1;
  color: #ffffff;
  padding: 10px 18px;
  background: #1672E4;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08), 0px 0px 8px rgba(0, 0, 0, 0.12), 0px 0px 4px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  font-weight: 500;
  appearance: none;
  border: none;
  outline: none;
  transition: box-shadow ease-in-out 240ms, opacity ease-in-out 240ms;
  text-decoration: none;

  &-facebook {
    background-color: #1672E4;
  }

  &-youtube {
    background-color: #FB000F;
  }

  .button-icon {
    display: inline-flex;
  }
}

.rich-text {

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  h2 {
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1A2453;
  }

  h4 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1A2453;
  }

  h5 {

  }

  h6 {

  }

  p,
  span,
  ol,
  ul {

  }

  img {
    width: 100%;
    height: auto;
  }
}
`;

export default styles;
