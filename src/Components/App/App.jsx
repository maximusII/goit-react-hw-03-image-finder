import React, { Component, Fragment } from 'react';
import styles from './App.module.css';
import * as photoFetcher from '../../services/Fetcher';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import ErrorNotification from '../../services/ErrorNotification';

class App extends Component {
  state = {
    galleryItems: [],
    error: null,
    isModalOpen: false,
    largeImageURL: '',
    currentQuery: '',
    currentPageNumber: 1,
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = query => {
    photoFetcher
      .fetchPhotos(query)
      .then(({ data }) => {
        this.setState({ galleryItems: data.hits, currentQuery: query });
      })
      .catch(error => this.setState({ error }));
  };

  handleModalOpening = e => {
    if (e.target.parentNode.type === 'button') {
      const clickedItemPhotoURL = e.currentTarget.firstElementChild.src;
      const findItem = this.state.galleryItems.find(
        item => item.webformatURL === clickedItemPhotoURL,
      );
      const largeImage = findItem.largeImageURL;
      this.setState({ largeImageURL: largeImage, isModalOpen: true });
    }

    if (e.target.id === 'overlay') {
      this.setState({ isModalOpen: false });
    }
  };

  handleEscKey = e => {
    if (e.key === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  handleLoadMore = () => {
    photoFetcher
      .fetchPhotos(this.state.currentQuery, this.state.currentPageNumber + 1)
      .then(({ data }) => {
        this.setState({
          galleryItems: [...this.state.galleryItems, ...data.hits],
          currentPageNumber: this.state.currentPageNumber + 1,
        });
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { error, galleryItems, isModalOpen, largeImageURL } = this.state;
    return (
      <Fragment>
        {error && <ErrorNotification text={error.message} />}
        {galleryItems.length > 0 && (
          <div className={styles.app}>
            <SearchForm onSubmit={this.fetchPhotos} />
            <Gallery
              galleryItems={galleryItems}
              onFullscreenClick={this.handleModalOpening}
              isModalOpen={isModalOpen}
              handleEscKey={this.handleEscKey}
              largeImageURL={largeImageURL}
            />
            <button
              type="button"
              className={styles.button}
              onClick={this.handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;
