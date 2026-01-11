import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginLayout from "./Layout/LoginLayout";
import Page404 from "./Pages/Page404";
import Login from "./Pages/Login";
import Verify from "./Components/Verify";
import ForgotPassword from "./Pages/ForgotPassword";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify" element={<Verify />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
