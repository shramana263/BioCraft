import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StateProvider } from './contexts/StateContext.jsx'
import { ToastContainer } from 'react-toastify'
import { RiProgress4Fill } from 'react-icons/ri'
import { ProgressProvider } from './contexts/ProgressContext.jsx'
import { DataProvider } from './contexts/DataContext.jsx'
import { MobileProvider } from './contexts/MobileContext.jsx'
import { PanelProvider } from './contexts/PanelContext.jsx'
import { MessageProvider } from './contexts/MessageContext.jsx'
import PlayGround from './router/Playground.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider>
        <MessageProvider>
          <MobileProvider>
            <PanelProvider>
              <ProgressProvider>
                <DataProvider>
                  <QueryClientProvider client={queryClient}>
                    {/* <RouterProvider router={router} /> */}
                    <BrowserRouter>
                      <PlayGround />
                    </BrowserRouter>
                    <ToastContainer />
                  </QueryClientProvider>
                </DataProvider>
              </ProgressProvider>
            </PanelProvider>
          </MobileProvider>
        </MessageProvider>
      </ThemeProvider>
    </StateProvider>

  </React.StrictMode>,
)
