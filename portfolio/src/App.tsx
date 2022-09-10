//imports
//react utils
import { useState } from "react";
//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components & Routes
import Home from "./routes/Home";
//Context
import { dragContext, expandContext } from "./utils/context";

const App = () => {
  //context state
  const [isDragging, setIsDragging]  = useState<any>();
  const [isExpanding, setIsExpanding] = useState<any>();

  return (
    <BrowserRouter>
    <expandContext.Provider value={{ isExpanding, setIsExpanding }}>
      <dragContext.Provider value={{ isDragging, setIsDragging }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </dragContext.Provider>
    </expandContext.Provider>
    </BrowserRouter>
  );
};

export default App;
