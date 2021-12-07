import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browser from "./components/browser/Browser";
import Forms from "./components/forms/Forms";
import ReactTask from "./components/reactTask/ReactTask";
import FrontendCss from "./components//frontendCss/FrontendCss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browser />} />
          <Route path="/browser" element={<Browser />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/react" element={<ReactTask />} />
          <Route path="/frontendCss" element={<FrontendCss />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
