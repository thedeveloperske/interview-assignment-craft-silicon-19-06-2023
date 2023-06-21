import "./App.css";
import ButtonComponent from "./components/Button";
import FooterComponent from "./components/Footer";
import Header from "./components/Header";
import TabComponent from "./components/Tab";

function App() {
  return (
    <div className="content">
      <Header />
      <TabComponent />
      <FooterComponent />
      <ButtonComponent />
    </div>
  );
}

export default App;
