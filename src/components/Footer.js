import styles from "./Footer.module.css";

const Footer = () => {
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    window.location.href = "/";
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.twitterTooltip}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
        <div className={styles.text}>Follow us</div>
      </div>
      <div className={styles.facebookTooltip}>
        <img className={styles.rectangleIcon1} alt="" src="/rectangle-1.svg" />
        <div className={styles.text1}>Like us</div>
      </div>
      <div className={styles.dribbleTooltip}>
        <img className={styles.rectangleIcon2} alt="" src="/rectangle.svg" />
        <div className={styles.text2}>Follow us</div>
      </div>
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.textParent}>
            <h1 className={styles.text3}>Thank you for supporting us!</h1>
            <h2 className={styles.text4}>
              Let's get in touch on any of these platforms.
            </h2>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.twitterButtonParent}>
              <div className={styles.twitterButton}>
                <div className={styles.wrapperOval}>
                  <img
                    className={styles.ovalIcon}
                    loading="lazy"
                    alt=""
                    src="/oval.svg"
                  />
                </div>
                <div className={styles.iconssocialtwitter14px}>
                  <div className={styles.twitter}></div>
                </div>
              </div>
              <div className={styles.facebookButton}>
                <div className={styles.wrapperOval1}>
                  <img
                    className={styles.ovalIcon1}
                    loading="lazy"
                    alt=""
                    src="/oval-1.svg"
                  />
                </div>
                <div className={styles.iconssocialfacebook144px}>
                  <div className={styles.facebook}></div>
                </div>
              </div>
              <div className={styles.dribbleButton}>
                <div className={styles.wrapperOval2}>
                  <img
                    className={styles.ovalIcon2}
                    loading="lazy"
                    alt=""
                    src="/oval-2.svg"
                  />
                </div>
                <div className={styles.iconssocialdribble14px}>
                  <div className={styles.dribble}></div>
                </div>
              </div>
              <div className={styles.githubButton}>
                <div className={styles.wrapperOval3}>
                  <img
                    className={styles.ovalIcon3}
                    loading="lazy"
                    alt=""
                    src="/oval-3.svg"
                  />
                </div>
                <div className={styles.iconssocialgithub14px}>
                  <div className={styles.github}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.githubTooltip}>
        <img className={styles.rectangleIcon3} alt="" src="/rectangle-3.svg" />
        <div className={styles.text5}>Star on Github</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.separatorWrapper}>
          <img
            className={styles.separatorIcon}
            loading="lazy"
            alt=""
            src="/separator-1.svg"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.textGroup}>
            <div className={styles.text6}>© 2024</div>
            <div className={styles.creativeTimParent}>
              <div className={styles.creativeTim}>
                <div className={styles.text7}></div>
              </div>
              <div className={styles.text8}>.</div>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.creativeTim1}>
              <div className={styles.text9} onClick={() => {handleLogout()}} style={{cursor: 'pointer'}}>Log out</div>
            </div>
            <div className={styles.aboutUs}>
              <div className={styles.text10}>About Us</div>
            </div>
            <div className={styles.blog}>
              <div className={styles.text11}>Blog</div>
            </div>
            <div className={styles.license}>
              <div className={styles.text12}>License</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
