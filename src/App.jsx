import "./App.css";
import router from "./routes/routing";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
