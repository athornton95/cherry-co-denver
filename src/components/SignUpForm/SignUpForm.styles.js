import { css } from '@emotion/react';

const styles = () => css`
  margin: 4rem 0 5rem 0;
  @media (min-width: 600px) {
    margin-top: 3rem;
  }

  h1 {
    font-size: 1.5rem;
    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    @media (min-width: 600px) {
      font-size: 1.5rem;
    }
    color: #CF2634;
  }

  .asterisk {
    padding-left: 2px;
  }

  .form-wrapper {
    max-width: 600px;
    margin: 0 auto 2rem auto;

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
      border-color: black !important;
    }
    
    .title {
      padding-bottom: 1rem;
    }

    .note {
      font-style: italic;
      font-size: .75rem;
      text-align: right;

      .asterisk {
        font-style: normal;
      }
    }

    .submit-wrapper {
      display: flex !important;
      width: 100% !important;

      input {
        max-width: 100% !important;
        width: 100% !important;
        text-align: center;
        margin-bottom: .5rem !important;
      }

      input[disabled] {
        background-color: darkGrey;
        color: grey;
        pointer-events: none;
      }
    }

    input {
      border-color: black !important;
    }
  }
`;

export default styles;
