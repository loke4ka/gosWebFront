import { useMemo } from "react";
import styles from "./LastNameField.module.css";

const LastNameField = ({
  firstName,
  firstNamePlaceholder,
  propPadding,
  propMinWidth,
  propPadding1,
  setValue,
  setType,
}) => {
  const lastNameFieldStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const firstNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const phoneNumberFieldStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.lastNameField} style={lastNameFieldStyle}>
      <b className={styles.firstName} style={firstNameStyle}>
        {firstName}
      </b>
      <div className={styles.phoneNumberField} style={phoneNumberFieldStyle}>
        <input
          className={styles.firstName1}
          placeholder={firstNamePlaceholder}
          type = {setType}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default LastNameField;
