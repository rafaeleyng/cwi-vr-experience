import 'aframe'
import 'aframe-look-at-component'
import 'aframe-text-component'
import './assets/font/Montserrat_Regular'

import React from 'react'
import { render } from 'react-dom'

import Tour from './components/Tour'

render(<Tour />, document.getElementById('app'))
