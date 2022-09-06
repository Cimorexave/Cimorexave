import React from "react";

interface dragContextInterface {
    isDragging: boolean,
    setIsDragging: () => void 
}

export const dragContext = React.createContext<dragContextInterface>({
    isDragging: false,
    setIsDragging: () => {}
})