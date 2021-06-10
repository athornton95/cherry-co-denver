import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import styles from './Layout.styles';

export default function Layout({ children }) {
  return (
    <>
      <Global styles={styles} />
      <main>
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
};