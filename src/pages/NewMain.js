import HeaderTop from "../components/HeaderTop";
import ApplicationDetails from "../components/ApplicationDetails";
import Frame1 from "../components/Frame1";
import InfoGlobalSystem from "../components/InfoGlobalSystem";
import styles from "./NewMain.module.css";
import Frame from "../components/Frame";

const NewMain = () => {
  return (
    <div className={styles.newMain}>
      <Frame />
      <div className={styles.frame} />
      <div className={styles.subheader}>
        <div className={styles.frame1}>
          <h1 className={styles.globalOpportunitiesSystem}>
            GLOBAL OPPORTUNITIES SYSTEM
          </h1>
          <div className={styles.doMoreOfWhatMakesYouHappWrapper}>
            <div className={styles.doMoreOf}>
              DO MORE OF WHAT MAKES YOU HAPPY
            </div>
          </div>
          <div className={styles.opportunitiesAbroadTitle}>
            <div className={styles.borders}>
              <div className={styles.rectangle} />
            </div>
          </div>
        </div>
      </div>
      <main className={styles.consultationHeaderWrapper}>
        <section className={styles.consultationHeader}>
          <ApplicationDetails />
          <Frame1 />
        </section>
      </main>
      <InfoGlobalSystem />
    </div>
  );
};

export default NewMain;
