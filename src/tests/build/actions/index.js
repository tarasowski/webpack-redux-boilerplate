'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
var ADD_TODO_TEXT = exports.ADD_TODO_TEXT = 'ADD_TODO_TEXT';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

var addTodoText = exports.addTodoText = function addTodoText(value) {
    return {
        type: ADD_TODO_TEXT,
        text: value
    };
};

var addTodo = exports.addTodo = function addTodo(state) {
    return {
        type: ADD_TODO,
        id: state.todos.length,
        text: state.temp.todoText
    };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    };
};

var setVisiblityFilter = exports.setVisiblityFilter = function setVisiblityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    };
};