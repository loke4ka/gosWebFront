import Header from "../components/Header";
import Section1 from "../components/Section1";
import InfoGlobalSystem from "../components/InfoGlobalSystem";
import styles from "./NewInterships.module.css";

const NewInterships = () => {
  return (
    <div className={styles.newInterships}>
      <Header />
      <section className={styles.inter}>
        <Section1 />
        <InfoGlobalSystem />
      </section>
    </div>
  );
};

export default NewInterships;
