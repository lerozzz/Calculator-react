import './button.css';
import { BUTTON_TYPE } from '../data';
import clickOnCalcHandler from './helper';

const Button = (props) => {
    return (
        <button
            onClick={() => clickOnCalcHandler(props.setExpressionButton, props.type, props.title)}
            onKeyDown={(e) => console.log(e)}

            className='Button'
        >
            {props.title}
        </button >
    )
}
export default Button;