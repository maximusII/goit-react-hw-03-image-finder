import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.handleEscKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleEscKey);
  }

  render() {
    return (
      <div
        tabIndex="0"
        className={styles.overlay}
        onClick={this.props.onFullscreenClick}
        id="overlay"
      >
        <div className={styles.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onFullscreenClick: PropTypes.func.isRequired,
  handleEscKey: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
