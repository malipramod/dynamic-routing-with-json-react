import React from 'react';
import { IRoute } from "../model/IRoute";
import { Home } from '../components/Home';
import { Contact } from '../components/Contact';
import { User } from '../components/User';


export const menuItems: Array<IRoute> = [
    { path: '/', title: 'Home', content: <Home />, exact: true },
    {
        path: '/contact',
        title: 'Contact',
        content: (
            <Contact
                email="pramodmaali@gmail.com"
                mobile="+91 99795 38985"
            />
        )
    },
    {
        path: '/user/:userId/:name',
        title: 'About',
        containParam: true,
        params: [{ id: "userId", value: "1" },{ id: "name", value: "pramod" }],
        content: (
            <User/>
        )
    },
]
