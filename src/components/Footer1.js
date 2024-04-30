import styles from "./Footer1.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.footerInfo}>
        <div className={styles.cSHelpFAQ}>
          <div className={styles.customerService}>Customer Service</div>
          <div className={styles.helpFaq}>Help / FAQ</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.giftCardsParent}>
                <div className={styles.giftCards}>Gift Cards</div>
                <div className={styles.contactUs}>Contact Us</div>
                <div className={styles.about}>About</div>
                <div className={styles.ourStory}>Our Story</div>
                <div className={styles.journal}>Journal</div>
                <div className={styles.reviews}>Reviews</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.subscribeToOurNewsletterWrapper}>
                <h2 className={styles.subscribeToOur}>
                  Subscribe to our newsletter
                </h2>
              </div>
              <input
                className={styles.logicalOperator}
                placeholder="Enter your email"
                type="text"
              />
            </div>
          </div>
          <div className={styles.totalTalisStakedWrapper}>
            <button className={styles.totalTalisStaked}>
              <b className={styles.submit}>SUBMIT</b>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.copyrightNoticeWrapper}>
        <div className={styles.copyrightNotice}>
          <div className={styles.gos2024Parent}>
            <div className={styles.gos2024}>© GOS 2024</div>
            <div className={styles.allImagesAnd}>
              All images and content may not be used without permission
            </div>
          </div>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame1.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
