import { useMemo } from "react"
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import { useAuth } from "./AuthContext"
import LoginPage from "./features/LoginPage"

function ProtectedRoutes() {
    const {auth} = useAuth()

    if(!auth) return <Navigate to={'/login'}/>

    return <Outlet/>

}

export function Routes() {
    const { auth  } = useAuth()

    let AuthRoutes : {}[];

    const PublicRoutes = [
        {
            path: "/",
            element: <LoginPage/>
        },
        {
            path: "/login",
            element: <LoginPage/>
        },
        {
            path: "*",
            element: <Navigate to={'/login'}/>
        },
    ]

    AuthRoutes = [
        {
            path: '/',
            element: <ProtectedRoutes/>,
            children: [
                {
                    path: "/",
                    element: <Navigate to={'/users'}/>
                },
                {
                    path: "/users",
                    element: <div/>
                },
                {
                    path: "/AddUser",
                    element: <div/>
                },
            ]
        }
    ]

    const routes = useMemo(() => createBrowserRouter([
        ...PublicRoutes,
        ...(auth ? AuthRoutes : [])
    ]), [auth])

    return <RouterProvider router={routes}/>
}

export default Routes;