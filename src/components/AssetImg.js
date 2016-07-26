import React from 'react'

const AssetImg = ({ id, src }) => <img id={id} src={src} role="presentation" />

AssetImg.propTypes = {
  id: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
}

export default AssetImg
