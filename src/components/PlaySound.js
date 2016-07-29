import React from 'react'

export default class PlaySound extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.refs.box.addEventListener('click', this.props.callback)
  }

  render() {
    return <a-box ref="box" color="#6173F4" width="1" height="1" depth="1" position={this.props.position}></a-box>
  }
}
