import InfoGlobalSystem from "./InfoGlobalSystem";
import styles from "./Section.module.css";

const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divcontainerParent}>
        <div className={styles.divcontainer}>
          <div className={styles.divrow}>
            <div className={styles.divcolLg12}>
              <div className={styles.divgoogLr13}>
                <div className={styles.motivationpdf}>
                  motivation.pdf. На экране. Страница 1 из 1
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.usefulGuidelinesWrapper}>
                  <h1 className={styles.usefulGuidelines}>Useful Guidelines</h1>
                </div>
                <div className={styles.divgoogLr131}>
                  <div className={styles.ieltspdf}>
                    IELTS.pdf. Загрузка... Страница 1 из 5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.divcontainer1}>
            <div className={styles.divrow1}>
              <div className={styles.divcolLg121}>
                <div className={styles.divtitle}>
                  <h3 className={styles.doYouHave}>DO YOU HAVE A QUESTION?</h3>
                </div>
              </div>
            </div>
            <div className={styles.divrow2}>
              <div className={styles.divcolLg10}>
                <div className={styles.center}>
                  <button className={styles.button}>
                    <div className={styles.linkSend}>Send your message</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoGlobalSystem />
    </section>
  );
};

export default Section;
