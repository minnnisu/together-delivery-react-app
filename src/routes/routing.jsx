import { createBrowserRouter } from "react-router-dom";
import React from "react";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignInPage from "../pages/signInPage/SignInPage";

const router = createBrowserRouter([
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
