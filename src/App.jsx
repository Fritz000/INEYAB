import React, { useState, useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar'
import RootLayout from './layout/RootLayout';
import Home from './pages/Home'
import Contact from './pages/Contact'
import OurCharges from './pages/OurCharges'
import Services from './pages/Services'


const App = () => {
// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}> 
      <Route index element={<Home/>} />
        <Route path='/OurCharges' element={<OurCharges />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Route>
  )
);

  return <RouterProvider router={router} />;
};

export default App
