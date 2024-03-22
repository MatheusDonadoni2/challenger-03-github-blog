import { createBrowserRouter } from 'react-router-dom'

import { HeaderLayout } from './_layouts/headerLayout'
import { Home } from './home/home'
import { PostDetail } from './post-details/post-details'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post-details/:number',
        element: <PostDetail />,
      },
    ],
  },
])
