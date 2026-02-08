import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Tut from "./tut";
import Install from "./Install";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tut" element={<Tut />} />
      <Route path="/install" element={<Install />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
