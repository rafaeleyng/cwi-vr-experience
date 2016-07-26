import React from 'react'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navImageMaterial: `transparent: true; opacity: 0.9; shader: flat; src: #${this.props.navImageId};`,
      focus: false,
    }
    // bind
    this.handleEnterNav = this.handleEnterNav.bind(this)
    this.handleLeaveNav = this.handleLeaveNav.bind(this)
  }

  componentDidMount() {
    this.refs.navEntity.addEventListener('mouseenter', this.handleEnterNav)
    this.refs.navEntity.addEventListener('mouseleave', this.handleLeaveNav)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    this.refs.navEntity.removeEventListener('mouseenter', this.handleEnterNav)
    this.refs.navEntity.removeEventListener('mouseleave', this.handleLeaveNav)
  }

  handleEnterNav() {
    clearTimeout(this.timeout)
    this.setState({ focus: true })
    this.timeout = setTimeout(() => {
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
          ref="navEntity"
          material={this.state.navImageMaterial}
          width="5"
          height="5"
          scale="1 1 1"
        >
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
          text={`text: ${this.props.nav.label}; size: 1.2; font: Montserrat;`}
          material={`color: ${this.state.focus ? '#f6b63e' : '#ffffff'}`}
          position="3 -0.4 0"
        ></a-entity>
      </a-entity>
    )
  }
}

Nav.propTypes = {
  nav: React.PropTypes.object.isRequired,
  navImageId: React.PropTypes.string.isRequired,
  navCallback: React.PropTypes.func.isRequired,
}
