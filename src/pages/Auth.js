import MainHeader from "../components/MainHeader";
import EmailField1 from "../components/EmailField1";
import EmailField from "../components/EmailField";
import InfoGlobalSystem from "../components/InfoGlobalSystem";
import styles from "./Auth.module.css";
import Frame from "../components/Frame";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <Frame />
      <main className={styles.firstNameFieldPairWrapper}>
        <div className={styles.firstNameFieldPair} >
        {/* <form className={styles.firstNameFieldPair}> */}
          <EmailField1 />
          <EmailField />
        {/* </form> */}
        </div>
      </main>
      <InfoGlobalSystem />
    </div>
  );
};

export default Auth;
