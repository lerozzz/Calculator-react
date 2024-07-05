
import './index.css';
import Screen from './Screen.js';
import ButtonBox from './ButtonBox'


function Wrapper(props) {
    return <div className='Wrapper'>
        <Screen />
        <ButtonBox />

    </div>;
}
export default Wrapper;