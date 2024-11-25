import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import StandarLayout from "./layout/StandarLayout";
import NotFound from "./pages/NotFound";
import Cities from "./pages/Cities";
import Itinerary from "./pages/Itinerary";
import Login from "./pages/signgnin";
import { useDispatch } from "react-redux";
import { setUser } from "./store/actionSignin/actionSignin";
import axios from "axios";
import Register from "./pages/Register";
import SignRoute from "./Componentes/signinRoute";

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities> },
      { path: "/login", element:  <SignRoute>
        <Login></Login>
      </SignRoute> },
      { path: "/register", element: <Register></Register> },

      { path: "/*", element: <NotFound></NotFound> },
    ],
  },
  { path: "/itineraries", element: <Itinerary></Itinerary> },


], {
  future: {
    v7_startTransition: true,
  },
});


 const loginWithToken = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/auth/token",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
function App() {

  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
      
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    });
  }

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
