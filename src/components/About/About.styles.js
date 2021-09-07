import { css } from '@emotion/react';

const styles = () => css`
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 6rem;
  
  .section-header {
    padding-bottom: 1rem;
    margin-bottom: 5rem;
    border-bottom: 1px solid black;

    .title {
      font-size: 7rem;
      font-family: "bello-caps", sans-serif;
      color: #CF2634;
      text-shadow: 3px 3px 0px rgba(0, 0, 0, .9);
      margin-bottom: -.5rem;
    }

    .description {
      font-size: 1.75rem;
      text-transform: uppercase;
    }
  }  
`;

export default styles;
