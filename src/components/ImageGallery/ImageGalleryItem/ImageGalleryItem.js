import React from 'react';
// import PropTypes from 'prop-types'

export default function ImageGalleryItem({
  list,
  onImgClick,
}) {
  return list.map(
    ({ id, tags, webformatURL, largeImageURL }) => (
      <li
        key={id}
        className="ImageGalleryItem"
        onClick={() => onImgClick(largeImageURL, tags)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>
    ),
  );
}

/*
list.map(
    ({ id, tags, webformatURL, largeImageURL }) => (
      <li
        key={id}
        className="ImageGalleryItem"
        onClick={() => onImgClick(largeImageURL, tags)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>
    ),
  );
*/
