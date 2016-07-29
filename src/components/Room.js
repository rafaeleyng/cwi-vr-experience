import React from 'react'
import Nav from './Nav'
import audioCtx from '../context/AudioContext'
import PlaySound from './PlaySound'

export default class Room extends React.Component {
  constructor(props) {
    super(props)
    this.playSound = this.playSound.bind(this)
    this.prepareAudio()
    this.source = audioCtx.createBufferSource();
    this.isPlaying = false;
  }

  prepareAudio() {
    const bufferSound = event => {
      var request = event.target;
      audioCtx.decodeAudioData(request.response, buffer => {
        this.source.buffer = buffer
        this.source.connect(audioCtx.destination)
      });
    }

    const request = new XMLHttpRequest();
    request.open('GET', this.props.room.skySound, true);
    request.responseType = 'arraybuffer';
    request.addEventListener('load', bufferSound, false);
    request.send();
  }

  playSound() {
    this.source.start()
  }

  render() {
    const { visible, room, listNav = [], listImage = [], navImageId, navCallback, isWelcome } = this.props
    // sky
    const skyProps = {}
    const skySrc = room.skySrc ? `src: ${room.skySrc};` : ''
    const skyColor = room.skyColor ? `color: ${room.skyColor};` : ''
    skyProps.material = `${skySrc} ${skyColor} shader: flat`

    const sky = (
      <a-sky
        {...skyProps}
      ></a-sky>
    )

    const audioProps = { ref: 'audio' }
    if (room.skySound && visible) {
      audioProps.src = room.skySound
    } else {
      audioProps.src = './assets/sound/blank.mp3'
    }

    const audio = (
      <audio
        {...audioProps}
      ></audio>
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

    const playSound = <PlaySound
      position="5 5 -5"
      callback={this.playSound}
    />

    return (
      <a-entity visible={visible}>
        {sky}
        {listImageElement}
        {listNavElement}
        {playSound}
        {audio}
      </a-entity>
    )
  }
}

Room.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  room: React.PropTypes.object.isRequired,
  listNav: React.PropTypes.array.isRequired,
  listImage: React.PropTypes.array,
  navImageId: React.PropTypes.string.isRequired,
  navCallback: React.PropTypes.func.isRequired,
  isWelcome: React.PropTypes.bool.isRequired,
}
