import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Admin from "./pages/Admin";
import Resume from "./pages/Resume";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Resume />,
            },
            {
                path: "admin",
                element: <Admin />,
            },
        ],
    },
]);

export default routes;
