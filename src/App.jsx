import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import ExploreBook from './pages/ExploreBook'


const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/explore' element={<ExploreBook/>}/>
      </Route>
      </>
    )
  )

  return <RouterProvider router={Router}/>
}

export default App
