import { css } from '@emotion/react';

const styles = css`
* {
  padding: 0;
  margin: 0;
  line-height: 1.4;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
}

section {
  margin-top: 48px;
  margin-bottom: 48px;
}

hr {
  border: 0;
  height: 1px;
  background-color: #EEF0F7;
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

.description {
  font-size: 16px;
}

.sub-description {
  font-size: 14px;
}

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