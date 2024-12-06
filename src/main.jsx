import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StateProvider } from './contexts/StateContext.jsx'
import { ToastContainer } from 'react-toastify'
import { RiProgress4Fill } from 'react-icons/ri'
import { ProgressProvider } from './contexts/ProgressContext.jsx'
import { DataProvider } from './contexts/DataContext.jsx'
import { MobileProvider } from './contexts/MobileContext.jsx'
import { PanelProvider } from './contexts/PanelContext.jsx'
import { MessageProvider } from './contexts/MessageContext.jsx'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <MessageProvider>
        <MobileProvider>
          <PanelProvider>
            <ProgressProvider>
              <DataProvider>
                <QueryClientProvider client={queryClient}>
                  <RouterProvider router={router} />
                  <ToastContainer />
                </QueryClientProvider>
              </DataProvider>
            </ProgressProvider>
          </PanelProvider>
        </MobileProvider>
      </MessageProvider>
    </StateProvider>

  </React.StrictMode>,
)
