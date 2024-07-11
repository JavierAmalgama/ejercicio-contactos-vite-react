import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage/LoginPage";
import LogoutPage from "./views/LogoutPage";
import Error404 from "./views/Error404";
import DashboardPage from "./views/DashboardPage/DashboardPage";
import ViewContactPage from "./views/ViewContactPage/ViewContactPage";
import EditContactPage from "./views/EditContactPage";
import DeleteContactPage from "./views/DeleteContactPage";
import UserDetail from "./views/UserDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contact" element={<ViewContactPage />} />
            <Route path="/edit-contact" element={<EditContactPage />} />
            <Route path="/delete-contact" element={<DeleteContactPage />} />
            <Route path="/user-detail/:user_id" element={<UserDetail />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
