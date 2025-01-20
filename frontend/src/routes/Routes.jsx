import React from 'react'
import UserRoot from '../pages/UserRoot'
import Home from '../pages/home'
import Guests from '../pages/guests'
import Add from '../pages/add'
import Favorites from '../pages/favorites'

const Routes = [
    {
        path: "",
        element: <UserRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/guests",
                element: <Guests />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/favorites",
                element: <Favorites />
            }
        ]
    }
]

export default Routes
