import LastNameField from "./LastNameField";
import styles from "./EmailField.module.css";
import { useState } from "react";
import axios from "axios";

const EmailField = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    console.log(email, password);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: email,
        password: password
      });

      console.log(response.data);

      localStorage.setItem('user_id', response.data.user_id);

      setEmail("");
      setPassword("");
      window.location.href = '/profile-page' ;
    
    } catch (error) {
      console.error(error);
    }

    setLoading(false); 
  };


  return (
    <div className={styles.emailField}>
      <div className={styles.loginWrapper}>
        <h3 className={styles.login}>Login</h3>
      </div>
      <div className={styles.frameParent}>
        <LastNameField
          firstName="Email"
          firstNamePlaceholder="Email"
          propPadding="unset"
          propMinWidth="36px"
          propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-sm-3)"
          setType={"email"}
          setValue={setEmail}
        />
        <LastNameField
          firstName="Password"
          firstNamePlaceholder="Password"
          propPadding="unset"
          propMinWidth="62px"
          propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-sm-3)"
          setType={"password"}
          setValue={setPassword}
        />
      </div>
      <button className={styles.frame} disabled={loading} onClick={handleSubmit}>
      {loading ? <span>Загрузка...</span> : <b className={styles.login1}>Login</b>}
      </button>
    </div>
  );
};

export default EmailField;
