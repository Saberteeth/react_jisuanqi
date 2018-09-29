import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypodComponent from './components/KeypodComponent';



class App extends Component {
  constructor(){
    super();
    this.state = {
      result:""
    }
  }
  onClick = button=>{
    if(button==="="){
      this.calculate();

    }else if(button==="AC"){
      this.reset();

    }else if(button==="+/-"){
      this.backspace();

    }else if(button==="%"){
      this.desk();

    }else{
      this.setState({
        result:this.state.result+button
      })
    }
  };

  calculate = ()=>{
    try{
      this.setState({
        result:(eval(this.state.result) || "")+""
      })
    }catch(e){
      this.setState({
        result:""
      })
    }

  };

  reset = ()=>{
    this.setState({
      result:""
    })

  };

  backspace = ()=>{
    this.setState({
      result:this.state.result*-1
    })

  };

  desk = ()=>{
    this.setState({
      result:this.state.result*0.01
    })

  }

  render() {
    return (
      <div className="calculator-body">
          <ResultComponent result={this.state.result}/>
          <KeypodComponent onClick={this.onClick}/>
        
      </div>
    );
  }
}


export default App;
