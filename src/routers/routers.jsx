import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";
import { LoginPage } from "../pages/LoginPage";
import { BlogPage } from "../pages/BlogPage";
import ShopPage from "../pages/ShopPage";
import PlantCarePage from "../pages/PlantCarePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home-page"} />,
      },
      {
        path: "home-page",
        element: <HomePage />,
      },
      {
        path: "home-page/:plantId",
        element: <DetailPage />,
      },
      {
        path: "sing-in",
        element: <LoginPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "shop",
        element: <ShopPage/>,
      },
      {
        path: "plant-care",
        element: <PlantCarePage/>,
      },

    ],
   
  },
]);
