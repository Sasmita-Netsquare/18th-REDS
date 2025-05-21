import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import PublicLayout from "./layouts/PublicLayout";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Delegates from "./pages/delegates/Delegates";
import Events from "./pages/events/Events";
import Speakers from "./pages/speakers/Speakers";
import Sponsors from "./pages/sponsors/Sponsors";
import Users from "./pages/users/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes go here inside PublicLayout and ProtectedLayout */}
      <Route element={<PublicLayout />}>
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/delegates" element={<Delegates />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
