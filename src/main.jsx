
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
import JobDetails from './components/JobDetails/JobDetails';
import { JobCartData } from './loaders/GetJob';
import ErrorPage from './components/ErrorPage/ErrorPage';
import  { Toaster } from 'react-hot-toast';
import Footer from './components/Footer/Footer';




const router = createBrowserRouter([
  {
    
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader:({params})=>fetch(`features.JSON?=${params.id}`)
    
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:JobCartData
    
      },
      {
        path: 'blog',
        element: <Blog></Blog>
    
      },
      {
        path: '/',
        element: <Footer></Footer>
    
      },
      
     ]
     
  },
 
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
 <>
  <RouterProvider router={router}></RouterProvider>
  <Toaster></Toaster>
 </>
)
