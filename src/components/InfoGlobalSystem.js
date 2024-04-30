import styles from "./InfoGlobalSystem.module.css";

const InfoGlobalSystem = () => {
  return (
    <footer className={styles.infoGlobalSystem}>
      <div className={styles.globalOpportunitiesSystemWrapper}>
        <div className={styles.globalOpportunitiesSystem}>
          Global Opportunities System
        </div>
      </div>
      <div className={styles.infoglobalsystemcom00}>
        info@globalsystem.com | +00 123 456 789
      </div>
      <div className={styles.mainStreetCityWrapper}>
        <div className={styles.mainStreetCity}>Main Street, City</div>
      </div>
    </footer>
  );
};

export default InfoGlobalSystem;
