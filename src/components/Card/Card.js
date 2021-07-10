import styles from "./Card.module.scss";

function Card({ image, alt, FirstName, LastName, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.container__names}>
        <p className={styles.container__firstname}>{FirstName}</p>
        <p className={styles.container__lastname}>{LastName}</p>
      </div>
      <div className={styles.container__email}>{email}</div>
    </div>
  );
}

export default Card;
