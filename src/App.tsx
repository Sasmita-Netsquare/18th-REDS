import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AgendaPage from "./pages/AgendaPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/agenda" element={<AgendaPage />} />
      </Route>
    </Routes>
  );
};

export default App;
