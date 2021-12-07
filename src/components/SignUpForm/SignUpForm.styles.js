import { css } from '@emotion/react';

const styles = () => css`
  margin-top: 3rem;

  h1 {
    font-size: 1.5rem;
    @media (min-width: 760px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    @media (min-width: 760px) {
      font-size: 1.5rem;
    }
    color: #CF2634;
  }

  .asterisk {
    padding-left: 2px;
  }

  .form-wrapper {
    max-width: 600px;
    margin: 0 auto;

    form {
      padding: 2rem !important;
      border-radius: .5rem;
      border: 2px solid #CF2634;
      background-color: white;
      display: flex;


      .input-wrapper {
        display: flex;
        flex-direction: column;
        padding-bottom: 8px;
        min-height: 50px;

        input {
          display: flex;
          max-width: 100%;
          padding: 8px;
          text-indent: 2%;
        }
      }
    }

    
    .btn {
      margin: 1rem 0 !important;
      width: 96.5% !important;
      border-color: transparent !important;
    }
    
    .title {
      padding-bottom: 1rem;
    }

    .submit-wrapper {
      display: flex !important;
      width: 100% !important;

      input {
        max-width: 100% !important;
        width: 100% !important;
      }

      input[disabled] {
        pointer-events: none;
        background-color: grey;
      }
    }
  }
`;

export default styles;
