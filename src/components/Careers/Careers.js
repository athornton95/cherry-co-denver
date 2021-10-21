import React from 'react';
import { Container } from '@material-ui/core';
import styles from './Careers.styles';

const Careers = () => {
  return (
    <div css={styles}>
      <Container maxWidth='md'>
        <div className='content'>
          <p className='text'>We're always looking for awesome folks to join our pie family. Interested?</p>
          <a className='btn btn-cta' href="mailto:elias@coloradocherrycompany.com?subject=I want to join the pie fam!">Send Us Your Resume</a>
        </div>
      </Container>
    </div>
  );
};

export default Careers;
