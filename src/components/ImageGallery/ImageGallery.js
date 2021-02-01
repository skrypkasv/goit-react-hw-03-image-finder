import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from 'react-loader-spinner';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    onBtnClick: PropTypes.func.isRequired,
  };

  state = {
    hits: [],
    loading: false,
    showModal: false,
    modalImg: null,
    error: null,
  };

  URL = 'https://pixabay.com/api/';
  APIKey = '19367568-bec790f08eb1ec18688a31f32';
  imgPerPage = 12;

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (newQuery !== prevQuery || nextPage !== prevPage) {
      this.setState({ loading: true, error: null });

      fetch(
        `${this.URL}?q=${newQuery}&page=${nextPage}&key=${this.APIKey}&image_type=photo&orientation=horizontal&per_page=${this.imgPerPage}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(({ hits }) => {
          if (hits.length > 0) {
            return this.setState(prev => {
              return newQuery !== prevQuery
                ? { hits }
                : { hits: [...prev.hits, ...hits] };
            });
          }
          return Promise.reject(
            new Error(`"${newQuery}" - not found!!!`),
          );
        })
        .catch(error => {
          this.setState({ hits: [], error });
        })
        .finally(() => {
          this.setState({ loading: false });
          this.scroll();
        });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImgClick = (link, tag) => {
    this.setState({
      modalImg: {
        link,
        tag,
      },
    });
    this.toggleModal();
  };

  scroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 700);
  };

  render() {
    const {
      loading,
      hits,
      showModal,
      modalImg,
      error,
    } = this.state;

    return (
      <div>
        {hits.length > 0 && (
          <ul className={styles.ImageGallery}>
            <ImageGalleryItem
              list={hits}
              onImgClick={this.onImgClick}
            />
          </ul>
        )}
        {loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        )}
        {hits.length > 0 && (
          <Button
            onClick={this.props.onBtnClick}
            disabled={loading}
          />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg.link} alt={modalImg.tag} />
          </Modal>
        )}
        {error && <h2>{error.message}</h2>}
      </div>
    );
  }
}

export default ImageGallery;
