import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import BusinessAnalyst from "./pages/BA/BusinesAnalyst";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "BusinessAnalyst",
        Component: BusinessAnalyst,
      },
    ],
  },
]);

export default router;
