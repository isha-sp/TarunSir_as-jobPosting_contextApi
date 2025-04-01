
import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const { addJob } = useJobs();
  const navigate = useNavigate();
  const [job, setJob] = useState({ title: "", description: "", company: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    navigate("/");
  };

  return (
    <div>
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={(e) => setJob({ ...job, title: e.target.value })} required />
        <input type="text" placeholder="Company" onChange={(e) => setJob({ ...job, company: e.target.value })} required />
        <textarea placeholder="Description" onChange={(e) => setJob({ ...job, description: e.target.value })} required />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default CreateJob;
