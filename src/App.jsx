import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home'


const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Home/>}/>
      </>
    )
  )

  return <RouterProvider router={Router}/>
}

export default App
