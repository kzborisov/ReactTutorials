import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Reducer from "./pages/Reducer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='use-reducer' element={<Reducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
