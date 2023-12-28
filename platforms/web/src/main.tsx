import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { translationMessages } from "@web/translations";

import DefaultLayout from "./components/Layout/Default";
import { IntlProvider, defaultLocale } from "./core";
import store from "./core/redux/utils/createStore";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import { ThemeProvider } from "./providers/Theme";
import BlankLayout from "./components/Layout/Blank";
import { LoginPage } from "./pages/Account/Login";
import { RegisterPage } from "./pages/Account/Register";
import LogoutPage from "./pages/Account/Logout";
import AuthProvider from "./providers/Auth";
import PublicRoute from "./components/Routes/PublicRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublishPage from "./pages/Publish";
import PublishArticle from "./pages/Publish/PublishArticle";
import PublishCategory from "./pages/Publish/PublishCategory";
import Articles from "./pages/Home/Articles";
import CategorizedArticles from "./pages/Home/CategorizedArticles";
import Article from "./pages/Home/Article";
import Index from "./pages/Index";

const container = document.getElementById("root");

const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  // {
  //   path: "/",
  //   element: (
  //     <DefaultLayout>
  //       <HomePage />
  //     </DefaultLayout>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <Articles />,
  //     },
  //     {
  //       path: "articles/:articleId",
  //       element: <Article />,
  //     },
  //     {
  //       path: "categories/:categoryId",
  //       element: <CategorizedArticles />,
  //     },
  //   ],
  // },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <BlankLayout>
          <LoginPage />
        </BlankLayout>
      </PublicRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <BlankLayout>
          <RegisterPage />
        </BlankLayout>
      </PublicRoute>
    ),
  },
  {
    path: "/sign-out",
    element: (
      <ProtectedRoute>
        <BlankLayout>
          <LogoutPage />
        </BlankLayout>
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "about",
  //   element: (
  //     <DefaultLayout>
  //       <AboutPage />
  //     </DefaultLayout>
  //   ),
  // },
  {
    path: "/publish",
    element: (
      <ProtectedRoute>
        <DefaultLayout>
          <PublishPage />
        </DefaultLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "article/:id",
        element: <PublishArticle />,
      },
      {
        path: "category/:id",
        element: <PublishCategory />,
      },
    ],
  },
  // {
  //   path: "/categories",
  //   element: (
  //     <DefaultLayout>
  //       <CategoriesPage />
  //     </DefaultLayout>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <Navigate to="/" />,
  //     },
  //     {
  //       path: ":id",
  //       element: <PublishArticle />,
  //     },
  //   ]
  // },
]);

root.render(
  <ReduxProvider store={store.store}>
    <PersistGate loading={<></>} persistor={store.persistor}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
        <ThemeProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </IntlProvider>
    </PersistGate>
  </ReduxProvider>,
);
