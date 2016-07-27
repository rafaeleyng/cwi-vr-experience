import React from 'react'
import eventService from './eventService'

const assetsAcc = []

// encontra todos os estados que podem ser alcançados a partir do estado atual
const findReachableStatesAssets = (reachableStatesNames, states, currentStateName) => reachableStatesNames
  .map(sn => {
    const state = states.find(s => s.name === sn)
    if (!state) {
      throw new Error(`'${sn}': nome inválido de estado para navegação a partir de '${currentStateName}'`)
    }
    return state.properties.assets.all
  })
  .reduce((acc, assets) => acc.concat(assets), [])

const assetsPreloader = (currentStateName, states, defaultAssets = []) => {
  const currentState = states.find(s => s.name === currentStateName)

  if (!currentState.properties || !currentState.properties.nav) {
    return (
      <a-assets>
        {defaultAssets}
      </a-assets>
    )
  }

  const reachableStatesNames = currentState.properties.nav.all.map(s => s.state)
  const reachableStatesAssets = findReachableStatesAssets(reachableStatesNames, states, currentStateName)
  const currentStateAssets = currentState.properties.assets.all || []
  const assets = defaultAssets.concat(currentStateAssets.concat(reachableStatesAssets))

  assets.forEach(asset => {
    if (assetsAcc.every(a => a.key !== asset.key)) {
      assetsAcc.push(asset)
    }
  })

  if (!didLoadAllImages()) {
    assetsPreloader.isLoading = true
  }

  return (
    <a-assets timeout="15000">
      {assetsAcc}
    </a-assets>
  )
}

const didLoadAllImages = () => {
  const imageAssets = assetsAcc.filter(a => a.type.name === 'AssetImg')
  console.log('$ didLoadAllImages imageAssets:', imageAssets)
  console.log('$ didLoadAllImages loadedImages:', assetsPreloader.loadedImages)
  console.log('$ didLoadAllImages return:', imageAssets.length === assetsPreloader.loadedImages)
  return imageAssets.length === assetsPreloader.loadedImages
}

assetsPreloader.loadedImages = 0
assetsPreloader.isLoading = false

eventService.on('asset:loaded:image', imageId => {
  assetsPreloader.loadedImages++
  console.log('# 1', assetsPreloader.loadedImages, imageId);
  if (didLoadAllImages()) {
    console.log('# 2', assetsPreloader.loadedImages, imageId);
    eventService.emit('asset:loaded:images')
    assetsPreloader.isLoading = false
  }
})

export default assetsPreloader
