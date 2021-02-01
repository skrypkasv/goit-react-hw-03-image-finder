import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

class SearchBar extends Component {
  static propTypes = {
    transRequest: PropTypes.func.isRequired,
  };

  state = {
    request: '',
  };

  handleInputChange = e => {
    this.setState({
      request: e.target.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { request } = this.state;

    request.trim().length > 0
      ? this.props.transRequest(request)
      : toast.dark('Search-field is empty!');

    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      request: '',
    });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form
          className={styles.SearchForm}
          onSubmit={this.handleSubmit}
        >
          <button
            type="submit"
            className={styles.SearchFormBtn}
          >
            <span className={styles.SearchFormBtn_label}>
              Search
            </span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            value={this.state.request}
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
