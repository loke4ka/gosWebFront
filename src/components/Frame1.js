import styles from "./Frame1.module.css";

const Frame1 = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.subscribeToOurNewsletterWrapper}>
        <h2 className={styles.subscribeToOur}>Subscribe to our newsletter</h2>
      </div>
      <div className={styles.infoblock}>
        <input
          className={styles.globalSystemLogo}
          placeholder="Enter your email"
          type="text"
        />
        <button className={styles.globalSystemLogo1}>
          <b className={styles.submit}>SUBMIT</b>
        </button>
      </div>
    </div>
  );
};

export default Frame1;
