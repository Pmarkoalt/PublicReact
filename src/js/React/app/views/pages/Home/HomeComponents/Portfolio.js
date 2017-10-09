import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import Flickity from 'flickity';

import PortfolioData from './Portfolio.data.js';

class Portfolio extends Component{
  constructor(props){
    super(props)
    this.state = {
      all: true,
      identities: false,
      interactive: false,
      artDirection: false,
      print: false,
      motion: false,
      fromTop: -1000,
      special: PortfolioData.special,
      showSpecial: false,
      selectedIndex: 0,
      count: 0,
      galleryLoaded: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.loadGallery = this.loadGallery.bind(this);
    this.showSpecial = this.showSpecial.bind(this);
  }

  handleChange(event) {
    var filterOn = ""
    this.setState({all: false, identities: false, interactive: false, artDirection: false, print: false, motion: false})
    this.setState({[event.target.value]: true});
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    const specialNav = this.refs.test;
    const options = {
        cellSelector: '.specialCard',
        contain: true,
        initialIndex: 0,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        resize: true,
        setGallerySize: true,
        imagesLoaded: true
    }
    this.flkty = new Flickity(specialNav, options);
    this.flkty.on('cellSelect', this.updateSelected);

  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  imageLoaded(){
    this.state.count++;
    if (this.state.count === this.state.special.length){
      this.loadGallery();
      this.setState({galleryLoaded: true});
    }
  }

  loadGallery(){
    this.flkty.resize();
  }

  handleScroll(event) {
    this.setState({
      fromTop: window.pageYOffset - this.refs.port.offsetTop
    });
  }

  updateSelected() {
      var index = this.flkty.selectedIndex;
      this.setState({ selectedIndex: index });
  }

  showSpecial() {
    this.setState({
      showSpecial : !this.state.showSpecial
    });
  }

  render(AppData){
    return(
      <div ref="port" className="capabilities">
        {/* {this.state.fromTop > -230 && */}
        <div className={"navContainer " + (this.state.fromTop > -230 && "navShow")}>
          <nav className="capabilities__content__nav">
            <div className="capabilities__content__nav__header">
              <h1 className="capabilities__header"> Selected Work </h1>
            </div>
            <select value={this.state.filter} onChange={this.handleChange}>
              <option value="all">All</option>
              <option value="identities">Identites</option>
              <option value="interactive">Interactive</option>
              <option value="artDirection">Art Direction</option>
              <option value="print">Print</option>
              <option value="motion">Motion</option>
            </select>
            <button onClick={this.showSpecial}> Show Special </button>
          </nav>
          <div ref="test" className={"capabilities__content__specialNav " + (this.state.showSpecial && "showSpecial")}>
            {this.state.special.map((card, index) => {
              return(
                <Link key={index} to={card.link}>
                  <div className={"specialCard " + (this.state.galleryLoaded ? "galleryLoaded" : "" )}>
                    <img className="specialImg" src={card.image} onLoad={this.imageLoaded}/>
                    <p className="specialText"> {card.title} </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
          <div className="capabilities__content">
            <div className="capabilities__content__gallery">
              <div className="capabilities__content__gallery__row">
                <Link to={'/visual/visualtest'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/telegram/telegram.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle">Telegram</h3>
                      <h4 className="capabilities__galleryType">Identity, Web, Digital </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/video/videotest'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.motion ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') }>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/room/room.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Room </h3>
                      <h4 className="capabilities__galleryType"> Motion, Print, Identities </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/audio/audiotest'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/ecube/ecube.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> ECube </h3>
                      <h4 className="capabilities__galleryType"> Interactive, Web, Digital  </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/boy/boy.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Boy </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/monza/monza.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Monza Light </h3>
                      <h4 className="capabilities__galleryType"> Interactive, Web, Digital  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '') + (this.state.motion ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/nazmag/nazmag.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Naz Mag </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive, Motion </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/rhizome/rhizome.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Rhizome </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/emerge/emerge.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Emerge </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/trump/trump.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Trump </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/em/em.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> EM </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/eddy/eddy.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Eddy Bauer </h3>
                      <h4 className="capabilities__galleryType"> Identity, Print  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/europe/europe.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Europe </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/blackstar/blackstar.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Blackstar </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/f/f.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> F </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.industry ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/industry/industry.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Industry </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/visual/omni'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/omni/omniPort.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Omni </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/sea/sea.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Sea </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/studios/studios.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Studios </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive  </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__row__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/tendencies/tendencies.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Tendencies </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                {/* <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/sea/sea.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Sea </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/studios/studios.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Studios </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive  </h4>
                    </div>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Portfolio;
