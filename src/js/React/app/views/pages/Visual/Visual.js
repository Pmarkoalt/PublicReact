import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'


class Visual extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    var settings = {
      infinite: true,
      adaptiveHeight: true,
      arrows: false,
      variableWidth: true,
      slidesToShow: 3,
    };
    return(
      <div className="visual">
        <Link to={'/'}><button className="backButton">BACK TO HOME PAGE</button></Link>
        <div className="visual__carousel">
          <Slider {...settings}>
            <div>1<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>2<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>3<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>4<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>5<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>6<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>7<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>8<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
            <div>9<img className="caroImg" src="http://via.placeholder.com/900x1400"/></div>
          </Slider>
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
