
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './utils/routes'
// import 'react-apexcharts/dist/react-apexcharts.css'; 

function App() {
 

  return (
   <div className=" ">
    <RouterProvider router={routes}/>
   </div>
  )
}

export default App
