import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import ExploreBook from './pages/ExploreBook'
import AuthPage from "./pages/AuthPage";
import Logout from "./pages/Logout";
import ReadMore from "./pages/ReadMore";


const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/explore' element={<ExploreBook/>}/>
      </Route>
        <Route path='/explore/read-more/:id' element={<ReadMore/>}/>
        <Route path='/sign-in' element={<AuthPage/>}/>
        <Route path='/log-out' element={<Logout/>}/>
      </>
    )
  )

  return <RouterProvider router={Router}/>
}

export default App
