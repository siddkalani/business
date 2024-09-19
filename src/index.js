import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/autoptimize_e8c0bc7e332d093819d345f6a980b03b.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/AboutUs/About";
import Main from "./components/Main";
import Contacts from "./components/Contacts/Contacts";
import Industries from './components/Industries/Industries'
import Insights from './components/Insights/Insights'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />
      },
      // {
      //   path: '/main',
      //   element: <Main/>
      // },
     
    //   {
    //   path: '/contact',
    //   element: <Contacts/>
      // },
      {
        path: '/services',
        element: <Insights/>
      },
      {
      path: '/industries',
      element: <Industries/>
    },
    {
      path: '/about',
      element: <About/>
    },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
