import React from 'react'

/*
  util
*/
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

/*
  service
*/
const assetsPreloadService = {}

/*
  properties
*/
assetsPreloadService.loadedImages = 0
assetsPreloadService.isLoading = false

/*
  functions
*/
assetsPreloadService.didLoadAllImages = () => {
  const imageAssets = assetsAcc.filter(a => a.type.name === 'AssetImg')
  return imageAssets.length === assetsPreloadService.loadedImages
}

assetsPreloadService.getAssetsTag = (currentStateName, states, defaultAssets = []) => {
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

  if (!assetsPreloadService.didLoadAllImages()) {
    assetsPreloadService.isLoading = true
  }

  return (
    <a-assets timeout="15000">
      {assetsAcc}
    </a-assets>
  )
}

export default assetsPreloadService
