/**
 * import CSS Module Movies
 * simpan di variable styles
 */
import React from 'react';
import styles from './Movies.module.css';

/**
 * Buat Component Movies
 * Menampilkan movie-movie
 */
function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Lakukan export Movies
export default Movies;
