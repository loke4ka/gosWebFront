import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.subscribeToOurNewsletterWrapper}>
        <h2 className={styles.subscribeToOur}>Subscribe to our newsletter</h2>
      </div>
      <div className={styles.divcontainerParent}>
        <input
          className={styles.divcontainer}
          placeholder="Enter your email"
          type="text"
        />
        <button className={styles.divcontainer1}>
          <b className={styles.submit}>SUBMIT</b>
        </button>
      </div>
      <div className={styles.divcontainer2} />
    </div>
  );
};

export default Section1;
