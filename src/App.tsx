import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AgendaPage from "./pages/AgendaPage";
import HomePage from "./pages/HomePage";
import InvestorMeetPage from "./pages/InvestorMeetPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/investor-meet" element={<InvestorMeetPage />} />
      </Route>
    </Routes>
  );
};

export default App;
