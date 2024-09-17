import { BUTTON_TYPE } from "../data";

const clickOnCalcHandler = (setExpressionButton, type, value) => {
  switch (type) {
    case BUTTON_TYPE.EQUALS: {
      setExpressionButton((prev) => {
        try {
          return eval(prev);
        } catch (error) {
          alert("error");
          return prev;
        }
      });
      return;
    }

    case BUTTON_TYPE.CLEAR: {
      setExpressionButton((prev) => "");
      return;
    }
    case BUTTON_TYPE.PLUS_MINUS: {
      setExpressionButton((prev) => (prev >= 0 ? -1 * prev : Math.abs(prev)));
      return;
    }
    case BUTTON_TYPE.PERCENT: {
      setExpressionButton((prev) => prev / 100);
      return;
    }
    case BUTTON_TYPE.BACKSPACE: {
      setExpressionButton((prev) => prev.slice(0, -1));
      return;
    }

    default: {
      setExpressionButton((prev) => prev + value);
      return;
    }
  }
};

export default clickOnCalcHandler;
