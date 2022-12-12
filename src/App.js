import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CVTemplate1 from "./pages/CVTemplate1";
import CVTemplate2 from "./pages/CVTemplate2";
import Home from "./pages/Home";
import Template from "./pages/Template";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/template' element={<Template />} />
        <Route path='/cv-template-1' element={<CVTemplate1 />} />
        <Route path='/cv-template-2' element={<CVTemplate2 />} />
      </Routes>

    </>
  );
}

export default App;
