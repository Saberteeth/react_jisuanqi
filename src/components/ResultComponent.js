import React from 'react';
/**
 * 同 ResultComponent
 * @param { reuslt } param
 */
export default function ResultComponent({ result }) {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  )
}

// class ResultComponent extends Component {
//   render() {
//     // 常量用 const 不要用 let
//     // let { result } = this.props;
//     const { result } = this.props;
//     return (
//       <div className="result">
//         <p>{result}</p>
//       </div>
//     );
//   }
// }

// export default ResultComponent;
