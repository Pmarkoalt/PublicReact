import React, { Component } from 'react';
import Tilt from 'react-tilt'
import ReactPlayer from 'react-player'

class Audio extends Component{
  constructor(props){
    super(props)
    this.state = {
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    }
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  onPlay = () => {
    this.setState({ playing: true })
  }
  onPause = () => {
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onConfigSubmit = () => {
    let config
    try {
      config = JSON.parse(this.configInput.value)
    } catch (error) {
      config = {}
      console.error('Error setting config:', error)
    }
    this.setState(config)
  }
  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }
  ref = player => {
    this.player = player
  }

  render(){
    const {
      url, playing, volume, muted,
      played, loaded, duration,
      playbackRate,
      soundcloudConfig,
      vimeoConfig,
      youtubeConfig,
      fileConfig
    } = this.state
    const SEPARATOR = ' · '

    return(
      <div className="audio">
        <div className="audio__content">
          <div className="audio__content__album">
            <Tilt className="audio__content__album__tilt" options={{ max : 25 }}>
              <div className="audio__content__album__tilt__cover"> 👽 </div>
            </Tilt>
            <ReactPlayer
              ref={this.ref}
              url='https://upload.wikimedia.org/wikipedia/commons/a/a4/Washington_Post.ogg'
              width='0px'
              height='0px'
              playing={playing}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              soundcloudConfig={soundcloudConfig}
              vimeoConfig={vimeoConfig}
              youtubeConfig={youtubeConfig}
              fileConfig={fileConfig}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={() => this.setState({ playing: false })}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={duration => this.setState({ duration })}
            />
            <div className="audio__content__album__media">
              <a className="audio__content__album__media__play" onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</a>
              <div className="audio__content__album__media__input">
                <input
                  type='range' min={0} max={1} step='any'
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                />
              </div>
              <div className="audio__content__album__media__volume">
                <input type='range' orient='vertical' className='volumeSlider' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                <input type='checkbox' checked={muted} onChange={this.toggleMuted} />

              </div>
            </div>
          </div>
          <div className="audio__content__text">
            <h1 className="visualTitle"> <span className="portHeader"> The River </span>  <span className="portItalic"> Ali Farka </span> </h1>
            <p className="portText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ligula sodales viverra suscipit, orci lectus elementum velit, et finibus libero risus at urna. Aenean a leo et leo porta scelerisque at ut lacus. Cras sodales vestibulum mi eu ultrices. Maecenas vitae elit at lacus semper bibendum nec non tortor. Sed eget nibh vitae enim lobortis feugiat. Quisque finibus, magna ac feugiat eleifend, tellus leo commodo ante, sodales convallis metus mi eget orci. Morbi quis nisi nec diam vehicula vulputate vel ultricies sem. Donec suscipit non lectus eu pharetra. Donec quis vulputate felis. Nullam sagittis magna metus, eget aliquet tortor sollicitudin nec. Praesent ultrices cursus facilisis. Phasellus hendrerit malesuada massa et mattis.</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Audio;
