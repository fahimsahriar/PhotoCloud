import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationPage from "./compoents/help/InformationPage";
import Gallery from "./compoents/gallery/Gallery";

function App() {
  return (
    <>
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Gallery />} />
            <Route path='info' element={<InformationPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
