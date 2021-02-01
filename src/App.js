import React, { Component } from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    request: '',
    page: 1,
  };

  addRequest = str => {
    this.setState({
      request: str,
      page: 1,
    });
  };
  nextPage = () => {
    this.setState(({ page }) => ({
      page: (page += 1),
    }));
  };

  render() {
    const { request, page } = this.state;

    return (
      <div className="App">
        <SearchBar transRequest={this.addRequest} />
        <ImageGallery
          query={request}
          page={page}
          onBtnClick={this.nextPage}
        />
        <ToastContainer autoClose={4000} />
      </div>
    );
  }
}

export default App;
