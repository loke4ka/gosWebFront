import Frame from "../components/Frame";
import Divcontainer1 from "../components/Divcontainer1";
import Section2 from "../components/Section2";
import styles from "./NewAbout.module.css";

const NewAbout = () => {
  return (
    <div className={styles.newAbout}>
      <Frame
        frameAlignSelf="stretch"
        frameFlex="unset"
        framePadding="var(--padding-base) var(--padding-3xl-9) var(--padding-base) var(--padding-5xl-4)"
        frameDivHeight="20px"
      />
      <main className={styles.section}>
        <section className={styles.divcontainerWrapper}>
          <Divcontainer1 />
        </section>
        <Section2 />
        <section className={styles.frame}>
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
        </section>
      </main>
    </div>
  );
};

export default NewAbout;
