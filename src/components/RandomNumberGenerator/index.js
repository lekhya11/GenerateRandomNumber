import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerator = () => {
    const random = Math.ceil(Math.random() * 10)
    this.setState({count:random})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="mini-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onGenerator}
            className="generatorButton"
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
