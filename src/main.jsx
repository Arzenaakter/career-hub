
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
    
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
    
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>
    
      },
      {
        path: 'blog',
        element: <Blog></Blog>
    
      },
    
     ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router}></RouterProvider>
)
