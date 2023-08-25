import { createBrowserRouter } from 'react-router-dom'
import MainLagoutPage from '../MainLagoutPage/MainLagoutPage'
import HomePage from '../HomePage/HomePage'
import Login from '../Components/Login/Login'
<<<<<<< HEAD
import SignUp from '../Components/SignUp/SignUp'
=======
>>>>>>> development
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
        element: <Login></Login>
      },
<<<<<<< HEAD
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
=======
      // {
      //   path: '/signUp',
      //   element: <SignUp />
      // },
>>>>>>> development
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