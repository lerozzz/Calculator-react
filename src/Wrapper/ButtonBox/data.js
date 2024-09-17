import { buildQueries } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";

export const BUTTON_TYPE = {
  NUMBER: "number",
  CLEAR: "clear",
  PLUS_MINUS: "plus_minus",
  PERCENT: "perсent",
  DIVISION: "division",
  MULTIPLICATION: "multiplication",
  MINUS: "minus",
  PLUS: "plus",
  DOT: "dot",
  EQUALS: "equals",
  BACKSPACE: "delete"
};

const listElements = [
  { title: "AC", type: BUTTON_TYPE.CLEAR, value: "Delete" },
  { title: "+/-", type: BUTTON_TYPE.PLUS_MINUS },
  { title: "%", type: BUTTON_TYPE.PERCENT },
  { title: "/", type: BUTTON_TYPE.DIVISION },
  { title: "7", type: BUTTON_TYPE.NUMBER },
  { title: "8", type: BUTTON_TYPE.NUMBER },
  { title: "9", type: BUTTON_TYPE.NUMBER },
  { title: "*", type: BUTTON_TYPE.MULTIPLICATION },
  { title: "4", type: BUTTON_TYPE.NUMBER },
  { title: "5", type: BUTTON_TYPE.NUMBER },
  { title: "6", type: BUTTON_TYPE.NUMBER },
  { title: "-", type: BUTTON_TYPE.MINUS },
  { title: "1", type: BUTTON_TYPE.NUMBER },
  { title: "2", type: BUTTON_TYPE.NUMBER },
  { title: "3", type: BUTTON_TYPE.NUMBER },
  { title: "+", type: BUTTON_TYPE.PLUS },
  { title: "0", type: BUTTON_TYPE.NUMBER },
  { title: ".", type: BUTTON_TYPE.DOT },
  { title: "=", type: BUTTON_TYPE.EQUALS, value: "Enter" },
  { title: 'del', type: BUTTON_TYPE.BACKSPACE, value: "Backspace", isHidden: true },
];

export default listElements;

const SIZE_TYPE = {
  MAX: "max",
  MEDIUM: "medium",
  SMALL: "small",
};
