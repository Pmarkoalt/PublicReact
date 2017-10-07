import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import Flickity from 'flickity'
import { Link } from 'react-router-dom'

import NotFoundPage from '../../components/NotFoundPage';

class Visual extends Component{

  constructor(props){
    var params = props.match.params.id;
    super(props)
    this.state = {
      selectedIndex: 0,
      project: this.props.projects[params]
    }
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentDidMount() {
    if (this.state.project){
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
    }
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
    if (this.state.project){
      return(
        <div className="visual">
          <Link to={'/'}><button className="backButton">BACK TO HOME PAGE</button></Link>
            <div ref='carousel' className='visual__carousel'>
              {this.state.project.cards.map((card, index) => {
                return(
                  <div key={index} className="card"><img className="caroImg" src={card}/></div>
                )
              })}
            </div>
          <div className="visual__content">
            <div className="visual__content__text">
              <h1 className="visualTitle"> <span className="portHeader"> {this.state.project.title} </span>  <span className="portItalic"> {this.state.project.type} </span> </h1>
              <p className="portText"> {this.state.project.headText} </p>
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
