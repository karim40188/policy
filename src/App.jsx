import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";
import PrivaceAndPolicy from "./PrivaceAndPolicy";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <PrivaceAndPolicy /> },
    { path: "/delete-account", element: <DeleteAccount /> },
  ]);

  return (
    <RouterProvider router={router}>
 
    </RouterProvider>
  );
}

export default App;
