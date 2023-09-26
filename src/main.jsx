import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Layout/Layout.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import Donation from './pages/Donation/Donation';
import Statistics from './pages/Statistics/Statistics';
import SingleDonation from './components/SingleDonation/SingleDonation';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/donation.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/donation.json')
      },
      {
        path: '/donation-details/:id',
        element: <SingleDonation></SingleDonation>,
        loader: () => fetch('/donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
