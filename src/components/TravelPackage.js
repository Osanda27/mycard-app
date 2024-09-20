import React from 'react';
import styles from './TravelPackage.module.css';

const TravelPackage = () => {
  return (
    <article className={styles.packageContainer}>
      <div className={styles.packageCard}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa0ab4932792e061011a38440b8c20be54b819c1164cb341f63e46c7e5e5fa2?placeholderIfAbsent=true&apiKey=e34a9c050a9d4116a965fad710e8bb98" 
          alt="Mountain adventure landscape" 
          className={styles.backgroundImage} 
        />
        <div className={styles.packageInfo}>
          <div className={styles.availabilityInfo}>
            <p className={styles.seatsAvailable}>only 7 seats available</p>
            <p className={styles.priceInfo}>
              <span className={styles.priceAmount}>$120</span>{" "}
              <span className={styles.priceUnit}>per person</span>
            </p>
          </div>
          <p className={styles.packageDescription}>
            Embark on an unforgettable mountain adventure. Explore rugged terrains, enjoy guided hikes, and experie...
          </p>
        </div>
        <div className={styles.packageDetails}>
          <div className={styles.detailsWrapper}>
            <h2 className={styles.packageTitle}>Mountain Adventure - 7 Days of Thrills</h2>
            <div className={styles.packageCategory}>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/798fa57c70f39cdee1da675d08de5f76e6e3c60cd53fae6513f49bed13451920?placeholderIfAbsent=true&apiKey=e34a9c050a9d4116a965fad710e8bb98" 
                alt="" 
                className={styles.categoryIcon} 
              />
              <span className={styles.categoryText}>Adventure</span>
            </div>
            <p className={styles.packageDuration}>7 Days / 6 Nights</p>
          </div>


          <button className={styles.bookingButton} aria-label="Book now">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/574cdd56f3b0a5900b5a9a96ac1143eba62af3ba32e3e4dd047753de5fd0aa9c?placeholderIfAbsent=true&apiKey=e34a9c050a9d4116a965fad710e8bb98"
              alt=""
              className={styles.backgroundImage}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c69855afe289730e1c0e8689c0c90b2a65c9fa5d601e92701a9f8f0028bb204?placeholderIfAbsent=true&apiKey=e34a9c050a9d4116a965fad710e8bb98"
              alt=""
              className={styles.bookingIcon}
            />
            <span className={styles.bookingText}>Book now</span>
          </button>


          
        </div>
      </div>
    </article>
  );
};

export default TravelPackage;
