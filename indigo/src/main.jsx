import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// import Layout from "./components/Layout/Layout.jsx";
import { CancelFlight, Flights, Home, Login, Register, Update } from "./pages/index.js"

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App/>}>
          <Route path="" element={<Home/>}/>
          <Route path="home" element={<Home />} />
          <Route path="flights" element={<Flights />} />
          <Route path="cancel" element={<CancelFlight />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="update" element={<Update />} />
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
