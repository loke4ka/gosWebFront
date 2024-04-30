import { useMemo } from "react";
import styles from "./Frame.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import EmailField1 from "./EmailField1";
import EmailField from "./EmailField";

const Frame = ({ frameAlignSelf, frameFlex, framePadding, frameDivHeight }) => {

  const userId = localStorage.getItem('user_id');

  const [profileData, setProfileData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);

  const openModalLogin = () => {
    setIsModalOpenLogin(true);
  };

  const closeModalLogin = () => {
    setIsModalOpenLogin(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/${userId}/`);
        setProfileData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [userId]);

  const frameStyle = useMemo(() => {
    return {
      alignSelf: frameAlignSelf,
      flex: frameFlex,
      padding: framePadding,
    };
  }, [frameAlignSelf, frameFlex, framePadding]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  return (
    <>
    <header className={styles.frame} style={frameStyle}>
      <div className={styles.globalOpportunitiesSystemWrapper}>
        <div className={styles.globalOpportunitiesSystem}>
          Global Opportunities System
        </div>
      </div>
      <div className={styles.frameParent}>
        <nav className={styles.frameWrapper}>
          <nav className={styles.frameGroup}>
            <div className={styles.homeWrapper}>
              <div className={styles.home}><a href="/">Home</a></div>
            </div>
            <div className={styles.services}><a href="/new-services">Services</a></div>
            <div className={styles.aboutUs}><a href="/new-about">About Us</a></div>
            <div className={styles.aboutUs}><a href="/jobs">Interships</a></div>
          </nav>
        </nav>
        {profileData.first_name ? 
        <button className={styles.frame1} onClick={ () => window.location.href = '/profile-page'}>
        <div className={styles.frameContainer} style={frameDivStyle} >
          <img className={styles.frameIcon} alt="" src ={`${profileData.profile_picture}`} />
        </div>
        <div className={styles.login} >{profileData.first_name}</div>
      </button>
       : 
        <button className={styles.frame1} onClick={openModal}>
          <div className={styles.frameContainer} style={frameDivStyle} >
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
          <div className={styles.login} >Login</div>
        </button>
        }
      </div>
    </header>
    {isModalOpen && (
        <div className={styles.modalbackground}>
          <div className={styles.modal}>
            <div className={styles.modalClose} onClick={() => setIsModalOpen(false)}>X</div>
            <div className={styles.modalContent}>
              <EmailField1 closeModal={() => setIsModalOpen(false)} />
              <button className={styles.frame1} onClick={openModalLogin} style={{marginLeft: '110px'}}>
                <div className={styles.frameContainer} style={frameDivStyle} >
                </div>
                <div className={styles.login} >Login</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpenLogin && (
        <div className={styles.modalbackground}>
          <div className={styles.modal}>
            <div className={styles.modalClose} onClick={() => setIsModalOpenLogin(false)}>X</div>
            <div className={styles.modalContent}>
              <EmailField closeModalLogin={() => setIsModalOpenLogin(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Frame;
