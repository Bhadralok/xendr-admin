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
import ResetPassword from "./Pages/ResetPassword";
import Dashboard from "./Pages/Dashboard";
import DashboardLayout from "./Layout/DashboardLayout";
import User from "./Pages/User";
import RegisteredRiders from "./Pages/RegisteredRiders";
import PageNotFound from "./Pages/PageNotFound";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/user" element={<User />} />
          <Route
            path="/dashboard/registered-riders"
            element={<RegisteredRiders />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
