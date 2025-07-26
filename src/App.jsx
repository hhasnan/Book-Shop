import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'


const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout />}>
        <Route path='/' element={<Home/>}/>
      </Route>
      </>
    )
  )

  return <RouterProvider router={Router}/>
}

export default App
