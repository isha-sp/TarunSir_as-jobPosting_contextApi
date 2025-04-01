
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";

const EditJob = () => {
  const { id } = useParams();
  const { jobs, editJob } = useJobs();
  const navigate = useNavigate();

  const jobToEdit = jobs.find((job) => job.id === id);
  const [job, setJob] = useState(jobToEdit || { title: "", description: "", company: "" });

  if (!jobToEdit) return <h2>Job Not Found</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();
    editJob(id, job);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={job.title} onChange={(e) => setJob({ ...job, title: e.target.value })} required />
        <input type="text" value={job.company} onChange={(e) => setJob({ ...job, company: e.target.value })} required />
        <textarea value={job.description} onChange={(e) => setJob({ ...job, description: e.target.value })} required />
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;
