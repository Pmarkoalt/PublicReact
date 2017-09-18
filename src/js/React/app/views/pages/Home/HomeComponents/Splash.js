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
      var camera = new THREE.PerspectiveCamera( 48, 100/100, 0.01, 1000 );

      var renderer = new THREE.WebGLRenderer({
        antialias:true
      });
      renderer.setClearColor( 0xffffff );
      renderer.setSize( 100, 100 );
      container.appendChild(renderer.domElement);

      //wireframe
      var geometry = new THREE.SphereGeometry(2,30,30);
      var material = new THREE.MeshLambertMaterial({
        color: 0xE2E2E2  ,
        wireframe: true,
        transparent: true,
        opacity: .2
      });
      var wireframe = new THREE.Mesh( geometry, material );
      scene.add( wireframe );


      //globe
      var geometry = new THREE.SphereGeometry(1.75,15,10);
      var material = new THREE.MeshLambertMaterial({color: 0x333333, transparent: true,opacity:.05});
      var globe = new THREE.Mesh( geometry, material );
      scene.add( globe );

      //lights
      var light1 = new THREE.DirectionalLight(0x1f2f38,.75);
      scene.add(light1);
      light1.position.set(1.5,2,2);

      var light2 = new THREE.DirectionalLight(0x455570,1);
      scene.add(light2);
      light2.position.set(-1.5,-2,2);

      var light3 = new THREE.DirectionalLight(0xffffff,1);
      scene.add(light3);
      light3.position.set(-2,2,-2);

      var light3 = new THREE.DirectionalLight(0xffffff,.25);
      scene.add(light3);
      light3.position.set(2,2,-2);

      camera.position.z = 5;

      var wireframeY = 0;
      var wireframeX = 0;
      var easing = .2;
      var autoRotate = true;

      var render = function () {
        requestAnimationFrame( render );

        if(autoRotate == true){
          wireframe.rotation.y += .003; //Horizontal rotation speed
          // wireframe.rotation.x += .01; // Vertical Rotation Speed
        }else{
          //rotate Y with easing
          var yDistance = wireframe.rotation.y - wireframeY;
          yFullDistance = Math.sqrt(yDistance * yDistance);
          if (yFullDistance > 0) {
            wireframe.rotation.y -= yDistance * easing;
          }

          //rotate X with easing
          var xDistance = wireframe.rotation.x - wireframeX;
          xFullDistance = Math.sqrt(xDistance * xDistance);
          if (xFullDistance > 0) {
            wireframe.rotation.x -= xDistance * easing;
          }
        }



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
