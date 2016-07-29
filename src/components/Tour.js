import React from 'react'
import Macchina from 'macchina'
import Room from './Room'
import states from '../states'
import assetsPreloadService from '../services/assetsPreloadService'

export default class Tour extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navImageId: 'image-nav',
      welcomeImageId: 'image-welcome',
    }

    this.visitedStatesNames = []
    this.macchina = new Macchina(states, { debug: false })

    // bind
    this.nav = this.nav.bind(this)

    this.nav('welcome')
  }

  setMacchinaProperties() {
    // TODO o setTimeout porque a Macchina está com algum problema com transições síncronas
    setTimeout(() => {
      this.setState({
        macchinaProperties: this.macchina.properties(),
      })
    })
  }

  nav(stateName) {
    if (this.visitedStatesNames.every(s => s !== stateName)) {
      this.visitedStatesNames.push(stateName)
    }
    this.macchina.transition(stateName)
    this.setMacchinaProperties()
  }

  render() {
    // assets
    const assets = assetsPreloadService.getAssetsTag(this.macchina.state(), states, [
      { id: this.state.navImageId, src: './assets/image/nav-white.png' },
      { id: this.state.welcomeImageId, src: './assets/image/welcome.png' },
    ])

    // camera
    let cameraRotation = '0 0 0'
    if (this.state.macchinaProperties) {
      cameraRotation = this.state.macchinaProperties.cameraRotation
    }
    const camera = (
      <a-entity position="0 1.8 4" rotation={cameraRotation}>
        <a-entity camera id="camera" look-controls mouse-cursor>
          <a-cursor fuse="true" color="white"></a-cursor>
        </a-entity>
      </a-entity>
    )

    // rooms
    const currentStateName = this.macchina.state()
    // mantém no DOM todas as rooms já instanciadas, e apenas seta a visibilidade delas
    // ver https://github.com/aframevr/aframe/issues/1626
    const rooms = this.visitedStatesNames
      .map(sn => {
        const isCurrentState = sn === currentStateName
        const state = states.find(s => s.name === sn)
        return (
          <Room
            key={state.name}
            visible={isCurrentState}
            navCallback={this.nav}
            listNav={state.properties.nav.all}
            listImage={state.properties.image ? state.properties.image.all : undefined}
            room={state.properties.room.single}
            navImageId={this.state.navImageId}
            isWelcome={currentStateName === 'welcome'}
          />
        )
      })

    return (
      <a-scene>
        <a-entity light="type: ambient; color: #FFF; intensity: 1"></a-entity>
        {assets}
        {camera}
        {rooms}
      </a-scene>
    )
  }
}
