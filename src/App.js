
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import JobDetails from "./components/JobDetails";

const App = () => (
  <AuthProvider>
    <JobProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/create-job" element={<ProtectedRoute adminOnly><CreateJob /></ProtectedRoute>} />
          <Route path="/edit-job/:id" element={<ProtectedRoute adminOnly><EditJob /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </JobProvider>
  </AuthProvider>
);

export default App;
