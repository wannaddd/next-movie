import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Header=()=>{

    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        const fetchNewMovies = async () => {
        try {
            const response = await fetch('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01');
            const data = await response.json();
            setNewMovies(data);
        } catch (error) {
            console.error('Error fetching new movies:', error);
        }
        };

        fetchNewMovies();
    }, []);

    const handleSearchClick = () => {
            console.log('Search clicked!');
        };
        
        const handleAccountClick = () => {
            console.log('Account clicked!');
        };

    return(
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
                        {}
                        <img src="account.svg" alt="Account Icon" className={styles.iconImage} />
                    </div>
                </li>
            </ul>
            
        </header>

    )
}

export default Header;
