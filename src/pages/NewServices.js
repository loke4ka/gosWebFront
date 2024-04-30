import Frame from "../components/Frame";
import Divcontainer from "../components/Divcontainer";
import Section from "../components/Section";
import styles from "./NewServices.module.css";

const NewServices = () => {
  return (
    <div className={styles.newServices}>
      <Frame />
      <section className={styles.iconMargin}>
        <Divcontainer />
      </section>
      <Section />
    </div>
  );
};

export default NewServices;
