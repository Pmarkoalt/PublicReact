import React, { Component } from 'react';
import THREELib from "three-js";
var THREE = THREELib();

class Splash extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){

      var container = document.getElementById('globe');
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 33, 100/100, 0.1, 5000 );

			var renderer = new THREE.WebGLRenderer({alpha: true});
			renderer.setSize( 100, 100);
			container.appendChild(renderer.domElement);

			var ambientLight = new THREE.AmbientLight( 0x7d7d7d );
			scene.add( ambientLight );

			var lights = [];
			lights[0] = new THREE.PointLight( 0xc4c4c4, 3, 0 );
			lights[1] = new THREE.PointLight( 0x7d7d7d, 1, 0 );
			lights[2] = new THREE.PointLight( 0xc4c4c4, 1, 0 );

			lights[0].position.set( 0, 20, 0 );
			lights[1].position.set( 100, 200, 100 );
			lights[2].position.set( -100, -200, -100 );

			scene.add( lights[0] );
			scene.add( lights[1] );
			scene.add( lights[2] );

			var material = new THREE.MeshLambertMaterial( { color: 0xc4c4c4, wireframe: true, wireframeLinewidth: 1 } );
			var circle_geom = new THREE.SphereGeometry(20,15,15);

			var circle = new THREE.Mesh( circle_geom, material );

			scene.add( circle );

			camera.position.z = 75;

			var render = function () {
				requestAnimationFrame( render );

				circle.rotation.x += 0.001;
				circle.rotation.y += 0.001;
				circle.rotation.z += 0.001;

				renderer.render(scene, camera);
			};

			render();

  }

  render(){
    return(
      <div className="splash">
        <div className="splash__content">

          <div className="splash__content__threejs">
            <div id="globe" style={{width: 100, height:100}}> </div>
          </div>

          <div className="splash__content__text">
            <div className="splash__content__text__logo">
              <h1 className="splash__h1" id="splashLogo"> PUBLIC.GROUP </h1>
            </div>

            <br/>
            <br/>

            <div className="splash__content__text__paragraph">
              <span className="splash__h2"> We are a design & technology studio based in DC exploring spaces and the people that inhabit them through open dialogue. We work within the tech, design, fashion, music, and cultural sectors building digital & physical experiences. </span>
              <span> <a className="splash__contact"> Contact Us </a> </span>
            </div>

            <br/>
            <br/>

            <div className="splash__content__text__links">
              <span> <a className="splash__links" href="#"> PROCESS </a> </span>
              <span className="splash__links"> / </span>
              <span> <a className="splash__links" href="#"> CAPABILITIES </a> </span>
              <span className="splash__links" href="#"> / </span>
              <span> <a className="splash__links" href="#"> CLIENTS </a> </span>
              <span className="splash__links"> / </span>
              <span> <a className="splash__links" href="#"> LINKS </a> </span>
            </div>
          </div>

        </div>

        <div className="splash__arrowContainer">
          <div className="splash__arrowContainer__arrow"> </div>
        </div>

      </div>

    )
  }
}

export default Splash;
