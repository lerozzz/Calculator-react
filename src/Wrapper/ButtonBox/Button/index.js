import './button.css';
import { BUTTON_TYPE } from '../data';
import clickOnCalcHandler from './helper';

const Button = (props) => {
    if (props.isHidden) {
        return null;
    }
    return (
        <button
            onClick={() => clickOnCalcHandler(props.setExpressionButton, props.type, props.title)}
            className='button'
        >
            {props.title}
        </button >
    )
}
export default Button;