'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MyComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component example
 */
function MyComponent(props) {
  var myProp = props.myProp;

  var styles = {
    root: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center'
    }
  };
  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      'h1',
      null,
      myProp
    )
  );
}

MyComponent.propTypes = {
  /** A random prop */
  myProp: _propTypes2.default.string.isRequired
};
MyComponent.defaultProps = {};