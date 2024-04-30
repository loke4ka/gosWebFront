import styles from "./Background.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileEditModal from "./ProfileEditModal";
import TagModal from "./TagModal";

const Background = () => {
  
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTags, setIsModalOpenTags] = useState(false);


  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModalTags = () => {
    setIsModalOpenTags(true);
  };

  const handleCloseModalTags = () => {
    setIsModalOpenTags(false);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const user_id = localStorage.getItem('user_id');
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/${user_id}/`);
        setProfileData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }      
    };

    fetchProfile();
  }, []);

  return (
    <>
    <div className={styles.background}>
      <div className={styles.rectangle} />
      <div className={styles.backgroundInstances}>
        <div className={styles.frameParent}>
          <div className={styles.dribbleInstancesParent}>
            <div className={styles.dribbleInstances}>
              <div className={styles.githubInstances}>
                <div className={styles.githubInstancesInner}>
                  <div className={styles.textParent}>
                    <b className={styles.text}>89</b>
                    <div className={styles.loremIpsumDolor}>Comments</div>
                  </div>
                </div>
                <div className={styles.wrapperAvatar}>
                  <img
                    className={styles.avatarIcon}
                    loading="lazy"
                    alt=""
                    src= {profileData?.profile_picture || "/avatar@2x.png"}
                  />
                </div>
              </div>
            </div>
            <div className={styles.socialIconsInstances}>
              <h1 className={styles.popularCourse}>
                <span>
                  <span>{profileData?.first_name} {profileData?.last_name},</span>
                  <span className={styles.span}>{profileData?.age}</span>
                </span>
              </h1>
              <div className={styles.videoCard}>{profileData?.city}, {profileData?.country}</div>
            </div>
            <div className={styles.socialIconsInstances1}>
              <div className={styles.videoCard1}>
                Solution Manager - Creative Tim Officer
              </div>
              <div className={styles.videoCard2}>
                University of Computer Science
              </div>
            </div>
          </div>
          <div className={styles.separatorInstancesWrapper}>
            <div className={styles.separatorInstances}>
              <div className={styles.textGroup}>
                <b className={styles.text1}>22</b>
                <div className={styles.loremIpsumDolor1}>Friends</div>
              </div>
              <div className={styles.textContainer}>
                <b className={styles.text2}>10</b>
                <div className={styles.loremIpsumDolor2}>Photos</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundInstancesInner}>
          <div className={styles.connectParent}>
            <button className={styles.connect} onClick={handleEditClick}>
              <div className={styles.rectangle1} />
              <div className={styles.text3}>EDIT</div>
            </button>
            <button className={styles.message} onClick={handleOpenModalTags}>
              <div className={styles.rectangle2} />
              <div className={styles.text4}>TAGS</div>
            </button>
            
          </div>
        </div>
      </div>
      <img
        className={styles.separatorIcon}
        loading="lazy"
        alt=""
        src="/separator.svg"
      />
      <div className={styles.backgroundWrapper}>
        <div className={styles.background1} />
      </div>
      <div className={styles.backgroundInner}>
        <div className={styles.frameDiv}>
          <div className={styles.text5}>
            {profileData?.about_me}
            {/* An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range. */}
          </div>
          <div className={styles.showMoreWrapper}>
            <div className={styles.showMore}>
              <div className={styles.text6}>Show more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
          {isModalOpen && <ProfileEditModal onClose={handleCloseModal} />}
          {isModalOpenTags && <TagModal onClose={handleCloseModalTags} />}
            </>
  );
};

export default Background;
