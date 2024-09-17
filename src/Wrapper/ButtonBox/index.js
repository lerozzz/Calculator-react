import './buttonBox.css';
import Button from './Button';
import listElements from './data'
import { useState } from 'react';
import { BUTTON_TYPE } from './data';

const ButtonBox = (props) => {


    return (
        <div className="buttonBox">
            {listElements.map((element, index) => {
                return (
                    <Button
                        setExpressionButton={props.setExpressionButtonBox}
                        key={index}
                        {...element}
                    //    title={element.title}
                    //    type={element.type}
                    />
                )
            })}
        </div>)
}
export default ButtonBox;