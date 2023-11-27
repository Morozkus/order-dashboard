import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Order from '../pages/Order';
import { routes } from '../routes/router';

const AppRouter = () => {
    return (
        <Routes>

            {routes.map((route, index) =>
                <Route key={index} path={route.path} Component={route.Component} />
            )}

            <Route path='*' Component={Order} />
        </Routes>
    )
}

export default AppRouter