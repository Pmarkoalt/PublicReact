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
        wrapAround: false,
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
            <div className="capabilities__content__threerow">

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/telegram'}>
                  <img className="capabilities__image capabilities__threeImage capabilities__border" src="/imgs/telegram/telegramPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> TELEGRAM PUBLISHING </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/omni'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/omni/omniPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> OMNI CONTEMPORARY </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/connersmith'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/connersmith/connersmithPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> CONNERSMITH </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="capabilities__content__tworow">
              <div className={"capabilities__content__tworow__bigItem " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')} >
                <Link className="capabilities_twoBigLink" to={'/visual/rhizome'}>
                  <img className="capabilities__image capabilities__twoBigImage" src="/imgs/rhizome/rhizomePort.png" />
                </Link>
                  <div className="capabilities__content__tworow__bigItem__text">
                    <div className="capabilities__text">
                      <p className="capabilities__title"> RHIZOME DC </p>
                      <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                    </div>
                    <div className="capabilities__content__threerow__item__tags">
                      <p className="capabilities__tag"> TYPOGRAPHY </p>
                      <p className="capabilities__tag"> EDITORIAL </p>
                    </div>
                  </div>
              </div>

              <div className={"capabilities__content__tworow__smallItem " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')} >
                <Link className="capabilities__twoSmallLink" to={'/visual/sea'}>
                  <img className="capabilities__image capabilities__twoSmallImage capabilities__border" src="/imgs/sea/seaPort.jpg" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> SEA </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="capabilities__content__threerow">

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/blackstar'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/blackstar/blackstarPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> BLACKSTAR </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/omni'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/eurosign/eurosignPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> EURO-SIGN </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/monza'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/monza/monzaPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> MONZA LIGHT </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

            </div>

            <Link to={'/video/artsy'} onClick={() => this.props.handlePlaying(true)}>
            <div className={"capabilities__content__banner " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
              <div className="capabilities__content__banner__overlay"> </div>
              <img className="capabilities__content__banner__image" src="/imgs/artsy/artsyPort.png" />
              <p className="capabilities__galleryTitle"> ARTSY ART BASEL MIAMI</p>
              <p className="capabilities__galleryDetails"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
              <div className="capabilities__content__banner__tags">
                <p className="capabilities__galleryTag"> TYPOGRAPHY </p>
                <p className="capabilities__galleryTag"> EDITORIAL </p>
              </div>
            </div>
            </Link>

            <div className="capabilities__content__tworow">
              <div className={"capabilities__content__tworow__bigItem " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')} >
                <Link className="capabilities_twoBigLink" to={'/visual/eddy'}>
                  <img className="capabilities__image capabilities__twoBigImage" src="/imgs/eddy/eddyPort.png" />
                </Link>
                  <div className="capabilities__content__tworow__bigItem__text">
                    <div className="capabilities__text">
                      <p className="capabilities__title"> EDDY BAUER </p>
                      <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                    </div>
                    <div className="capabilities__content__threerow__item__tags">
                      <p className="capabilities__tag"> TYPOGRAPHY </p>
                      <p className="capabilities__tag"> EDITORIAL </p>
                    </div>
                  </div>
              </div>

              <div className={"capabilities__content__tworow__smallItem " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')} >
                <Link className="capabilities__twoSmallLink" to={'/visual/1432r'}>
                  <img className="capabilities__image capabilities__twoSmallImage capabilities__border" src="/imgs/1432r/fourteenPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> 1432R </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="capabilities__content__threerow">

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/blow'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/blow/blowPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> BLOW UP </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.motion ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/room'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/room/roomPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> ROOM </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/editorial'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/editorial/editorialPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> EDITORIALS </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="capabilities__content__threerow">

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/fringe'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/fringe/fringePort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> FRINGE </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/studios'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/studios/studiosPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> STUDIOS ARCHITECTURE </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

              <div className={"capabilities__content__threerow__item " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')}>
                <Link className="capabilities__threeLink" to={'/visual/emerge'}>
                  <img className="capabilities__image capabilities__threeImage" src="/imgs/emerge/emergePort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> EMERGE </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="capabilities__content__tworow">
              <div className={"capabilities__content__tworow__bigItem " + (this.state.all ? 'filterOff' : '') + (this.state.identities ? 'filterOff' : '') + (this.state.print ? 'filterOff' : '')} >
                <Link className="capabilities_twoBigLink" to={'/visual/identity'}>
                  <img className="capabilities__image capabilities__twoBigImage" src="/imgs/identity/identityPort.png" />
                </Link>
                  <div className="capabilities__content__tworow__bigItem__text">
                    <div className="capabilities__text">
                      <p className="capabilities__title"> IDENTITY *IN PROGRESS </p>
                      <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                    </div>
                    <div className="capabilities__content__threerow__item__tags">
                      <p className="capabilities__tag"> TYPOGRAPHY </p>
                      <p className="capabilities__tag"> EDITORIAL </p>
                    </div>
                  </div>
              </div>

              <div className={"capabilities__content__tworow__smallItem " + (this.state.all ? 'filterOff' : '') + (this.state.interactive ? 'filterOff' : '')} >
                <Link className="capabilities__twoSmallLink" to={'/visual/1432r'}>
                  <img className="capabilities__image capabilities__twoSmallImage capabilities__border" src="/imgs/newTypo/newTypoPort.png" />
                </Link>
                <div className="capabilities__threeContent">
                  <div className="capabilities__text">
                    <p className="capabilities__title"> NEW TYPOGRAPHIC TENDENCIES </p>
                    <p className="capabilities__details"> Display Typeface. Created in-house, the typeface references the Euro-motorsport catalog of the 1960s-70s. </p>
                  </div>
                  <div className="capabilities__content__threerow__item__tags">
                    <p className="capabilities__tag"> TYPOGRAPHY </p>
                    <p className="capabilities__tag"> EDITORIAL </p>
                  </div>
                </div>
              </div>
            </div>
            <br /> <br /> <br />

            </div>
          </div>
    )
  }
}

export default Portfolio;
