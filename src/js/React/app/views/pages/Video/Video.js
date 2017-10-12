import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'

import NotFoundPage from '../../components/NotFoundPage';

class Video extends Component{
  constructor(props){
    var params = props.match.params.id;
    var playing = props.playing;
    super(props)
    this.state = {
      playing: playing,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      project: this.props.projects[params]
    }
    this.backAbout = this.backAbout.bind(this);
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
  onClickFullscreen = () => {
  screenfull.request(findDOMNode(this.player))
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

  backAbout(){
    if (this.props.aboutOpen === true){
      this.props.handleAboutOpen();
    }
  }

  componentDidMount(){
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
    if (this.state.project){
      return(
        <div className="video">
          <div className="video__content">
            <Link to={'/'}> <div className="sideBarContainer back" onClick={this.backAbout}> <div className={"sideBarCircle " + (this.props.aboutOpen && "transparent")}> <img className="x" src="/imgs/util/backWhite.svg" /> <img className={"帰 " + (this.props.aboutOpen && "hidden")} src="/imgs/util/backBlack.svg" /> </div> </div> </Link>
            <div className="video__content__video">
              <div className="video__content__video__container">
                  <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='100%'
                    height='100%'
                    url={this.state.project.video}
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
              </div>
              <div className="video__content__video__media">
                <div className="video__content__video__media__playing">
                  <a className="video__content__video__media__playing__play" onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</a>
                  <img className="fullscreen" src="/imgs/util/fullscreen.svg" onClick={this.onClickFullscreen} />
                </div>
                <div className="video__content__video__media__input">
                  <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    onMouseDown={this.onSeekMouseDown}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekMouseUp}
                  />
                </div>
                <div className="video__content__video__media__volume">
                  <img className="video__content__album__media__volume__mute" onClick={this.toggleMuted} src={this.state.muted ? "/imgs/util/mute.svg" : "/imgs/util/speaker.svg"} />
                  <input type='range' orient='vertical' className='volumeSlider' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                </div>
              </div>
            </div>
            <div className="video__content__text">
              <h1 className="visualTitle"> <span className="portHeader"> {this.state.project.title} </span>  <span className="portItalic"> {this.state.project.artist}</span> </h1>
              {this.state.project.summary.map((text, index) => {
                return(
                  <p key={index} className="portText linebreak"> {text} </p>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
    else{
      return(
        <NotFoundPage />
      )

    }


  }
}

export default Video;
