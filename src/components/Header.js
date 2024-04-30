import Frame from "./Frame";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <Frame
        frameAlignSelf="stretch"
        frameFlex="unset"
        framePadding="var(--padding-base) var(--padding-4xl) var(--padding-base) var(--padding-5xl-4)"
        frameDivHeight="20px"
      />
      <div className={styles.divcontainerWrapper}>
        <div className={styles.divcontainer}>
          <div className={styles.divframe}>
            <div className={styles.center}>
              <h1 className={styles.findTheRight}>
                Find the right internship for you
              </h1>
            </div>
            <div className={styles.divdescription}>
              <div className={styles.divdescLeft}>
                <div className={styles.p}>
                  <div className={styles.anInternshipIsContainer}>
                    <span className={styles.anInternshipIsContainer1}>
                      <p className={styles.anInternshipIs}>
                        An internship is a professional learning experience that
                        offers meaningful, practical work related to a student’s
                        field of study or
                      </p>
                      <p className={styles.careerInterestAn}>
                        career interest. An internship gives a student the
                        opportunity for career exploration and development, and
                        to learn new skills. It
                      </p>
                      <p className={styles.offersTheEmployer}>
                        offers the employer the opportunity to bring new ideas
                        and energy into the workplace, develop talent and
                        potentially build a
                      </p>
                      <p className={styles.pipelineForFuture}>
                        pipeline for future full-time employees. Internships are
                        supervised, structured learning experiences in a
                        professional setting that
                      </p>
                      <p className={styles.allowYouTo}>
                        allow you to gain valuable work experience in a
                        student’s chosen field of study. Internships require a
                        minimum of 120 hours
                      </p>
                      <p className={styles.typicallyAtLeast}>
                        (typically, at least 10 hours per week during the fall
                        and spring and either part-time or full-time during the
                        summer).
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
