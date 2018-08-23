import React from 'react'
import estimateStrength from './estimateStrength'
import Bar from './Bar'

export default class CheckPassword extends React.Component {
  constructor() {
    super()
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        content: '',
      }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
    console.log(event.target.value);
  }

  render() {

    const { content } = this.state
    let passwordScore = `${ estimateStrength(content).score }`
    let hasLowerCase = `${ estimateStrength(content).hasLowerCase }`
    let hasUpperCase = `${ estimateStrength(content).hasUpperCase }`
    let hasSpecialChar = `${ estimateStrength(content).hasSpecialChar }`
    let hasNumber = `${ estimateStrength(content).hasNumber }`
    let isOver8Char = `${ estimateStrength(content).isOver8Char }`
    let barColor = "#fc3516"

    if (passwordScore == 1) {
      barColor = "#fc3516";
    } else if (passwordScore == 2) {
      barColor = "#fd682a";
    } else if (passwordScore == 3) {
      barColor = "#fdaa67";
    } else if (passwordScore == 4) {
      barColor = "#fcdeb0";
    } else if (passwordScore == 5) {
      barColor = "#95da25";
    }

    return (
      <div className="checkPassword">
        <h1>Password strength</h1>

        <Bar width={`${ passwordScore * 20 }%`} color={ barColor } score={ passwordScore }/>

        <form>
          <input type="password" onChange={this.handleChange}/>
        </form>

        <div className="criteria">
          <p>Contains a lowercase: {hasLowerCase.toString()}</p>
          <p>Contains an uppercase: {hasUpperCase.toString()}</p>
          <p>Contains a special character: {hasSpecialChar.toString()}</p>
          <p>Contains a number: {hasNumber.toString()}</p>
          <p>Is over 8 characters: {isOver8Char.toString()}</p>
        </div>
      </div>
    )
  }
}
