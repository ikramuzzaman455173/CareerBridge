import { createBrowserRouter } from 'react-router-dom'
import MainLagoutPage from '../MainLagoutPage/MainLagoutPage'
import HomePage from '../HomePage/HomePage'
import BlogPage from '../BlogPage/BlogPage'
import BlogDetails from '../BlogPage/BlogDetails/BlogDetails'
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
        path: '/blog',
        element: <BlogPage/>
      },
      {
        path: 'blog-details',
        element:<BlogDetails/>
      }
      // {
      //   path: '/login',
      //   element: <Login />
      // },
      // {
      //   path: '/signUp',
      //   element: <SignUp />
      // },
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
