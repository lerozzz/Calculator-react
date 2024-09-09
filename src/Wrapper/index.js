
import './index.css';
import Screen from './Screen.js';
import ButtonBox from './ButtonBox'
import { useEffect, useState } from 'react';
import listElements from './ButtonBox/data.js';


function Wrapper(props) {
    const [expression, setExpression] = useState('');
    const signs = ['%', '+', '-', '='];
    for (let i = 0; i < 4; i++) {
        console.log(signs[i]);
    }

    useEffect(() => {
        window.addEventListener('keydown', function (event) {
            if (isNaN(event.key) === false) {
                try {
                    return setExpression((prev) => prev + event.key);
                } catch (error) {
                    return console.log(event.key);
                }
            }
            if (event.key === '-') {
            }
        });
    }, []);


    return (
        <div className='Wrapper'>
            <Screen title={expression} />
            <ButtonBox setExpressionButtonBox={setExpression} />

        </div>
    )
}
export default Wrapper;