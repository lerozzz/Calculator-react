import { buildQueries } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";

export const BUTTON_TYPE = {
    NUMBER: 'number',
    CLEAR: 'clear',
    PLUS_MINUS: 'plus_minus',
    PERCENT: 'perсent',
    DIVISION: 'division',
    MULTIPLICATION: 'multiplication',
    MINUS: 'minus',
    PLUS: 'plus',
    DOT: 'dot',
    EQUALS: 'equals'
}

const listElements = [
    { title: 'AC', type: BUTTON_TYPE.CLEAR, button_click: true },
    { title: '+/-', type: BUTTON_TYPE.PLUS_MINUS, button_click: true },
    { title: '%', type: BUTTON_TYPE.PERCENT, button_click: true },
    { title: '/', type: BUTTON_TYPE.DIVISION, button_click: true },
    { title: '7', type: BUTTON_TYPE.NUMBER },
    { title: '8', type: BUTTON_TYPE.NUMBER },
    { title: '9', type: BUTTON_TYPE.NUMBER },
    { title: '*', type: BUTTON_TYPE.MULTIPLICATION, button_click: true },
    { title: '4', type: BUTTON_TYPE.NUMBER },
    { title: '5', type: BUTTON_TYPE.NUMBER },
    { title: '6', type: BUTTON_TYPE.NUMBER },
    { title: '-', type: BUTTON_TYPE.MINUS, button_click: true },
    { title: '1', type: BUTTON_TYPE.NUMBER },
    { title: '2', type: BUTTON_TYPE.NUMBER },
    { title: '3', type: BUTTON_TYPE.NUMBER },
    { title: '+', type: BUTTON_TYPE.PLUS, button_click: true },
    { title: '0', type: BUTTON_TYPE.NUMBER },
    { title: '.', type: BUTTON_TYPE.DOT, button_click: true },
    { title: '=', type: BUTTON_TYPE.EQUALS, button_click: true },
]

export default listElements;



const SIZE_TYPE = {
    MAX: 'max',
    MEDIUM: 'medium',
    SMALL: 'small'
}