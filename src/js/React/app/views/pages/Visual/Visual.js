import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import Flickity from 'flickity'
import { Link } from 'react-router-dom'


class Visual extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentDidMount() {
      const carousel = this.refs.carousel;
      const options = {
          cellSelector: '.card',
          contain: true,
          initialIndex: 0,
          wrapAround: true,
          prevNextButtons: false,
          pageDots: false,
          resize: true,
          setGallerySize: true
      }

      this.flkty = new Flickity(carousel, options);
      this.flkty.on('cellSelect', this.updateSelected);
      this.flkty.resize()
  }

  updateSelected() {
      var index = this.flkty.selectedIndex;
      this.setState({
          selectedIndex: index
      });
  }

  componentWillUnmount() {
      if (this.flkty) {
          this.flkty.off('cellSelect', this.updateSelected);
          this.flkty.destroy();
      }
  }


  render(){
    var settings = {
      infinite: true,
      adaptiveHeight: true,
      arrows: false,
      variableWidth: true,
      slidesToShow: 3,
      wrapAround: true,

    }
    return(
      <div className="visual">
        <Link to={'/'}><button className="backButton">BACK TO HOME PAGE</button></Link>
          <div ref='carousel' className='visual__carousel'>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
            <div className="card"><img className="caroImg" src="http://lorempixel.com/900/1400"/></div>
          </div>
        <div className="visual__content">
          <div className="visual__content__text">
            <h1 className="visualTitle"> <span className="portHeader"> Love Magazine </span>  <span className="portItalic"> Brand Identity </span> </h1>
            <p className="portText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ligula sodales viverra suscipit, orci lectus elementum velit, et finibus libero risus at urna. Aenean a leo et leo porta scelerisque at ut lacus. Cras sodales vestibulum mi eu ultrices. Maecenas vitae elit at lacus semper bibendum nec non tortor. Sed eget nibh vitae enim lobortis feugiat. Quisque finibus, magna ac feugiat eleifend, tellus leo commodo ante, sodales convallis metus mi eget orci. Morbi quis nisi nec diam vehicula vulputate vel ultricies sem. Donec suscipit non lectus eu pharetra. Donec quis vulputate felis. Nullam sagittis magna metus, eget aliquet tortor sollicitudin nec. Praesent ultrices cursus facilisis. Phasellus hendrerit malesuada massa et mattis.</p>
          </div>
          <img className="visual__content__rowPhoto" src="http://via.placeholder.com/1400x900"/>
          <div className="visual__content__twoPoster">
            <img className="visual__content__twoPoster__items" src="http://via.placeholder.com/900x1400"/>
            <img className="visual__content__twoPoster__items" src="http://via.placeholder.com/900x1400"/>
          </div>
          <div className="visual__content__blurb">
            <p className="portText"> Ayo it's ya mans lil' big penis....Ayo it's ya mans lil' big penis....Ayo it's ya mans lil' big penis....Ayo it's ya mans lil' big penis....Ayo it's ya mans lil' big penis....</p>
          </div>
          <div className="visual__content__threePoster">
            <div className="visual__content__threePoster__item">
              <img className="visual__content__threePoster__item__card" src="http://via.placeholder.com/900x1400" />
              <h4 className="portSmallTitle"> Comment Pull </h4>
              <p className="portText"> Public is the child of ramulus and rammus coming straight out ya mans anus </p>
            </div>
            <div className="visual__content__threePoster__item">
              <img className="visual__content__threePoster__item__card" src="http://via.placeholder.com/900x1400" />
              <h4 className="portSmallTitle"> Comment Pull </h4>
              <p className="portText"> Public is the child of ramulus and rammus coming straight out ya mans anus </p>
            </div>
            <div className="visual__content__threePoster__item">
              <img className="visual__content__threePoster__item__card" src="http://via.placeholder.com/900x1400" />
              <h4 className="portSmallTitle"> Comment Pull </h4>
              <p className="portText"> Public is the child of ramulus and rammus coming straight out ya mans anus </p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Visual;
