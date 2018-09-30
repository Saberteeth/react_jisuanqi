import React from 'react';

const Buttons = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '00', '.', '='
];
/**
 * 函数组件会比class组件更轻量级，性能更好，如果只是简单组件建议使用函数组件。
 * @param { onClick } param
 */
export default function KeypodComponent({ onClick }) {
  return (
    <div className="button">
      {Buttons.map((name) => <button name={name} key={name} onClick={e => onClick(e.target.name)}>{name}</button>)}
    </div>
  )
}

// class KeypodComponent extends Component{
//     render(){
//         return(
//             <div className="button">
//                <button name="AC"  onClick={e =>this.props.onClick(e.target.name)}>AC</button>
//                <button name="+/-" onClick={e =>this.props.onClick(e.target.name)}>+/-</button>
//                <button name="%"   onClick={e =>this.props.onClick(e.target.name)}>%</button>
//                <button name="/"   onClick={e =>this.props.onClick(e.target.name)}>/</button><br/>


//                <button name="7" onClick={e =>this.props.onClick(e.target.name)}>7</button>
//                <button name="8" onClick={e =>this.props.onClick(e.target.name)}>8</button>
//                <button name="9" onClick={e =>this.props.onClick(e.target.name)}>9</button>
//                <button name="*" onClick={e =>this.props.onClick(e.target.name)}>*</button><br/>



//                <button name="4" onClick={e =>this.props.onClick(e.target.name)}>4</button>
//                <button name="5" onClick={e =>this.props.onClick(e.target.name)}>5</button>
//                <button name="6" onClick={e =>this.props.onClick(e.target.name)}>6</button>
//                <button name="-" onClick={e =>this.props.onClick(e.target.name)}>-</button><br/>



//                <button name="1" onClick={e =>this.props.onClick(e.target.name)}>1</button>
//                <button name="2" onClick={e =>this.props.onClick(e.target.name)}>2</button>
//                <button name="3" onClick={e =>this.props.onClick(e.target.name)}>3</button>
//                <button name="+" onClick={e =>this.props.onClick(e.target.name)}>+</button><br/>




//                <button name="0" onClick={e =>this.props.onClick(e.target.name)}>0</button>
//                <button name="00" onClick={e =>this.props.onClick(e.target.name)}>00</button>
//                <button name="." onClick={e =>this.props.onClick(e.target.name)}>.</button>
//                <button name="=" onClick={e =>this.props.onClick(e.target.name)}>=</button><br/>

//             </div>
//         );
//     }
// }

// export default KeypodComponent;
