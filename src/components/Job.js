import { useMemo } from "react";
import styles from "./Job.module.css";

const Job = ({
  techicalSupportSpecialist,
  partTime,
  companyBackground,
  companyBackgroundColor,
  companyOverflow,
  loactionMinWidth,
  salary,
  company,
  loaction,
  image,
}) => {
  const jobStyle = useMemo(() => {
    return {
      background: companyBackground,
      backgroundColor: companyBackgroundColor,
      overflow: companyOverflow,
    };
  }, [companyBackground, companyBackgroundColor, companyOverflow]);

  const partTimeStyle = useMemo(() => {
    return {
      minWidth: loactionMinWidth,
    };
  }, [loactionMinWidth]);

  return (
    <div className={styles.job} style={jobStyle}>
      <div className={styles.heading}>
        <div className={styles.techicalSupportSpecialist}>
          {techicalSupportSpecialist}
        </div>
        <div className={styles.typeParent}>
          <div className={styles.type}>
            <div className={styles.partTime} style={partTimeStyle}>
              {partTime}
            </div>
          </div>
          <div className={styles.salary20000}>Salary: {salary}</div>
        </div>
      </div>
      <div className={styles.company}>
        <div className={styles.employersLogo}>
          <img
            className={styles.employersLogoIcon}
            loading="lazy"
            alt=""
            src={image}
          />
          {/* "/employers-logo.svg" */}
        </div>
        <div className={styles.info}>
          <div className={styles.googleInc}>{company}</div>
          <div className={styles.loaction}>
            <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
            <div className={styles.dhakaBangladesh}>{loaction}</div>
          </div>
        </div>
        <img
          className={styles.bookmarksimpleIcon}
          loading="lazy"
          alt=""
          src="/bookmarksimple.svg"
        />
      </div>
    </div>
  );
};

export default Job;
