import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import PhotoCard from "./PhotoCard/PhotoCard";
import Modal from "./Modal/Modal";

const Gallery = ({
  galleryItems,
  onFullscreenClick,
  isModalOpen,
  handleEscKey,
  largeImageURL
}) => {
  return (
    <Fragment>
      {isModalOpen ? (
        <Modal
          largeImageURL={largeImageURL}
          onFullscreenClick={onFullscreenClick}
          handleEscKey={handleEscKey}
        />
      ) : (
        <ul className={styles.gallery}>
          {galleryItems.map(
            ({
              id,
              webformatURL,
              largeImageURL,
              likes,
              views,
              comments,
              downloads
            }) => (
              <li key={id}>
                <PhotoCard
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  likes={likes}
                  views={views}
                  comments={comments}
                  downloads={downloads}
                  onFullscreenClick={onFullscreenClick}
                />
              </li>
            )
          )}
        </ul>
      )}
    </Fragment>
  );
};

Gallery.propTypes = {
  galleryItems: PropTypes.array.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  handleEscKey: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired
};

export default Gallery;
