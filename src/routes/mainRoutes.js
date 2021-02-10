import { lazy } from "react";

export const mainRoutes = [
    {
        path:'/',
        name: 'Home',
        exact: true,
        component: lazy(() => 
        import('../pages/home/Home')),
        isPrivat: false,
        restricted: false
    },
    {
        path:'/register',
        name: 'Sing up',
        exact: true,
        component: lazy(() => 
        import('../pages/login/Login')),
        isPrivat: false,
        restricted: true
    },
    {
        path:'/login',
        name: 'Log in',
        exact: true,
        component: lazy(() => 
        import('../pages/login/Login')),
        isPrivat: false,
        restricted: true
    },
    {
        path:'/phonebook',
        name: 'Phone Book',
        exact: true,
        component: lazy(() => 
        import('../pages/phoneBook/PhoneBook')),
        isPrivat: true,
        restricted: false
    },
]