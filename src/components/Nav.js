import React from 'react'
import eventService from '../services/eventService'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
    }
    // bind
    this.handleEnterNav = this.handleEnterNav.bind(this)
    this.handleLeaveNav = this.handleLeaveNav.bind(this)
  }

  componentDidMount() {
    this.refs.navImage.addEventListener('mouseenter', this.handleEnterNav)
    this.refs.navImage.addEventListener('mouseleave', this.handleLeaveNav)

    eventService.on('asset:loaded:images', () => {
      this.refs.navImage.emit('fade')
      this.refs.navText.emit('fade')
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    this.refs.navImage.removeEventListener('mouseenter', this.handleEnterNav)
    this.refs.navImage.removeEventListener('mouseleave', this.handleLeaveNav)
  }

  handleEnterNav() {
    clearTimeout(this.timeout)
    this.setState({ focus: true })
    this.timeout = setTimeout(() => {
      this.setState({ focus: false })
      this.props.navCallback(this.props.nav.state)
    }, 1800)
  }

  handleLeaveNav() {
    clearTimeout(this.timeout)
    this.setState({ focus: false })
  }

  render() {
    return (
      <a-entity
        look-at="#camera"
        position={this.props.nav.position}
      >
        <a-image
          ref="navImage"
          material={`transparent: true; opacity: 0; shader: flat; src: #${this.props.navImageId};`}
          width="5"
          height="5"
          scale="1 1 1"
        >
          <a-animation attribute="material.opacity" begin="fade" to="1"></a-animation>
          <a-animation
            repeat="1"
            attribute="scale"
            begin="mouseenter"
            dur="700"
            to="1.2 1.2 1.2"
            direction="alternate"
          ></a-animation>
        </a-image>
        <a-entity
          ref="navText"
          text={`text: ${this.props.nav.label}; size: 1.2; font: Montserrat;`}
          material={`transparent: true; opacity: 0; color: #ffffff`}
          position="3 -0.4 0"
        >
          <a-animation attribute="material.opacity" begin="fade" to="1"></a-animation>
        </a-entity>
      </a-entity>
    )
  }
}

Nav.propTypes = {
  nav: React.PropTypes.object.isRequired,
  navImageId: React.PropTypes.string.isRequired,
  navCallback: React.PropTypes.func.isRequired,
}
