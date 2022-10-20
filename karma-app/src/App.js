import "./App.css";
import logo from "./assets/images/logo-big.jpg";
import { LineWobble } from "@uiball/loaders";

function App() {
  <LineWobble size={80} lineWeight={5} speed={1.75} color="black" />;
  return (
    <>
      <div id="preloader">
        <div id="status">
          <img alt="logo" src={logo} />
          <p>Próximamente</p>
        </div>
      </div>
    </>
  );
}

export default App;
