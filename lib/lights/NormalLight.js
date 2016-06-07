'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NormalLight = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _Light2 = require('../core/Light');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NormalLight = function (_Light) {
  (0, _inherits3.default)(NormalLight, _Light);

  /**
   * Normal light.
   *
   * @param {Object} params.light.color - Light color.
   */

  function NormalLight() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, NormalLight);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NormalLight).call(this, params, 'normallight'));

    _this.build(params);

    (0, _get3.default)((0, _getPrototypeOf2.default)(NormalLight.prototype), 'wrap', _this).call(_this);
    (0, _get3.default)((0, _getPrototypeOf2.default)(NormalLight.prototype), 'wrapShadow', _this).call(_this);
    return _this;
  }

  (0, _createClass3.default)(NormalLight, [{
    key: 'build',
    value: function build() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _scope = this;

      return new _promise2.default(function (resolve) {
        _scope.setNative(new THREE.Light(params.light.color));

        resolve();
      });
    }
  }]);
  return NormalLight;
}(_Light2.Light);

exports.NormalLight = NormalLight;
//# sourceMappingURL=NormalLight.js.map