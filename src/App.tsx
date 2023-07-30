
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './utils/routes'

function App() {
 

  return (
   <div className=" ">
    <RouterProvider router={routes}/>
   </div>
  )
}

export default App
