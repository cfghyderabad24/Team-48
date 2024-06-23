import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Rights from './components/Rights';
import Volunteer from './components/Volunteer';
import Donor from './components/Donor';
import Login from './components/Login';
import Schemes from './components/Schemes';
import Products from './components/Products';
import Parent from './components/Parent'
import AdminUpload from './components/AdminUpload'
import AdminTable from './components/AdminTable'
import InstructorAtt from './components/InstructorAtt';
import InstructorImg from './components/InstructorImg';
import InstructorProg from './components/InstructorProg';


function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'gallery',
          element:<Gallery/>
        },
        {
          path:'schemes',
          element:<Schemes/>
        },
        {
          path:'rights',
          element:<Rights/>
        },
        {
          path:'products',
          element:<Products/>
        },
        {
          path:'volunteer',
          element:<Volunteer/>
        },
        {
          path:'donor',
          element:<Donor/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'parent',
          element:<Parent/>
        },
        {
          path:'admin-upload',
          element:<AdminUpload/>
        },
        {
          path:'admin-table',
          element:<AdminTable/>
        },
        {
          path:'instructor-attendance',
          element:<InstructorAtt/>
        },
        {
          path:'instructor-uploadimg',
          element:<InstructorImg/>
        },
        {
          path:'instructor-uploadprogress',
          element:<InstructorProg/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
