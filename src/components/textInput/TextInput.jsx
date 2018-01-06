import React from 'react'
import PropTypes from 'prop-types'

import './textInput.css'

export default class TextInput extends React.PureComponent {
  static propTypes = {
    callback: PropTypes.func
  }

  static defaultProps = {
    callback: (value) => console.log(value)
  }

  state = {
    inputValue: ''
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleClick = () => {
    this.props.callback(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  handleKeyDown = (event) => {
    if (event.which === 13) {
      event.preventDefault()
      this.handleClick()
    }
  }

  render() {
    return <div className="textInput">
      <input
        className="textInput--input"
        value={this.state.inputValue}
        placeholder="New channel name..."
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}/>
      <button className="textInput--button" onClick={this.handleClick}>Create</button>
    </div>
  }
}
