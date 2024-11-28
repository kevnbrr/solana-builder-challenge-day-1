import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { Courses } from '../pages/Courses';
import { CourseDetail } from '../pages/CourseDetail';
import { Achievements } from '../pages/Achievements';
import { Community } from '../pages/Community';
import { Discussions } from '../pages/Discussions';
import { Layout } from '../components/Layout';
import { ErrorBoundary } from '../components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'courses/:courseId',
        element: <CourseDetail />,
      },
      {
        path: 'achievements',
        element: <Achievements />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'discussions',
        element: <Discussions />,
      },
    ],
  },
]);