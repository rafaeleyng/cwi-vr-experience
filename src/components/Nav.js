import React from 'react'
import assetsPreloadService from '../services/assetsPreloadService'
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
    this.fadeNav = this.fadeNav.bind(this)
  }

  componentDidMount() {
    this.refs.navImage.addEventListener('mouseenter', this.handleEnterNav)
    this.refs.navImage.addEventListener('mouseleave', this.handleLeaveNav)
    eventService.on('asset:loaded:images', this.fadeNav)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    this.refs.navImage.removeEventListener('mouseenter', this.handleEnterNav)
    this.refs.navImage.removeEventListener('mouseleave', this.handleLeaveNav)
    eventService.off('asset:loaded:images', this.fadeNav)
  }

  fadeNav() {
    this.refs.navImage.emit('fade')
    this.refs.navText.emit('fade')
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
    const navOpacity = assetsPreloadService.isLoading ? '0' : '1'

    return (
      <a-entity
        look-at="#camera"
        position={this.props.nav.position}
      >
        <a-image
          ref="navImage"
          material={`transparent: true; opacity: ${navOpacity}; shader: flat; src: #${this.props.navImageId};`}
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
          material={`transparent: true; opacity: ${navOpacity}; color: #ffffff`}
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
