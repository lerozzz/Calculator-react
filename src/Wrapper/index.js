import "./index.css";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox";
import { useEffect, useState } from "react";
import clickOnCalcHandler from "./ButtonBox/Button/helper.js";
import listElements from "./ButtonBox/data.js";
import { useTheme } from "../ThemeToggle/ThemeContex.js";

function Wrapper() {
    const [expression, setExpression] = useState("");
    const { theme } = useTheme()

    useEffect(() => {
        window.addEventListener("keydown", function (event) {
            console.log(event.key);

            const buttonOfListElements = listElements.find(
                ({ title, value }) => value === event.key || title === event.key
            );

            try {
                if (!buttonOfListElements) throw Error("ты лох");

                const { type, value, title } = buttonOfListElements;
                clickOnCalcHandler(setExpression, type, title);
            } catch (error) {
                alert(error.message);
            }
        });
    }, []);

    const wrapperCalc = `wrapper ${theme === 'light' ? 'wrapper__light' : ''}`

    return (
        <div className={wrapperCalc}>
            <Screen title={expression} />
            <ButtonBox setExpressionButtonBox={setExpression} />
        </div>
    );
}
export default Wrapper;
