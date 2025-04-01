
import { useJobs } from "../context/JobContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { jobs, deleteJob } = useJobs();
  const { user } = useAuth();

  return (
    <div>
      <h2>Job Listings</h2>
      {user?.role === "admin" && <Link to="/create-job">Create Job</Link>}
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
            {user?.role === "admin" && (
              <>
                <Link to={`/edit-job/${job.id}`} style={{ marginLeft: "10px" }}>Edit</Link>
                <button onClick={() => deleteJob(job.id)} style={{ marginLeft: "10px" }}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
