import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const MyPage = lazy(() => import('../pages/my-page'))
const MyRecordPage = lazy(() => import('../pages/my-record'))
const ColumnPage = lazy(() => import('../pages/column'))
const NotFoundPage = lazy(() => import('../pages/not-found'))

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/my-page" replace /> },
  { path: '/my-page', element: <MyPage /> },
  { path: '/my-record', element: <MyRecordPage /> },
  { path: '/column', element: <ColumnPage /> },
  { path: '*', element: <NotFoundPage /> },
]


