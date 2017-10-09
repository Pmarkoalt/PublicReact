import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Flickity from 'flickity'
import { Link } from 'react-router-dom'

import NotFoundPage from '../../components/NotFoundPage';

class Visual extends Component{

  constructor(props){
    var params = props.match.params.id;
    super(props)
    this.state = {
      galleryLoaded: false,
      count: 0,
      selectedIndex: 0,
      project: this.props.projects[params],
    }
    this.imageLoaded = this.imageLoaded.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.updateSelectedNav = this.updateSelectedNav.bind(this);
    this.loadGallery = this.loadGallery.bind(this);
    this.navClick = this.navClick.bind(this);
    this.backAbout = this.backAbout.bind(this);
  }

  componentDidMount() {
    if (this.state.project){
      const carousel = this.refs.carousel;
      const nav = this.refs.caroNav;
      const options = {
          contain: true,
          initialIndex: 0,
          wrapAround: true,
          prevNextButtons: false,
          pageDots: false,
          resize: true,
          setGallerySize: true,
          imagesLoaded: true
      }
      const mainOptions = {
        cellSelector: '.card',
        ...options
      }
      const navOptions = {
        cellSelector: '.navCard',
        ...options,
        wrapAround: false,
        freeScroll: true
      }

      this.flkty = new Flickity(carousel, mainOptions);
      this.flktyNav = new Flickity(nav, navOptions);
      this.flkty.on('cellSelect', this.updateSelected);

      this.flkty.resize();

    }
    setTimeout(() =>{
      if (this.state.galleryLoaded === false){
        this.loadGallery();
        this.setState({galleryLoaded : true});
      }
    }, 10000);
  }

  imageLoaded(){
    this.state.count++;
    console.log(`the current count is ${this.state.count}`);
    if (this.state.count === this.state.project.cards.length){
      this.loadGallery();
      this.setState({galleryLoaded: true});
      console.log("load gallery triggered");
    }
  }

  loadGallery(){
    this.flkty.resize();
    this.flktyNav.resize();
  }

  updateSelected() {
      var index = this.flkty.selectedIndex;
      this.setState({ selectedIndex: index });
  }

  updateSelectedNav(){
      var index = this.flktyNav.selectedIndex;
      this.setState({ selectedIndex: index });
  }

  navClick(index){
    this.setState({ selectedIndex: index });
    console.log(index);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.selectedIndex !== this.flkty.selectedIndex){
      this.flkty.selectCell(this.state.selectedIndex);
    }
    if (prevState.selectedIndex !== this.flktyNav.selectedIndex){
      this.flktyNav.selectCell(this.state.selectedIndex);
    }
  }

  backAbout(){
    if (this.props.aboutOpen === true){
      this.props.handleAboutOpen();
    }
  }

  componentWillUnmount() {
      if (this.flkty) {
          this.flkty.off('cellSelect', this.updateSelected);
          this.flkty.destroy();
      }
  }


  render(){
    if (this.state.project){
      return(
        <div className="visual">
          <Link to={'/'}> <div className="sideBarContainer back" onClick={this.backAbout}> <div className={"sideBarCircle " + (this.props.aboutOpen && "transparent")}> <img className="x" src="/imgs/util/back.svg" /> <p className={"帰 " + (this.props.aboutOpen && "hidden")}> 帰 </p>  </div> </div> </Link>
          <div className="visual__carouselContainer">
            {this.state.galleryLoaded === false && <img className="visual__carouselContainer__loader" src="/imgs/util/loading.png" />}
              <div ref='carousel' className={'visual__carouselContainer__carousel ' + (this.state.galleryLoaded ? "galleryLoaded" : "")}>
                {this.state.project.cards.map((card, index) => {
                  return(
                    <div key={index} className="card"><img className="caroImg" onLoad={this.imageLoaded} src={card}/></div>
                  )
                })}
              </div>
              <div ref='caroNav' className={'visual__carouselContainer__navBar ' + (this.state.galleryLoaded ? "galleryLoaded" : "")}>
                {this.state.project.cards.map((card, index) => {
                  return(
                    <div key={index} className="navCard" onClick={() => this.navClick(index)}><img className="navImg" src={card}/></div>
                  )
                })}
              </div>
          </div>
          <div className="visual__content">
            <div className="visual__content__text">
              <h1 className="visualTitle"> <span className="portHeader"> {this.state.project.title} </span>  <span className="portItalic"> {this.state.project.type} </span> </h1>
              {this.state.project.headText.map((text, index) => {
                return(
                  <p key={index} className="portText linebreak"> {text} </p>
                )
              })}
            </div>
            {this.state.project.banner &&
              <img className="visual__content__rowPhoto" src={this.state.project.banner}/>
            }
            {this.state.project.twoPost &&
              <div className="visual__content__twoPoster">
                {this.state.project.twoPost.map((post, index) => {
                  return(
                    <div key={index} className="visual__content__twoPoster__item">
                      <img className="visual__content__twoPoster__item__poster" src={post.poster}/>
                      <p className="visual__content__twoPoster__item__text portText">{post.text} </p>
                    </div>
                  )
                })}
              </div>
            }
            {this.state.project.threePost &&
              <div className="visual__content__threePoster">
                {this.state.project.threePost.map((post, index) => {
                  return(
                    <div key={index} className="visual__content__threePoster__item">
                      <img className="visual__content__threePoster__item__card" src={post.poster} />
                      <h4 className="portSmallTitle"> Comment Pull  </h4>
                      <p className="portText"> {post.text} </p>
                    </div>
                  )
                })}
              </div>
            }
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

export default Visual;
