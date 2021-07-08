import { css } from '@emotion/react';

const styles = () => css`
  text-align: center;
  margin-top: 4rem;
  
  .section-header {
    margin-bottom: 2rem;
  }

  
  .section-title {
    font-size: 3rem;
    position: relative;
    font-weight: bold;
    color: #000;
  }
  
  .section-title:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: .75rem;
    width: 25%;
    background-color: #CECECF;
  }

  .section-description {
    font-size: 1.25rem;
  }
`;

export default styles;
