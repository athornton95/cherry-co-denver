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

a {
  cursor: pointer;
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
  background-color: white;
}

.btn-cta {
  color: white;
  background-color: #CF2634;
  text-decoration: none;
}

.btn-cta:hover {
  background-color: #b9000c;
}

.btn-white:hover {
  color: #fff;
  background-color: #CF2634;
  border: 1px solid white;
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

.menu-container,
.events-container {
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

  .events-container {
    background-color: white;
    @media (min-width: 1024px) {
      padding-bottom: 3rem;
    }
  }

  .modal {
    .form-header {
      padding-bottom: 1rem;
      font-weight: bold;
      font-size: 1.5rem;
    }

    .show {
      display: flex;
    }

    .hide {
      display: none;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        border: 1px solid black;
        border-radius: 4px;
        padding: .5rem .75rem;
        flex: 1;
      }

      .form-submit[disabled] {
        background-color: darkGrey;
        color: grey;
      }

      .form-group-names {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;

        @media (min-width: 1024px) {
          flex-direction: row;
        }

        #lastName {
          margin-top: 1rem;

          @media (min-width: 1024px) {
            margin-top: 0;
            margin-left: 1rem;
          }
        }
      }

      .btn-cta {
        width: 100%;
        margin-top: 1rem;
      }
    }
    .status {
      font-size: 1rem;
    
      &-error {
        color: red;
        padding-top: 1rem;
      }
  
      &-success {
        color: green;
      }
    }
  }
`;

export default styles;
