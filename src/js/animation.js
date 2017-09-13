import THREELib from "three-js";
import tween from '@tweenjs/tween.js'
import {TweenLite, TimelineLite} from "gsap";

var THREE     = THREELib(),
    TWEEN     = tween,
    projector = THREELib(['Projector']),
    renderer  = THREELib(['CanvasRenderer']);

var debounce = require('./helpers').debounce;

//===============================
//      LANDING ANIMATION
//===============================

document.addEventListener('DOMContentLoaded', function() {

    // var speaker = document.getElementsByClassName('innerCircle');
    // TweenLite.to(speaker, .5, {strokeWidth: 0, })



    var container;
    var camera, scene, renderer;

    var raycaster;
    var mouse;



    function init() {

        container = document.getElementById('doughnuts');

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.y = 300;
        camera.position.z = 500;

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog( 0x000000, 1, 1000 );

        var geometry = new THREE.TorusGeometry( 18, 10, 7, 10, 6.3  );

        function buildRing() {

            var colors = [
                0x0f01b0,
                0xfff73f,
                0xff6700,
                0x04bf94,
                0xbf1c1c
            ];

            var randomNum = Math.floor(Math.random() * (5 - 0) + 0);

            var color = colors[randomNum];

            var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( {
            color: color, opacity: 1 }));
            object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;

            object.scale.x = 0.01 * 1 + 1;
            object.scale.y = 0.01 * 1 + 1;
            object.scale.z = 0.01 * 1 + 1;

            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;

            scene.add( object );

        }

        function setIntervalX(callback, delay, repetitions) {
            var x = 0;
            var intervalID = window.setInterval(function () {

               callback();

               if (++x === repetitions) {
                   window.clearInterval(intervalID);
               }
            }, delay);
        }

        // This will be repeated every for 5 times with 1 second intervals:

        setIntervalX(function () {
            buildRing();
        }, 75, 30);


        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();

        renderer = new THREE.CanvasRenderer();
        renderer.setClearColor( 0xffffff);
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild(renderer.domElement);

        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function getRandomColor() {
        var colors = [
          0x0f01b0,
          0xfff73f,
          0xff6700,
          0x04bf94,
          0xbf1c1c
        ];
        var randomNum = Math.floor(Math.random() * (5 - 0) + 0);
        var color = colors[randomNum];

        return color;
    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentTouchStart( event ) {

        event.preventDefault();

        event.clientX = event.touches[0].clientX;
        event.clientY = event.touches[0].clientY;
        onDocumentMouseDown( event );

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, camera );

        var intersects = raycaster.intersectObjects( scene.children );

        if ( intersects.length > 0 ) {

            new TWEEN.Tween( intersects[ 0 ].object.position ).to( {
                x: Math.random() * 800 - 400,
                y: Math.random() * 800 - 400,
                z: Math.random() * 800 - 400 }, 2000 )
            .easing( TWEEN.Easing.Elastic.Out).start();

            new TWEEN.Tween( intersects[ 0 ].object.rotation ).to( {
                x: Math.random() * 2 * Math.PI,
                y: Math.random() * 2 * Math.PI,
                z: Math.random() * 2 * Math.PI }, 2000 )
            .easing( TWEEN.Easing.Elastic.Out).start();

            intersects[0].object.material.color.setHex( getRandomColor() );

        }

    }

    function animate() {

        requestAnimationFrame( animate );
        render();

    }

    var radius = 600;
    var theta = 0;

    function render() {

        TWEEN.update();

        theta += 0.1;

        camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }

    var animateOnResize = debounce(function() {
        var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            doughnuts   = document.getElementById('doughnuts');

        if(windowWidth > 480 && !doughnuts.hasChildNodes()) {
            init();
            animate();
        }

        if(windowWidth < 480 && doughnuts.hasChildNodes()) {
            doughnuts.removeChild(doughnuts.firstChild);
        }

    }, 500);

    window.addEventListener('resize', animateOnResize);

    function callAnimation() {
        var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if(windowWidth > 480) {
            init();
            animate();
        }
    }
    callAnimation();


});
