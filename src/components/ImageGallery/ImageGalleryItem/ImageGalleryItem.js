import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ list, onImgClick }) {
  return list.map(
    ({ id, tags, webformatURL, largeImageURL }) => (
      <li
        key={id}
        className={styles.item}
        onClick={() => onImgClick(largeImageURL, tags)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={styles.item_image}
        />
      </li>
    ),
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
