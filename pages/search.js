import styles from '../styles/Home.module.css';
import Footer from './footer';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const getMovies = async () => {
  const res = await fetch('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01');

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return data;
};

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/search.js');
  };

  const handleAccountClick = () => {
    console.log('Account clicked!');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ul className={styles.navList}>
          <li className={styles.titleheader}>PcariMovie</li>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Show</a></li>
          <li><a href="#">Video</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact Us</a></li>
          <li>
            <div className={styles.icon} onClick={handleSearchClick}>
              <img src="search.svg" alt="Search Icon" className={styles.iconImage} />
            </div>
          </li>
          <li>
            <div className={styles.icon} onClick={handleAccountClick}>
              <img src="account.svg"className={styles.iconImage} />
              <span className={styles.username}>John Glich</span>
            </div>
          </li>
        </ul>
      </header>
        <div className={styles.intro}>
          <img className={styles.imgVideo} src="video.png" alt="Video Icon" />
          <div className={styles.textContainer}>
            <h1 className={styles.introText}>Find your movies here!</h1>
            <p className={styles.pText}>
              Explore our gallery full of exciting films from all around the globe for your entertainment. No hidden charges or disturbing ads.
            </p>
          </div>
        </div>

      <main className={styles.main}>
        

        <div>
          <div className={styles.headerContainer}>
            <h3 className={styles.newReleases}>New Releases</h3>
            <a href="#" className={styles.viewMoreLink}>View More</a>
          </div>
          <div className={styles.movieContainer}>
            {/* Upper Div */}
            <div className={styles.upperGrid}>
              {movies.slice(0, 2).map((movie, index) => (
                <div key={movie.Movie_ID} className={styles.posterContainer} style={{ gridColumn: index + 1 }}>
                <div className={styles.moviePoster}>
                <div className={styles.overlayContainer}>
                  <img
                    src={movie.Poster}
                    alt={`Poster for ${movie.Title}`}
                    className={styles.posterImage}
                  />
                  <div className={styles.overlay}></div>
                </div>
                <div>
                  <p className={styles.genre}>{movie.Genre}</p>
                  <div className={styles.movieInfo}>
                    <p className={styles.title}>{movie.Title}</p>
                    <p className={styles.duration}>{movie.Duration}</p>
                    <p className={styles.view}>{movie.Views}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}
            </div>

            {/* Lower Div */}
            <div className={styles.lowerGrid}>
              {movies.slice(2, 5).map((movie, index) => (
                <div key={movie.Movie_ID} className={styles.posterContainer} style={{ gridColumn: index + 1 }}>
                <div className={styles.moviePoster}>
                <div className={styles.overlayContainer}>
                  <img
                    src={movie.Poster}
                    alt={`Poster for ${movie.Title}`}
                    className={styles.posterImage}
                  />
                  <div className={styles.overlay}></div>
                </div>
                <div>
                  <p className={styles.genre}>{movie.Genre}</p>
                  <div className={styles.movieInfo}>
                    <p className={styles.title}>{movie.Title}</p>
                    <p className={styles.duration}>{movie.Duration}</p>
                    <p className={styles.view}>{movie.Views}</p>
                  </div>
                </div>
              </div>
            </div>
              ))}
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
}
