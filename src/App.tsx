import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';

import { Layout } from '@/components/layout';
import { AboutPage } from '@/pages/about-page';
import { MainPage } from '@/pages/main-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { TeacherModalPage } from '@/pages/teacher-modal-page';

import './styles/index.scss';

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration />
        <Layout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
        children: [
          {
            path: '/teacher/:teacherId',
            element: <TeacherModalPage />,
          },
        ],
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
