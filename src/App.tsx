import { Outlet } from "react-router-dom";
import AppProvider from "./components/AppProvider";
import NavBar from "./components/NavigationBar/NavBar";

function App() {
  return (
    <AppProvider>
      <NavBar />
      <Outlet />
    </AppProvider>
  );
}

export default App;
