import styles from "./ApplicationDetails.module.css";

const ApplicationDetails = () => {
  return (
    <div className={styles.applicationDetails}>
      <div className={styles.frameParent}>
        <div className={styles.opportunitiesTitleWrapper}>
          <div className={styles.opportunitiesTitle}>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <div className={styles.opportunitiesAbroad}>
                  <h2 className={styles.opportunitiesAbroad1}>
                    OPPORTUNITIES ABROAD
                  </h2>
                </div>
                <div className={styles.frame}>
                  <div className={styles.getAForeign}>
                    Get a foreign or remote internship in international
                    companies and earn in foreign currency. Our platform
                    provides several internships in Business Analysis in US.
                    Just after, choose your preferences and our AI will find the
                    right internship for you!
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
              </div>
            </div>
            <div className={styles.consultationForm}>
              <div className={styles.aboutApplicationTitle}>
                <h2 className={styles.consultation}>CONSULTATION</h2>
                <div className={styles.aboutYourApplicationWrapper}>
                  <div className={styles.aboutYourApplication}>
                    About your application
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
          <img className={styles.frameIcon2} alt="" src="/frame-2.svg" />
        </div>
        <div className={styles.subscribeFormWrapper}>
          <div className={styles.subscribeForm}>
            <div className={styles.enterEmailLabel}>
              <h2 className={styles.aboutUs}>ABOUT US</h2>
            </div>
            <div className={styles.globalOpportunitiesSystem}>
              Global Opportunities System – a platform that helps get a foreign
              or remote internship/job/project in international companies and
              startups from scratch. GOS helps you to open new opportunities and
              take your first step for your future. By using AI, it makes
              searching process easy and convenient. In our platform, you can
              take consultations from experts and make your CV.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
