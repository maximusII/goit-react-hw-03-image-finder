import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ onFullscreenClick, handleEscKey, largeImageURL }) => {
  return (
    <div
      tabIndex="0"
      className={styles.overlay}
      onClick={onFullscreenClick}
      id="overlay"
      onKeyDown={handleEscKey}
    >
      <div className={styles.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onFullscreenClick: PropTypes.func.isRequired,
  handleEscKey: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired
};

export default Modal;
