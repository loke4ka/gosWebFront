import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <header className={styles.globalSystem}>
      <div className={styles.globalOpportunitiesSystemWrapper}>
        <div className={styles.globalOpportunitiesSystem}>
          Global Opportunities System
        </div>
      </div>
      <div className={styles.homeServices}>
        <nav className={styles.login}>
          <nav className={styles.globalSystemTitle}>
            <div className={styles.home}>Home</div>
            <div className={styles.services}>Services</div>
            <div className={styles.aboutUs}>About Us</div>
          </nav>
        </nav>
        <button className={styles.homeServicesTitle}>
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
          <div className={styles.login1}>Login</div>
        </button>
      </div>
    </header>
  );
};

export default HeaderTop;
