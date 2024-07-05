import './buttonBox.css';
import Button from './Button';
import listElements from './data'


const ButtonBox = (props) => {
    return (
        <div className="ButtonBox">
            {listElements.map((element, index) => {

                return <Button key={index} title={element.title} />
            })}
        </div>)
}
export default ButtonBox;