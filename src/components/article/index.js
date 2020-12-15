import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import styles from './index.module.css';
import Button from 'react-bootstrap/Button';
import RESTAPI from '../../REST API';
import setLikes from './setLikes';
import getAllComments from './getAllComments';
import UserContext from '../../Context';
import commentsField from './commentsField';

const Article = ({ name, price, image }) => {
  const locator = useLocation();
  const context = useContext(UserContext);

  return (
    <div id={objectId} className={styles.singlePublication}>
      <Image className={styles.image} src={image} fluid />
      <p className={styles.text}>{name}</p>
      <div className={styles.likesWrapper}>
        <button
          className={styles.likesBtn}
          onClick={(e) =>
            setLikes(e, clickedLikes, setCountLikes, objectId, likes)
          }
          id="btn"
        >
          ♡
        </button>
        Likes: {likes + clickedLikes}
      </div>
      <div>
        <button
          onClick={(e) => commentsField(e)}
          className={styles.viewCommentsBtn}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Article;
