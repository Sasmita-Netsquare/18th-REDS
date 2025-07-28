import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components";
import PublicLayout from "./layouts/PublicLayout";
import AgendaPage from "./pages/AgendaPage";
import EnquireNowPage from "./pages/EnquireNowPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
  <>
   <ScrollToTop />
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/gbb-xclusive-investor-developer-operator-meet" element={<EnquireNowPage />} />
      </Route>
    </Routes>
  </>

  );
};

export default App;
