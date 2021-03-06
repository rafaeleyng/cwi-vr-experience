import React from 'react'
import Nav from './Nav'

export default class Room extends React.Component {
  render() {
    const { visible, room, listNav = [], listImage = [], navImageId, navCallback } = this.props
    // sky
    const skyProps = {}
    const skySrc = room.skySrc ? `src: ${room.skySrc};` : ''
    const skyColor = room.skyColor ? `color: ${room.skyColor};` : ''
    skyProps.material = `${skySrc} ${skyColor} shader: flat`
    if (room.skySound && visible) {
      skyProps.sound = `src: ${room.skySound}; autoplay: true`
    }

    const sky = (
      <a-sky
        {...skyProps}
      ></a-sky>
    )

    // images
    const listImageElement = listImage.map((image, i) => (
      <a-image
        key={i}
        src={image.src}
        width={image.width}
        height={image.height}
        position={image.position}
      ></a-image>
    ))

    // nav
    const listNavElement = listNav.map((nav, i) => (
      <Nav
        key={i}
        nav={nav}
        navImageId={navImageId}
        navCallback={navCallback}
      />
    ))

    return (
      <a-entity visible={visible}>
        {sky}
        {listImageElement}
        {listNavElement}
      </a-entity>
    )
  }
}

Room.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  room: React.PropTypes.object.isRequired,
  listNav: React.PropTypes.array.isRequired,
  listImage: React.PropTypes.array,
  navImageId: React.PropTypes.string.isRequired,
  navCallback: React.PropTypes.func.isRequired,
}
