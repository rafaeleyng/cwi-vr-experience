import React from 'react'
import AssetImg from '../components/AssetImg'

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
class AssetsPreloadService {
  constructor() {
    this.loadedImages = 0
  }

  didLoadAllImages() {
    const imageAssets = assetsAcc.filter(a => a.type.name === 'AssetImg')
    return imageAssets.length === this.loadedImages
  }

  getAssetsTag(currentStateName, states, defaultAssets = []) {
    const currentState = states.find(s => s.name === currentStateName)

    if (!currentState.properties || !currentState.properties.nav) {
      return (
        <a-assets>
          {defaultAssets.map(asset => <AssetImg key={asset.id} id={asset.id} src={asset.src} />)}
        </a-assets>
      )
    }

    const reachableStatesNames = currentState.properties.nav.all.map(s => s.state)
    const reachableStatesAssets = findReachableStatesAssets(reachableStatesNames, states, currentStateName)
    const currentStateAssets = currentState.properties.assets.all || []
    const assets = defaultAssets.concat(currentStateAssets.concat(reachableStatesAssets))

    assets.forEach(asset => {
      if (assetsAcc.every(a => a.key !== asset.id)) {
        assetsAcc.push(<AssetImg key={asset.id} id={asset.id} src={asset.src} />)
      }
    })

    if (!this.didLoadAllImages()) {
      this.isLoading = true
    }

    return (
      <a-assets timeout="15000">
        {assetsAcc}
      </a-assets>
    )
  }
}

export default new AssetsPreloadService()
