import AppProvider from "./components/AppProvider";
import NavBar from "./components/NavigationBar/NavBar";

function App() {
  return (
    <AppProvider>
     <NavBar/>
     <h2>hello</h2>
    </AppProvider>
  );
}

export default App;
