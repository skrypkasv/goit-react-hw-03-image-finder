import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({
  tags,
  webformatURL,
  largeImageURL,
  onImgClick,
}) {
  return (
    <li
      className={styles.item}
      onClick={() => onImgClick(largeImageURL, tags)}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={styles.item_image}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
