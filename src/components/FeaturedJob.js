import Job from "./Job";
import styles from "./FeaturedJob.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from 'react-modal';


const FeaturedJob = () => {

  const [jobs, setJobs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [recommendations, setRecommendations] = useState('');


  const openModal = (job) => {
    setSelectedJob(job);
    setModalIsOpen(true);
  };

  const getRecommendations = () => {
    const user_id = localStorage.getItem('user_id');
    console.log(user_id,selectedJob.id);
    if (selectedJob) {
      axios.post('http://127.0.0.1:8000/api/get_recommendations/', {
        user_id: user_id, 
        job_id: selectedJob.id 
      })
      .then(response => {
        setRecommendations(response.data.recommendations);
      })
      .catch(error => {
        console.error('Ошибка при получении рекомендаций:', error);
      });
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getJobs = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/jobs/");
    return response.data;
  };
  
  const fetchJobs = async () => {
    const jobs = await getJobs();
    console.log(jobs);
    setJobs(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className={styles.featuredJob}>
      <div className={styles.heading}>
        <h1 className={styles.featuredJob1}>Featured job</h1>
        <button className={styles.button}>
          <div className={styles.primary}>View All</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright.svg"
          />
        </button>
      </div>
      <section className={styles.jobParent}>
        {/* <Job
          techicalSupportSpecialist="Techical Support Specialist"
          partTime="Part-time"
        />
        <Job
          techicalSupportSpecialist="Senior UX Designer"
          partTime="Full-Time"
          companyBackground="linear-gradient(90deg, ), #fff"
          companyBackgroundColor="unset"
          companyOverflow="unset"
          loactionMinWidth="64px"
        /> */}

{jobs.map(job => (
        <div key={job.id} onClick={() => openModal(job)}>
          <Job
            partTime={job.job_type}
            techicalSupportSpecialist={job.position}
            companyBackground="linear-gradient(90deg, ), #fff" 
            companyBackgroundColor="unset" 
            companyOverflow="unset" 
            loactionMinWidth="64px" 
            salary={job.salary}
            company={job.company_name}
            loaction={job.location}
            image={job.image}
          />
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{ content: { width: '50%', height: '50%',  alignContent: 'center', alignItems: 'center', justifySelf: 'center', marginTop: '10%'} }}>
        {selectedJob && (
          <div>
            <img src={selectedJob.image} alt="Job" />
            <p>{selectedJob.description}</p>
            <button onClick={closeModal}>Закрыть</button>
            <button onClick={getRecommendations}>Получить рекомендации</button>
            <p>{recommendations}</p>
          </div>
        )}
      </Modal>
        
      </section>
    </div>
  );
};

export default FeaturedJob;
