'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combineReducers = require('../utils/combine-reducers');

var _index = require('../reducers/index');

var store = (0, _combineReducers.combineReducers)({
    todos: _index.todos, // key = state field, value = reducer function
    visibilityFilter: _index.visibilityFilter // key = state field, value = reducer function
});

exports.default = store;