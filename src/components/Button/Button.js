import React from 'react';
import styles from './Button.module.css';
// import PropTypes from 'prop-types'

export default function Button({ onClick }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      Load more
    </button>
  );
}
