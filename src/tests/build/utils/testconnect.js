'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hyperscriptHelpers = require('hyperscript-helpers');

var _hyperscriptHelpers2 = _interopRequireDefault(_hyperscriptHelpers);

var _virtualDom = require('virtual-dom');

var _ramdaX = require('ramda-x');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _hh = (0, _hyperscriptHelpers2.default)(_virtualDom.h),
    div = _hh.div,
    button = _hh.button,
    pre = _hh.pre,
    input = _hh.input,
    ul = _hh.ul,
    li = _hh.li;

var getVisibleTodos = function getVisibleTodos(_ref) {
    var todos = _ref.todos,
        filter = _ref.visibilityFilter;
    return filter === 'SHOW_ALL' ? todos : filter === 'SHOW_COMPLETED' ? todos.filter(function (td) {
        return td.completed;
    }) : filter === 'SHOW_ACTIVE' ? todos.filter(function (td) {
        return !td.completed;
    }) : todos;
};

var todoListNew = function todoListNew(_ref2) {
    var state = _ref2.state,
        onTodoClick = _ref2.onTodoClick;


    return div({}, [pre({}, JSON.stringify(state))]);
};

var mapStateToProps = function mapStateToProps(state) {
    return { todos: getVisibleTodos(state) };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: function onTodoClick(id) {
            dispatch({
                type: 'TOGGLE_TODO',
                id: id
            });
        }
    };
};

var testconnect = function testconnect(fn) {
    return fn(mapStateToProps, mapDispatchToProps)(todoListNew);
};

exports.default = testconnect;