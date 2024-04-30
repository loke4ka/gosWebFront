import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.newsletterInput}>
        <h2 className={styles.subscribeToOur}>Subscribe to our newsletter</h2>
      </div>
      <div className={styles.mainContainer}>
        <input
          className={styles.frame}
          placeholder="Enter your email"
          type="text"
        />
        <button className={styles.frame1}>
          <b className={styles.submit}>SUBMIT</b>
        </button>
      </div>
      <div className={styles.divcontainer} />
    </footer>
  );
};

export default Section2;
