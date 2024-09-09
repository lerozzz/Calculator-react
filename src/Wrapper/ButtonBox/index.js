import './buttonBox.css';
import Button from './Button';
import listElements from './data'
import { useState } from 'react';
import { BUTTON_TYPE } from './data';

const ButtonBox = (props) => {


    return (
        <div className="ButtonBox">
            {listElements.map((element, index) => {
                return (
                    <Button
                        setExpressionButton={props.setExpressionButtonBox}
                        key={index}
                        title={element.title}
                        type={element.type}
                    />
                )
            })}
        </div>)
}
export default ButtonBox;