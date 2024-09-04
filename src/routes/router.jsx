import { createBrowserRouter } from "react-router-dom";
import React from "react";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import SignInPage from "../pages/sign-in/SignInPage";
import HomePage from "../pages/home/HomePage";
import MainPage from "../pages/main/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
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
