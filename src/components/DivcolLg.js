import { useMemo } from "react";
import styles from "./DivcolLg.module.css";

const DivcolLg = ({
  icon,
  youAreGraduatingFrom,
  highSchooluniversityAnd,
  wantToFindAJob,
  propMinHeight,
  propMarginLeft,
  propRowGap,
  propWidth,
  propAlignSelf,
  propAlignSelf1,
  propWidth1,
  propMinWidth,
}) => {
  const divcolLg4Style = useMemo(() => {
    return {
      minHeight: propMinHeight,
      marginLeft: propMarginLeft,
    };
  }, [propMinHeight, propMarginLeft]);

  const divfeatureStyle = useMemo(() => {
    return {
      rowGap: propRowGap,
    };
  }, [propRowGap]);

  const ifaUniversitymarginStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const beforeStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const iconStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  const divfeatureBlockStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.divcolLg4} style={divcolLg4Style}>
      <div className={styles.divfeature} style={divfeatureStyle}>
        <div
          className={styles.ifaUniversitymargin}
          style={ifaUniversitymarginStyle}
        >
          <div className={styles.before} style={beforeStyle}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src={icon}
              style={iconStyle}
            />
          </div>
        </div>
        <div className={styles.divfeatureBlock} style={divfeatureBlockStyle}>
          <div className={styles.heading5}>
            <div className={styles.youAreGraduatingContainer}>
              <p className={styles.youAreGraduating}>{youAreGraduatingFrom}</p>
              <p className={styles.highSchooluniversityAnd}>
                {highSchooluniversityAnd}
              </p>
              <p className={styles.wantToFind}>{wantToFindAJob}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcolLg;
