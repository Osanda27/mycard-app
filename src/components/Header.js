import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.brand}>Tourist</span><span className={styles.one}>One</span>
      </div>
      <nav className={styles.nav}>
        <a href="/" className={styles.navItem}>Home</a>
        <a href="/plan" className={styles.navItem}>Plan Your Trip</a>
        <a href="/saved" className={styles.navItem}>Saved</a>
        <a href="/history" className={styles.navItem}>Booking History</a>
      </nav>
      <div className={styles.userSection}>
        <button className={styles.notificationButton}>
          <span className="material-icons">notifications</span>
        </button>
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt=""
          className={styles.userAvatar}
        />
      </div>
    </header>
  );
};

export default Header;
