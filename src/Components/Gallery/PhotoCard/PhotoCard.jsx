import React from "react";
import PropTypes from "prop-types";
import styles from "./PhotoCard.module.css";

const PhotoCard = ({
  webformatURL,
  likes,
  views,
  comments,
  downloads,
  onFullscreenClick
}) => {
  return (
    <div className={styles.photoCard} onClick={onFullscreenClick}>
      <img src={webformatURL} alt="" />

      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button type="button" className={styles.fullscreenButton}>
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number,
  views: PropTypes.number,
  comments: PropTypes.number,
  downloads: PropTypes.number,
  onFullscreenClick: PropTypes.func.isRequired
};

export default PhotoCard;
