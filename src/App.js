import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h2>Todo Application</h2>
      </header> */}
      <div>
        <Outlet />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
