import React from 'react'

const AssetSound = ({ id, src }) => <audio id={id} src={src} />

AssetSound.propTypes = {
  id: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
}

export default AssetSound
