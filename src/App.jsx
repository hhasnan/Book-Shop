import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from './layout/MainLayout'
import { ThemeProvider } from "./context/ThemeContext";
import Home from './pages/Home'
import ExploreBook from './pages/ExploreBook'
import AuthPage from "./pages/AuthPage";
import Logout from "./pages/Logout";
import ReadMore from "./pages/ReadMore";
import CartPage from "./pages/CartPage";
import Build from "./pages/Build";
import ProtectiveRoutes from "./routes/ProtectiveRoutes";


const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<ExploreBook />} />
          <Route path='/add-to-cart' element={<CartPage />} />
        </Route>
        <Route path='/explore/read-more/:id' element={<ReadMore />} />
          <Route path='/payment' element={<ProtectiveRoutes><Build /></ProtectiveRoutes>} />
        <Route path='/sign-in' element={<AuthPage />} />
        <Route path='/log-out' element={<Logout />} />
      </>
    )
  )

  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
