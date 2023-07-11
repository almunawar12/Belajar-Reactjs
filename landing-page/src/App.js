import "./App.css";
import Footer from "./components/Footer";
import Maincontent from "./components/Maincontent";
import Navigationbar from "./components/Navigaton";

function App() {
  return (
    <div>
      <Navigationbar />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
