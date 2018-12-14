'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ADD = exports.ADD = 'ADD';
var SUBTRACT = exports.SUBTRACT = 'SUBTRACT';
var ADD_PLAYER = exports.ADD_PLAYER = 'ADD_PLAYER';
var REMOVE_PLAYER = exports.REMOVE_PLAYER = 'REMOVE_PLAYER';

var increment = exports.increment = function increment() {
    return {
        type: 'ADD'
    };
};

var decrement = exports.decrement = function decrement() {
    return {
        type: 'SUBTRACT'
    };
};

var addPlayer = exports.addPlayer = function addPlayer() {
    return {
        type: 'ADD_PLAYER'
    };
};

var removePlayer = exports.removePlayer = function removePlayer() {
    return {
        type: 'REMOVE_PLAYER'
    };
};