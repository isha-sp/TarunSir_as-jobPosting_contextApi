
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, { id: uuidv4(), ...job }]);
  };

  const editJob = (id, updatedJob) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...updatedJob, id } : job)));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, editJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
