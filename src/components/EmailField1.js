import LastNameField from "./LastNameField";
import styles from "./EmailField1.module.css";
import { useState } from "react";
import axios from 'axios';

const EmailField1 = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Устанавливаем состояние загрузки в true

    const username = email;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password : password,
        city: City,
        country: Country,
        user_role: role,
        username: username
      });

      // Обработка успешного ответа от сервера
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      // Обработка ошибок при отправке на сервер
      console.error('Ошибка при отправке данных:', error);
      setLoading(false);
    }
  };

  const testFunc = () => {
    console.log(firstName, lastName, email, phoneNumber, password , City, Country, role);
  };



  return (
    <div className={styles.emailField}>
      <div className={styles.registerLoginContainer}>
        <h3 className={styles.register}>Register</h3>
      </div>
      <LastNameField firstName="First Name" firstNamePlaceholder="First Name" setValue={setFirstName}  setType={"text"}/>
      <LastNameField
        firstName="Last Name"
        firstNamePlaceholder="Last Name"
        propPadding="unset"
        propMinWidth="69px"
        propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-2xs)"
        setValue={setLastName}
        setType={"text"}
      />
      <LastNameField
        firstName="Email"
        firstNamePlaceholder="Email"
        propPadding="unset"
        propMinWidth="36px"
        propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-2xs)"
        setValue={setEmail}
        setType={"email"}
      />
      <LastNameField
        firstName="Phone Number"
        firstNamePlaceholder="Phone Number"
        propPadding="unset"
        propMinWidth="100px"
        propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-2xs)"
        setValue={setPhoneNumber}
        setType={"tel"}
      />
      <LastNameField
        firstName="Password"
        firstNamePlaceholder="Password"
        propPadding="0px 0px var(--padding-xs)"
        propMinWidth="62px"
        propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-2xs)"
        setValue={setPassword}
        setType={"password"}
      />
      <LastNameField
        firstName="City"
        firstNamePlaceholder="City"
        propPadding="unset"
        propMinWidth="26px"
        propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-2xs)"
        setValue={setCity}
        setType={"text"}
      />
      <LastNameField
        firstName="Country"
        firstNamePlaceholder="Country"
        propPadding="unset"
        propMinWidth="53px"
        propPadding1="var(--padding-7xs) 0px var(--padding-4xs) var(--padding-2xs)"
        setValue={setCountry}
        setType={"text"}
      />
      <div className={styles.roleParent}>
        <b className={styles.role}>Role</b>
        <select
          className={styles.newUserRegistration}
          name="role"
          value={role}
          onChange={handleChangeRole}
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="consultant">Consultant</option>
        </select>
      </div>
      <button type="submit" className={styles.frame} disabled={loading} onClick={handleSubmit}>
        {loading ? <span>Загрузка...</span> : <b className={styles.register1}>Register</b>}
      </button>
    </div>
  );
};

export default EmailField1;
