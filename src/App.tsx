import { Outlet } from "react-router-dom";
import AppProvider from "./components/AppProvider";
import NavBar from "./components/Common/NavBar";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <AppProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </AppProvider>
  );
}

export default App;
