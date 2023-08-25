import { createBrowserRouter } from 'react-router-dom'
import MainLagoutPage from '../MainLagoutPage/MainLagoutPage'
import HomePage from '../HomePage/HomePage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLagoutPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
    ],
  },
  // {
  //   path: '/dashboard',
  //   element:<DashboardLayout />,
  //   // errorElement: <ErrorPage />,
  //   // children: [
  //   //   {

  //   //   },
  //   // ]
  // }
])
