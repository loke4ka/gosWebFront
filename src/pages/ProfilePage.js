import Frame from "../components/Frame";
import Background from "../components/Background";
import Footer from "../components/Footer";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  
  return (
    <div className={styles.profilePage}>
      <div className={styles.rectangle} />
      <main className={styles.profileInfo}>
        <section className={styles.header}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/background@2x.png"
          />
          <Frame
            frameAlignSelf="unset"
            frameFlex="1"
            framePadding="var(--padding-base) var(--padding-3xl-9) var(--padding-base) var(--padding-5xl-4)"
            frameDivHeight="unset"
          />
        </section>
        <section className={styles.backgroundWrapper}>
          <Background />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
