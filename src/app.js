import 'aframe'
import 'aframe-look-at-component'
import 'aframe-text-component'
import './assets/font/Montserrat_Regular'

import React from 'react'
import { render } from 'react-dom'

import Tour from './components/Tour'
import eventService from './services/eventService'
import assetsPreloadService from './services/assetsPreloadService'

eventService.on('asset:loaded:image', () => {
  assetsPreloadService.loadedImages++
  if (assetsPreloadService.didLoadAllImages()) {
    assetsPreloadService.isLoading = false
    eventService.emit('asset:loaded:images')
  } else {
    assetsPreloadService.isLoading = true
  }
})

render(<Tour />, document.getElementById('app'))
