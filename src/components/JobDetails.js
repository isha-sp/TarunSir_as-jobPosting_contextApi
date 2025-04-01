// src/pages/JobDetails.js
import { useParams } from "react-router-dom";
import { useJobs } from "../context/JobContext";

const JobDetails = () => {
  const { id } = useParams();
  const { jobs } = useJobs();
  const job = jobs.find((j) => j.id === id);

  if (!job) return <h2>Job Not Found</h2>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Company: {job.company}</p>
    </div>
  );
};

export default JobDetails;
