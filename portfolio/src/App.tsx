//imports
//react utils
import { useState } from "react";
//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components & Routes
import Home from "./routes/Home";
//Context
import { dragContext } from "./utils/context";

const App = () => {
  //context state
  const [isDragging, setIsDragging]  = useState<any>();

  return (
    <BrowserRouter>
      <dragContext.Provider value={{ isDragging, setIsDragging }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </dragContext.Provider>
    </BrowserRouter>
  );
};

export default App;
