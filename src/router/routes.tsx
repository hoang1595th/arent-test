import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const TopPage = lazy(() => import('../pages/top-page'))
const MyRecordPage = lazy(() => import('../pages/my-record'))
const ColumnPage = lazy(() => import('../pages/column'))
const NotFoundPage = lazy(() => import('../pages/not-found'))

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/top-page" replace /> },
  { path: '/top-page', element: <TopPage /> },
  { path: '/my-record', element: <MyRecordPage /> },
  { path: '/column', element: <ColumnPage /> },
  { path: '*', element: <NotFoundPage /> },
]


