import React, { Component } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import Operations from './Operations';

import './css/Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
      super(props);

      this.state = {
        displayValue: '0',
        result: 0,
        operator: '',
        expression: '',
      }

      this.updateDisplayValue = this.updateDisplayValue.bind(this);
      this.showResult = this.showResult.bind(this);
      this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({
      displayValue: '0',
      result: 0,
      operator: '',
      expression: '',
    })
  }

  /**
 * @param {string} val
 * 
 * Keep appending to numeric display value until an operator is used
 * Also updates the expression that is shown under display value
 */
  updateDisplayValue(val) {
    this.setState((prevState) => {

      if (prevState.displayValue.length > 10) return;

      if (prevState.displayValue === '0') {
        prevState.displayValue = '';
      }

      return {
        displayValue: prevState.displayValue += String(val),
        expression: prevState.expression += String(val)
      }

    });
  }

  /**
 * @param {string} operationSymbol
 *  + or -
 */
  updateOperator(operationSymbol) {
    this.setState((prevState) => {
      let result = 0;


     if (prevState.operator === '') {
       return {
         displayValue: '0',
         result: prevState.displayValue,
         operator: operationSymbol,
         expression: prevState.expression += ' ' + operationSymbol + ' '
        };
     }

     // Do mathematical operation based on operation symbol
      result = Operations.getByOperator(operationSymbol, this.state.result, this.state.displayValue);

      return {
        displayValue: '0',
        operator: operationSymbol,
        result: result,
        expression: prevState.expression += ' ' + operationSymbol + ' '
      }
    })
  }

  showResult() {
    let result = 0;

    if (this.state.operator === '')  return;

    result = Operations.getByOperator(this.state.operator, this.state.result, this.state.displayValue);
    this.setState({result: 0, displayValue: String(result), operator: ''});
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.displayValue} expression={this.state.expression} />        
        <Keypad symbol="7" action={() => {this.updateDisplayValue(7)}} />
        <Keypad symbol="8" action={() => {this.updateDisplayValue(8)}}/>
        <Keypad symbol="9" action={() => {this.updateDisplayValue(9)}}/>
        <Keypad symbol="+" action={() => {this.updateOperator('+')}} extraClasses="operator"/>
        <Keypad symbol="4" action={() => {this.updateDisplayValue(4)}}/>
        <Keypad symbol="5" action={() => {this.updateDisplayValue(5)}}/>
        <Keypad symbol="6" action={() => {this.updateDisplayValue(6)}}/>
        <Keypad symbol="-" action={() => {this.updateOperator('-')}} extraClasses="operator"/>
        <Keypad symbol="1" action={() => {this.updateDisplayValue(1)}}/>
        <Keypad symbol="2" action={() => {this.updateDisplayValue(2)}}/>
        <Keypad symbol="3" action={() => {this.updateDisplayValue(3)}}/>
        <Keypad symbol="=" action={this.showResult} extraClasses="operator"/>
        <Keypad symbol="AC" action={this.clear} extraClasses="operator"/>
        <Keypad symbol="0" action={() => {this.updateDisplayValue(0)}}/>
        <Keypad symbol="." action={() => {this.updateDisplayValue('.')}}/>
      </div>
    );
  }
}
