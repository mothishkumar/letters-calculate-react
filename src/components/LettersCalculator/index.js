// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target
    console.log(value)

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="card1">
            <h1 className="heading">Calculate the letters you enter</h1>
            <label className="para" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="enter the parse"
              className="input"
              onChange={this.onChangeInputPhrase}
              id="phraseText"
            />
            <p type="button" className="button">
              No.of letters: {inputPhrase.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
