//imports
//react utils
import React, { useContext } from "react";
//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components & Routes
import Home from "./routes/Home";
//Context
import { dragContext } from "./utils/context";

const App = () => {
  //context state
  const { isDragging, setIsDragging } = useContext(dragContext);

  return (
    <BrowserRouter>
      <Routes>
        <dragContext.Provider value={{isDragging, setIsDragging}} >
          <Route path="/" element={<Home />} />
        </dragContext.Provider>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
