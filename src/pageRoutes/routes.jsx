import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {
  Login,
  Signup,
  Dashboard,
  ResetPasswordInit,
  ResetPasswordConfirm,
} from "../pages/index";
import { ProtectedRoute } from "../components/common/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/resetPassword",
        children: [
          {
            path: "init",
            element: <ResetPasswordInit />,
          },
          {
            path: "confirm",
            element: <ResetPasswordConfirm />,
          },
        ],
      },
    ],
  },
]);
