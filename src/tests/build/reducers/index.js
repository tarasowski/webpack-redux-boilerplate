'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('../actions/index');

var _combineReducers = require('../utils/combine-reducers');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (action) {
        switch (action.type) {
            case 'ADD_TODO':
                return {
                    id: action.id,
                    text: action.text,
                    completed: false
                };
            case 'TOGGLE_TODO':
                return state.id === action.id ? _extends({}, state, { completed: !state.completed }) : state;
            default:
                return state;
        }
    };
};

var temp = function temp() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (action) {
        switch (action.type) {
            case 'ADD_TODO_TEXT':
                return _extends({}, state, { todoText: action.text });
            default:
                return state;
        }
    };
};

var todos = function todos() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function (action) {
        switch (action.type) {
            case 'ADD_TODO':
                return [].concat(_toConsumableArray(state), [todo(state)(action)]);
            case 'TOGGLE_TODO':
                return state.map(function (td) {
                    return todo(td)(action);
                });
            default:
                return state;
        }
    };
};

var visibilityFilter = function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
    return function (action) {
        switch (action.type) {
            case 'SET_VISIBILITY_FILTER':
                return action.filter;
            default:
                return state;
        }
    };
};

var todoApp = (0, _combineReducers.combineReducers)({
    todos: todos, // key = state field, value = reducer function
    visibilityFilter: visibilityFilter, // key = state field, value = reducer function
    temp: temp
});

exports.default = todoApp;