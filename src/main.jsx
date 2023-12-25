import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";

import './index.css'
import { router } from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProbider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
   <QueryClientProvider  client={queryClient}>
   <RouterProvider router={router} />
   </QueryClientProvider>

    </AuthProvider>
  
)
