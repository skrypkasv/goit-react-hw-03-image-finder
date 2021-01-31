import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Loader from 'react-loader-spinner';

import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    hits: [],
    loading: false,
    showModal: false,
    modalImg: null,
    error: null,
  };

  URL = 'https://pixabay.com/api/';
  APIKey = '19367568-bec790f08eb1ec18688a31f32';
  perPage = 12;

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (newQuery !== prevQuery || nextPage !== prevPage) {
      this.setState({ loading: true });

      setTimeout(() => {
        fetch(
          `${this.URL}?q=${newQuery}&page=${nextPage}&key=${this.APIKey}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`,
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(
                `Картинок с именем "${newQuery}" не найдено!!!`,
              ),
            );
          })
          .then(({ hits }) =>
            this.setState(prev => {
              if (newQuery !== prevQuery) {
                return { hits: [...hits] };
              }
              return { hits: [...prev.hits, ...hits] };
            }),
          )
          .catch(error => this.setState({ error }))
          .finally(this.setState({ loading: false }));
      }, 1000);
    }
    this.scroll();
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
      console.log('must scroll');
    }, 700);
  };

  render() {
    const {
      hits,
      loading,
      showModal,
      modalImg,
      error,
    } = this.state;
    console.log(hits);

    return (
      <div>
        {loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        )}
        <ul className={styles.ImageGallery}>
          {error && <h2>{error.message}</h2>}

          {hits.length > 0 && (
            <ImageGalleryItem
              list={hits}
              onImgClick={this.onImgClick}
            />
          )}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={modalImg.link} alt={modalImg.tag} />
            </Modal>
          )}
        </ul>
      </div>
    );
  }
}
