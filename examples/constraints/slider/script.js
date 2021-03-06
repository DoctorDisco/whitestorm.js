(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _globals = require('./globals');

var UTILS = _interopRequireWildcard(_globals);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GAME = new WHS.World({
  stats: 'fps', // fps, ms, mb
  autoresize: true,

  gravity: {
    x: 0,
    y: -100,
    z: 0
  },

  camera: {
    far: 10000,
    y: 10,
    z: 100
  },

  rendering: {
    background: {
      color: 0xcccccc
    }
  }
});

var halfMat = {
  kind: 'basic',
  transparent: true,
  opacity: 0.5
};

var box = new WHS.Box({
  geometry: {
    width: 2,
    height: 2,
    depth: 20
  },

  mass: 0,

  material: _extends({
    color: 0xffff00
  }, halfMat),

  position: {
    y: 40
  }
});

var box2 = new WHS.Box({
  geometry: {
    width: 2,
    height: 2,
    depth: 20
  },

  mass: 1,

  material: _extends({
    color: 0x0000ff
  }, halfMat),

  physics: {
    damping: 0.1
  },

  position: {
    y: 40,
    z: 10
  }
});

var pointer = new WHS.Sphere({ material: { color: 0x00ff00 } });
pointer.position.set(0, 43, -8);
pointer.addTo(GAME);
pointer.applyCentralImpulse(new THREE.Vector3(0, 0, 1000));

box.addTo(GAME);
box2.addTo(GAME);

var constraint = new WHS.SliderConstraint(box2, box, new THREE.Vector3(0, box2.position.y, 0), new THREE.Vector3(0, 0, 1));

GAME.scene.addConstraint(constraint);

new WHS.Plane({
  geometry: {
    width: 250,
    height: 250
  },

  mass: 0,

  material: {
    color: 0xff0000,
    kind: 'basic'
  },

  position: {
    x: 0,
    y: 0,
    z: 0
  },

  rotation: {
    x: -Math.PI / 2
  }
}).addTo(GAME);

GAME.start();
GAME.setControls(WHS.orbitControls());

},{"./globals":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAmbient = addAmbient;
exports.addBasicLights = addBasicLights;
exports.addPlane = addPlane;
exports.addBoxPlane = addBoxPlane;
var $world = exports.$world = {
  stats: "fps", // fps, ms, mb or false if not need.
  autoresize: "window",

  gravity: { // Physic gravity.
    x: 0,
    y: -100,
    z: 0
  },

  camera: {
    z: 50, // Move camera.
    y: 10
  },

  rendering: {
    background: {
      color: 0x162129
    },

    renderer: {
      antialias: true
    }
  },

  shadowmap: {
    type: THREE.PCFSoftShadowMap
  }
};

var $colors = exports.$colors = {
  bg: 0x162129,
  plane: 0x447F8B,
  mesh: 0xF2F2F2,
  softbody: 0x434B7F
};

function addAmbient(world, intensity) {
  new WHS.AmbientLight({
    light: {
      intensity: intensity
    }
  }).addTo(world);
}

function addBasicLights(world) {
  var intensity = arguments.length <= 1 || arguments[1] === undefined ? 0.5 : arguments[1];
  var position = arguments.length <= 2 || arguments[2] === undefined ? [0, 10, 10] : arguments[2];
  var distance = arguments.length <= 3 || arguments[3] === undefined ? 100 : arguments[3];

  new WHS.PointLight({
    light: {
      intensity: intensity,
      distance: distance
    },

    shadowmap: {
      fov: 90
    },

    position: position
  }).addTo(world);

  addAmbient(world, 1 - intensity);
}

function addPlane(world) {
  var size = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  return new WHS.Plane({
    geometry: {
      width: size,
      height: size
    },

    mass: 0,

    material: {
      color: 0x447F8B,
      kind: 'phong'
    },

    rotation: {
      x: -Math.PI / 2
    }
  }).addTo(world);
}

function addBoxPlane(world) {
  var size = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  return new WHS.Box({
    geometry: {
      width: size,
      height: 1,
      depth: size
    },

    mass: 0,

    material: {
      color: 0x447F8B,
      kind: 'phong'
    }
  }).addTo(world);
}

},{}]},{},[1]);
