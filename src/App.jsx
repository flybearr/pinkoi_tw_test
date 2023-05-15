import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
