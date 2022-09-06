import React from "react";

export interface dragContextInterface {
  isDragging: boolean;
  setIsDragging: Function;
}

export const dragContext = React.createContext<dragContextInterface>({
  isDragging: false,
  setIsDragging: () => {},
});
