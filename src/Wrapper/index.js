import "./index.css";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox";
import { useEffect, useState } from "react";
import clickOnCalcHandler from "./ButtonBox/Button/helper.js";
import listElements from "./ButtonBox/data.js";

function Wrapper() {
  const [expression, setExpression] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", function (event) {
      const buttonOfListElements = listElements.find(
        ({ title, value }) => value === event.key || title === event.key
      );

      if (!buttonOfListElements) throw Error("ты лох");
      const { type, value, title } = buttonOfListElements;

      try {
        return clickOnCalcHandler(setExpression, type, value || title);
      } catch (error) {
        return alert(error.message);
      }
    });
  }, []);

  return (
    <div className="Wrapper">
      <Screen title={expression} />
      <ButtonBox setExpressionButtonBox={setExpression} />
    </div>
  );
}
export default Wrapper;
