import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import AddNewDrug from './pages/AddNewDrug';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
          <Route path="addNewDrug" element={<AddNewDrug />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;