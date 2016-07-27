import React from 'react'
import eventService from '../services/eventService'

const AssetImg = ({ id, src }) => {
  const onLoad = () => {
    eventService.emit('asset:loaded:image', id)
  }

  return (
    <img id={id} src={src} role="presentation" onLoad={onLoad} />
  )
}

AssetImg.propTypes = {
  id: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
}

export default AssetImg
