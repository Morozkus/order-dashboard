import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes/router';
import Information from '../pages/Information';

const AppRouter = () => {
 return (
  <Routes>

   {routes.map((route, index) =>
    <Route key={route.path} path={route.path} Component={route.Component} />
   )}

   <Route path='*' Component={Information} />
  </Routes>
 )
}

export default AppRouter