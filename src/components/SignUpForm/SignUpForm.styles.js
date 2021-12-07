import { css } from '@emotion/react';

const styles = () => css`
  margin-top: 3rem;

  h1 {
    font-size: 1.5rem;
    @media (min-width: 760px) {
      font-size: 1.75rem;
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
    }

    .btn {
      margin: 1rem 0 !important;
      width: 96.5% !important;
      border-color: transparent !important;
    }

    .title {
      padding-bottom: 1rem;
    }
  }
`;

export default styles;
