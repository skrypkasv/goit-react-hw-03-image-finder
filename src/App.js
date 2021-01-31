import React, { Component } from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    request: '',
    page: 1,
  };

  addRequest = str => {
    this.setState({ request: str, page: 1 });
  };

  nextPage = () => {
    this.setState(({ page }) => ({ page: (page += 1) }));
  };

  render() {
    const { request, page } = this.state;
    console.log('page', page);

    return (
      <div className="App">
        <SearchBar transRequest={this.addRequest} />
        <ImageGallery query={request} page={page} />
        {request && <Button onClick={this.nextPage} />}
      </div>
    );
  }
}

export default App;
