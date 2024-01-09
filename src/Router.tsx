import { createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/index.mdx";
import PageNotFound from "./pages/404";
import routes from "./routes";

export default createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        Component: Index,
        path: "/",
      },
      ...routes.flatMap((route) => route.links),
    ],
  },
]);
