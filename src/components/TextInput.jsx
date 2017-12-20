import React from 'react'
import PropTypes from 'prop-types'

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
  }

  render() {
    return <div>
      <input value={this.state.inputValue} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Create</button>
    </div>
  }
}
