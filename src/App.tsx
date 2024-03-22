import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { IssuesProvider } from './context/issues.context'
import { queryClient } from './lib/api/react-query'
import { router } from './page/routes'

export function App() {
  return (
    <ThemeProvider storageKey="github-blog-theme" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <IssuesProvider>
          <RouterProvider router={router} />
        </IssuesProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
