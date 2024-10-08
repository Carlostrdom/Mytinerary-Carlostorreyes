import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import StandarLayout from "./layout/StandarLayout";
import NotFound from "./pages/NotFound";
import Cities from "./pages/Cities";

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities> },
      { path: "/*", element: <NotFound></NotFound> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
