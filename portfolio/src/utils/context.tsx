import React from "react";

export interface dragContextInterface {
  isDragging: boolean;
  setIsDragging: Function;
}
export interface expandContextInterface {
  isExpanding: boolean;
  setIsExpanding: Function;
}
export const dragContext = React.createContext<dragContextInterface>({
  isDragging: false,
  setIsDragging: () => {},
});

export const expandContext = React.createContext<expandContextInterface>({
  isExpanding: false,
  setIsExpanding: () => {},
})