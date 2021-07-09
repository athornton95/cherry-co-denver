import { css } from '@emotion/react';

const styles = () => css`
  text-align: center;
  margin-top: 4rem;
  
  .section-header {
    margin-bottom: 2rem;

    .title {
      font-size: 5rem;
      position: relative;
      font-weight: extra-bold;
      font-family: "voltage", sans-serif;
      color: #CF2634;
      line-height: .7;
    }
    .sub-title {
      font-size: 3rem;
      position: relative;
      font-weight: extra-bold;
      font-family: "bello-caps", sans-serif;
      color: #000;
    }
  
  }

  .description {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
  
`;

export default styles;
