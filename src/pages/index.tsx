import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { routes } from '@/shared/utils'

import LoginPage from '@/pages/login'
import { BaseLayout } from '@/app/layouts'
const DashboardPage = React.lazy(() => import('@/pages/dashboard'))

export const routing = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routes.DASHBOARD,
    element: <BaseLayout />,
    children: [
      {
        path: routes.DASHBOARD,
        element: <DashboardPage />,
      },
    ],
  },
])
