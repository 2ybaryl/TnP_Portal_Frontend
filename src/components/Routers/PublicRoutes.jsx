import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRoutes = (props) => {
    const pathArray = [
        {
            path: "/student/login",
            //   component: <SignIn />
        },
        {
            path: "/student/forgot",
            //   component: <ForgotPassword />
        },
        {
            path: "/student/reset",
            //   component: <ResetPassword />
        },
        {
            path: "/student/register",
            // component: <ResetPassword />
        },
        {
            path: "/admin/login",
            //   component: <SignIn />
        },
        {
            path: "/admin/forgot",
            //   component: <ForgotPassword />
        },
        {
            path: "/admin/reset",
            //   component: <ResetPassword />
        }
    ];
    return (
        <>
            <Routes>
                {
                    pathArray.map((path) => {
                        <Route exact path={path.path} element={path.component} />
                    })
                }
                <Route exact path='*' element={<Navigate to='/student/login' />} />
            </Routes>
        </>
    )
}

export default PublicRoutes
