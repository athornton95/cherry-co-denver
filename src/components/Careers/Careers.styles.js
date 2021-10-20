import { css } from '@emotion/react';

const styles = () => css`
  padding: 2rem 0;

  .content {
    display: flex;
    align-items: center;
    @media(max-width: 720px){
      flex-direction: column;
    }
    @media(min-width: 721px){
      justify-content: space-between;
    }

    .text {
      @media(max-width: 720px){
        text-align: center;
        padding-bottom: 1rem;
      }
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`;

export default styles;
