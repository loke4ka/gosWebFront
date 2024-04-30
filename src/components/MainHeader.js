import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.loginregistration}>Login/Registration</div>
      </div>
      <div className={styles.services}>Services</div>
      <div className={styles.aboutUs}>About us</div>
      <div className={styles.internships}>Internships</div>
      <div className={styles.globalOpportunitiesSystem}>
        GLOBAL OPPORTUNITIES SYSTEM
      </div>
      <div className={styles.frame2}>
        <div className={styles.globalOpportunitiesSystemWrapper}>
          <div className={styles.globalOpportunitiesSystem1}>
            Global Opportunities System
          </div>
        </div>
        <div className={styles.loginForm}>
          <nav className={styles.firstNameFieldWrapper}>
            <nav className={styles.firstNameField}>
              <div className={styles.home}>Home</div>
              <div className={styles.services1}>Services</div>
              <div className={styles.aboutUs1}>About Us</div>
            </nav>
          </nav>
          <button className={styles.loginBox}>
            <div className={styles.inputContainer}>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <div className={styles.login}>Login</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
