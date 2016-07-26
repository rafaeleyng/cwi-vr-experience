import React from 'react'
import Nav from './Nav'

const Room = ({ visible, room, listNav = [], listImage = [], navImageId, navCallback }) => {
  // sky
  const skyProps = {}
  skyProps.src = room.skySrc
  skyProps.color = room.skyColor || '#ffffff'
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

Room.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  room: React.PropTypes.object.isRequired,
  listNav: React.PropTypes.array.isRequired,
  listImage: React.PropTypes.array,
  navImageId: React.PropTypes.string.isRequired,
  navCallback: React.PropTypes.func.isRequired,
}

export default Room
