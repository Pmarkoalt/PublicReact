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
      selectOptions: ['all', 'identities', 'interactive', 'artDirection', 'print', 'motion'],
      selectCounter: 0,
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
    this.updateFilter = this.updateFilter.bind(this);
  }

  handleChange(value) {
    this.setState({all: false, identities: false, interactive: false, artDirection: false, print: false, motion: false})
    this.setState({[value]: true});
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
    if (this.flkty) {
        this.flkty.off('cellSelect', this.updateSelected);
        this.flkty.destroy();
    }
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

  updateFilter(input){
    var result = this.state.selectCounter + input;
    if (result === 6){
      this.setState({selectCounter: 0});
      return this.handleChange(this.state.selectOptions[0]);
    }
    if (result === -1){
      this.setState({selectCounter: 5});
      return this.handleChange(this.state.selectOptions[5]);
    }
    this.setState({selectCounter: result});
    return this.handleChange(this.state.selectOptions[result]);
  }

  render(AppData){
    return(
      <div ref="port" className="capabilities">
        {/* {this.state.fromTop > -230 && */}
        <div className="navContainer">
          <nav className={"capabilities__content__nav " + (this.state.fromTop > -230 && "navShow")}>
            <div className="capabilities__content__nav__header">
              <h1 className="capabilities__header"> PUBLIC </h1>
            </div>
            <div className="capabilities__content__nav__selectBox">
              <div className="before" onClick={() => this.updateFilter(-1)}> </div>
              <p className="filterSelect"> {this.state.selectOptions[this.state.selectCounter]} </p>
              <div className="after" onClick={() => this.updateFilter(1)}> </div>
            </div>

            {/* <select value={this.state.filter} onChange={this.handleChange}>
              <option value="all">All</option>
              <option value="identities">Identites</option>
              <option value="interactive">Interactive</option>
              <option value="artDirection">Art Direction</option>
              <option value="print">Print</option>
              <option value="motion">Motion</option>
            </select> */}
            <a className="capabilities__content__nav__header__specialButtonMobile sideBarContainer" onClick={this.showSpecial}> <div className="sideBarCircle"> {this.state.showSpecial ? "-" : "+"} </div> </a>
            <a className="capabilities__content__nav__header__specialButton capabilities__galleryType" style={{color: '#555'}} onClick={this.showSpecial}> Special Projects {this.state.showSpecial ? "-" : "+"} </a>
          </nav>
          <div ref="test" className={"capabilities__content__specialNav " + (this.state.showSpecial ? " showSpecial " : "") + (this.state.fromTop < -230 && "specialHide")}>
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
          <div className={"capabilities__content " + (this.state.showSpecial ? "blur" : "") }>
            <div className="capabilities__content__threeRow">
              <div className="capabilities__content__threeRow__item">
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                    <Link to={'/visual/telegram'}>
                      <img className="capabilities__content__gallery__item__image" src="/imgs/telegram/telegram1.jpg" />
                    </Link>
                    <p className="capabilities__title"> TELEGRAM PUBLISHING </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                    <div className="capabilities__content__threeRow__item__tags">
                      <p className="capabilities__tag"> TYPOGRAPHY </p>
                      <p className="capabilities__tag"> EDITORIAL </p>
                    </div>
                  </div>


              </div>
              <div className="capabilities__content__threeRow__item">

              </div>
              <div className="capabilities__content__threeRow__item">

              </div>

            </div>
            <div className="capabilities__content__twoRow">

            </div>
            <div className="capabilities__content__banner">

            </div>
            {/* <div className="capabilities__content__gallery">
                <Link to={'/visual/telegram'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/telegram/telegramPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle">TELEGRAM</h3>
                      <h4 className="capabilities__galleryType">Identity, Web, Digital </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/studios/studiosPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> STUDIO </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/connersmith'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/connersmith/connersmithPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> CONNER SMITH </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/omni'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/omni/omniPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> OMNI </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/fringe'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/fringe/fringePort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> FRINGE </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/rhizome'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/rhizome/rhizomePort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> RHIZOME </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/foto'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/foto/fotoPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> FOTO </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/video/artsy'} onClick={() => this.props.handlePlaying(true)}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/artsy/artsyPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> ARTSY </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/sea'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/sea/seaPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> SEA </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/paintings'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/paintings/paintingsPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> PAINTINGS </h3>
                      <h4 className="capabilities__galleryType"> Paintings </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/visualtest'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '') + (this.state.motion ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/nazmag/nazmagPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> NAZ MAG </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive, Motion </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/boy'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/boy/boyPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> BOY </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/video/videotest'} onClick={() => this.props.handlePlaying(true)}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.motion ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') }>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/room/roomPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> ROOM </h3>
                      <h4 className="capabilities__galleryType"> Motion, Print, Identities </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/blow'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/blow/blowPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> BLOW </h3>
                      <h4 className="capabilities__galleryType"> Print, Interactive  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/blackstar'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/blackstar/blackstarPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> BLACKSTAR </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/monza'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/monza/monzaPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> MONZA LIGHT </h3>
                      <h4 className="capabilities__galleryType"> Interactive, Web, Digital  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/tendencies/tendenciesPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> TENDENCIES </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/eddy/eddyPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> EDDY BAUER </h3>
                      <h4 className="capabilities__galleryType"> Identity, Print  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/thirteenu'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/13u/13Port.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> 13|U </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/general/general.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> IN PROGRESS </h3>
                      <h4 className="capabilities__galleryType"> Identity </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/1432r'}>
                 <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                   <img className="capabilities__content__gallery__item__image" src="/imgs/1432r/fourteenPort.jpg" />
                   <div className="capabilities__content__gallery__item__text">
                     <h3 className="capabilities__galleryTitle"> 1432R </h3>
                     <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                   </div>
                 </div>
               </Link>
                <Link to={'/visual/ecube'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/ecube/ecubePort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> ECUBE </h3>
                      <h4 className="capabilities__galleryType"> Interactive, Web, Digital  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/audio/audiotest'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/emerge/emergePort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> EMERGE </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/visual/trump'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/trump/trumpPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> TRUMP </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/em/emPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> EM </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className={"capabilities__content__gallery__item " + (this.state.all ? 'filterOff' : '') + (this.state.industry ? 'filterOff' : '')}>
                    <img className="capabilities__content__gallery__item__image" src="/imgs/industry/industryPort.jpg" />
                    <div className="capabilities__content__gallery__item__text">
                      <h3 className="capabilities__galleryTitle"> INDUSTRY </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
    )
  }
}

export default Portfolio;
