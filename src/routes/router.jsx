import { createBrowserRouter } from "react-router-dom";
import React from "react";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import SignInPage from "../pages/sign-in/SignInPage";

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
