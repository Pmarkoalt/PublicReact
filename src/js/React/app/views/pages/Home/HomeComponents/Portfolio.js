import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from 'react-router-dom'


class Portfolio extends Component{
  constructor(props){
    super(props)
    this.state = {
      filter: 'all'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  ComponentDidMount(){


  }

  render(){
    return(
      <div className="capabilities">
        <StickyContainer>
          <Sticky>
            {
              ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                return (
                  <nav style={{ ...style}} className={"capabilities__content__nav " + (isSticky ? 'navShadow' : 'navHide')}>
                    <div className="capabilities__content__nav__header">
                      <h1 className="capabilities__header"> Selected Work </h1>
                    </div>
                    {/* <div className="capabilities__content__nav__links">
                      <span id="all" className="capabilities__headLink" onClick={this.handleFilter}> All </span>
                      <span id="identities" className="capabilities__headLink" onClick={this.handleFilter}> Identities </span>
                      <span id="interactive" className="capabilities__headLink" onClick={this.handleFilter}> Interactive </span>
                      <span id="soundDesign" className="capabilities__headLink" onClick={this.handleFilter}> Sound Design </span>
                      <span id="artDirection" className="capabilities__headLink" onClick={this.handleFilter}> Art Direction </span>
                      <span id="physical" className="capabilities__headLink" onClick={this.handleFilter}> Physical </span>
                    </div> */}
                    <select value={this.state.value} onChange={this.handleChange}>
                      <option value="all">All</option>
                      <option value="identities">Identites</option>
                      <option value="interactive">Interactive</option>
                      <option value="artDirection">Art Direction</option>
                      <option value="print">Print</option>
                      <option value="motion">Motion</option>
                    </select>
                  </nav>
                )
              }
          }
          </Sticky>
          <div className="capabilities__content">

            <div className="capabilities__content__gallery">
              <div className="capabilities__content__gallery__row">
                <Link to={'/visual/test'}>
                  <div style={{opacity:  !this.state.filter === 'all' || !this.state.filter ? 1 : .7}} className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/telegram/telegram.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle">Telegram</h3>
                      <h4 className="capabilities__galleryType">Identity, Web, Digital </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/video/test'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/room/room.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Room </h3>
                      <h4 className="capabilities__galleryType"> Motion, Print, Identities </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/audio/test'}>
                  <div className="capabilities__content__gallery__row__item">
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
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/boy/boy.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Boy </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/monza/monza.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Monza Light </h3>
                      <h4 className="capabilities__galleryType"> Interactive, Web, Digital  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
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
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/rhizome/rhizome.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Rhizome </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/emerge/emerge.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Emerge </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
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
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/em/em.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> EM </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/eddy/eddy.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Eddy Bauer </h3>
                      <h4 className="capabilities__galleryType"> Identity, Print  </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
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
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/blackstar/blackstar.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Blackstar </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/f/f.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> F </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/industry/industry.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Industry </h3>
                      <h4 className="capabilities__galleryType"> Print, Editorial, One-off  </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
                    <img className="capabilities__content__gallery__row__item__image" src="/imgs/omni/omni.jpg" />
                    <div className="capabilities__content__gallery__row__item__text">
                      <h3 className="capabilities__galleryTitle"> Omni </h3>
                      <h4 className="capabilities__galleryType"> Identities, Interactive </h4>
                    </div>
                  </div>
                </Link>
                <Link to={'/fakepage'}>
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
                </Link>
              </div>
              <div className="capabilities__content__gallery__row">
                <Link to={'/fakepage'}>
                  <div className="capabilities__content__gallery__row__item">
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
      </StickyContainer>
      </div>
    )
  }
}

export default Portfolio;
