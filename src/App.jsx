import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage'
import LogoutPage from './views/LogoutPage'
import Error404 from './views/Error404'
import DashboardPage from './views/DashboardPage'
import ViewContactPage from './views/ViewContactPage'
import EditContactPage from './views/EditContactPage'
import DeleteContactPage from './views/DeleteContactPage'
import UserDetail from './views/UserDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/logout" element={<LogoutPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/contact" element={<ViewContactPage/>} />
          <Route path="/edit-contact" element={<EditContactPage/>} />
          <Route path="/delete-contact" element={<DeleteContactPage/>} />
          <Route path="/user-detail/:user_id" element={<UserDetail/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
