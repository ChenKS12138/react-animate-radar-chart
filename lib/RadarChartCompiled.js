"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @typedef {Object} Point
 * @property {Number} x
 * @property {Number} y
 */

/**
 * @typedef {Object} PointRelativePosition
 * @property {Point} center
 * @property {Array<Point>} points
 */
var defaultColors = {
  lineColor: "rgb(255,255,255)",
  innerColor: "rgb(128, 191, 255)",
  outerColor: "rgb(12,142,175)",
  fontColor: "rgb(255,255,255)"
};
/**
 * 根据边数生成点
 * @param {Number} dimension
 * @returns {PointRelativePosition}
 */

var pointRelativePositionGenerator = function pointRelativePositionGenerator(dimension) {
  // 需要满足外角和定理
  if (dimension < 3) return;
  var center = {
    x: 1 / 2,
    y: 1 / 2
  };
  var firstPoint = {
    x: 1 / 2,
    y: 1 / 6
  };
  var exteriorAngle = Math.PI * 2 / dimension;
  var SIDE_LENGTH = Math.sqrt(2 / 9 - 2 / 9 * Math.cos(exteriorAngle));
  var points = [firstPoint];
  var directionAngle = exteriorAngle / 2;

  while (directionAngle <= Math.PI * 2 - exteriorAngle) {
    var _points = points[points.length - 1],
        oldX = _points.x,
        oldY = _points.y;
    var x = oldX + Math.cos(directionAngle) * SIDE_LENGTH;
    var y = oldY + Math.sin(directionAngle) * SIDE_LENGTH;
    points.push({
      x: x,
      y: y
    });
    directionAngle += exteriorAngle;
  }

  return {
    center: center,
    points: points
  };
};
/**
 * 计算两点间的某点
 * @param {Point} origin
 * @param {Point} destination
 * @param {Number} ratio
 * @returns {Point}
 */


var ratioPoint = function ratioPoint(origin, destination, ratio) {
  var x = origin.x + (destination.x - origin.x) * ratio;
  var y = origin.y + (destination.y - origin.y) * ratio;
  return {
    x: x,
    y: y
  };
};
/**
 * 描绘/填充 多边形/线
 * @param {'fill'|'stroke'} type
 * @param {CanvasRenderingContext2D} context
 * @param {Array<Point>} points
 * @param {Number} size
 * @param {Boolean} closePath
 * @param {String} borderColor
 */


var drawPolygon = function drawPolygon(type, context, points, size) {
  var closePath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var borderColor = arguments.length > 5 ? arguments[5] : undefined;
  if (!["fill", "stroke"].includes(type)) return;
  if (points.length < 2) return;

  var _points2 = _toArray(points),
      firstPoint = _points2[0],
      restPoints = _points2.slice(1);

  context.beginPath();
  context.moveTo(firstPoint.x * size, firstPoint.y * size);
  restPoints.forEach(function (point) {
    return context.lineTo(point.x * size, point.y * size);
  });

  if (type === "fill") {
    context.fill();

    if (borderColor) {
      context.lineWidth = 1;
      context.strokeStyle = borderColor;
      drawPolygon("stroke", context, points, size, true);
    }
  } else {
    if (closePath) context.closePath();
    context.stroke();
  }
};

var RadarChart = /*#__PURE__*/function (_Component) {
  _inherits(RadarChart, _Component);

  var _super = _createSuper(RadarChart);

  function RadarChart(props) {
    var _this;

    _classCallCheck(this, RadarChart);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "initPointRelativePosition", function (data) {
      /**
       * @type {PointRelativePosition}
       */
      _this.pointRelativePosition = pointRelativePositionGenerator(data.length);
    });

    _defineProperty(_assertThisInitialized(_this), "animate", function () {
      var percentageIncreasement = function percentageIncreasement(current) {
        return 1 * current - current * current;
      };

      var percentage = 0.03;

      var action = function action() {
        _this.renderRoughSketch();

        _this.renderData(percentage);

        percentage += 0.1 * percentageIncreasement(percentage);

        if (percentage < 0.99) {
          requestAnimationFrame(function () {
            return action();
          });
        }
      };

      action();
    });

    _defineProperty(_assertThisInitialized(_this), "clearCanvas", function () {
      var size = _this.props.size;
      /**
       * @type {CanvasRenderingContext2D}
       */

      var context = _this.canvasRef.current.getContext("2d");

      context.clearRect(0, 0, size, size);
    });

    _defineProperty(_assertThisInitialized(_this), "renderRoughSketch", function () {
      var _this$props = _this.props,
          colors = _this$props.colors,
          data = _this$props.data,
          stages = _this$props.stages,
          size = _this$props.size;

      _this.clearCanvas();

      var lineColor = colors.lineColor,
          outerColor = colors.outerColor,
          fontColor = colors.fontColor;
      var names = data.map(function (x) {
        return x.name;
      });
      var current = _this.canvasRef.current;
      current.width = current.clientWidth * window.devicePixelRatio;
      current.height = current.clientHeight * window.devicePixelRatio;
      /**
       * @type {CanvasRenderingContext2D}
       */

      var context = current.getContext("2d");
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      context.strokeStyle = lineColor;
      context.fillStyle = outerColor;
      context.lineWidth = 1;
      context.lineCap = "round";
      context.lineJoin = "round";
      var _this$pointRelativePo = _this.pointRelativePosition,
          center = _this$pointRelativePo.center,
          points = _this$pointRelativePo.points; // 绘制内部背景和线条

      points.forEach(function (point) {
        return drawPolygon("stroke", context, [center, point], size, false);
      });

      if (stages.length && stages.length > 1) {
        var segementRatio = 1 / (stages.length - 1);
        stages.forEach(function (text, index) {
          var currentPoints = points.map(function (point) {
            return ratioPoint(center, point, index * segementRatio);
          });
          drawPolygon("stroke", context, currentPoints, size, true); // const newHead = { x: currentPoints[0].x - 1 / 70, y: currentPoints[0].y };
          // drawPolygon('stroke', context, [newHead, currentPoints[0]], size, false);

          context.fillStyle = "#ffffff";
          context.textAlign = "right";
          context.fillText(text, (currentPoints[0].x - 1 / 28) * size, currentPoints[0].y * size);
        });
      } else {
        drawPolygon("stroke", context, points, size, true);
      } // 绘制文字


      points.forEach(function (step, index) {
        var _ratioPoint = ratioPoint(center, step, 1.25),
            x = _ratioPoint.x,
            y = _ratioPoint.y;

        context.font = "13px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = fontColor;
        if (!names[index]) return;
        context.fillText(names[index], x * size, y * size);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderData", function () {
      var percentage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var _this$props2 = _this.props,
          data = _this$props2.data,
          colors = _this$props2.colors,
          size = _this$props2.size;
      var values = data.map(function (x) {
        return x.value;
      });
      var innerColor = colors.innerColor,
          borderColor = colors.borderColor;
      var _this$pointRelativePo2 = _this.pointRelativePosition,
          center = _this$pointRelativePo2.center,
          points = _this$pointRelativePo2.points;
      /**
       * @type {CanvasRenderingContext2D}
       */

      var context = _this.canvasRef.current.getContext("2d");

      var currentPoints = points.map(function (point, index) {
        return ratioPoint(center, point, percentage * values[index]);
      });
      context.fillStyle = innerColor;
      context.lineWidth = 0.5;
      context.lineCap = "round";
      context.lineJoin = "round";
      drawPolygon("fill", context, currentPoints, size, true, borderColor);
    });

    _this.canvasRef = (0, _react.createRef)();
    return _this;
  }

  _createClass(RadarChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          showData = _this$props3.showData;
      this.initPointRelativePosition(data);
      this.renderRoughSketch();

      if (showData) {
        this.clearCanvas();
        this.animate();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          showData = _this$props4.showData;
      this.initPointRelativePosition(data);

      if (showData) {
        this.clearCanvas();
        this.animate();
      } else {
        this.clearCanvas();
        this.renderRoughSketch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          _this$props5$size = _this$props5.size,
          size = _this$props5$size === void 0 ? 360 : _this$props5$size,
          onClick = _this$props5.onClick,
          className = _this$props5.className,
          style = _this$props5.style;
      return /*#__PURE__*/_react["default"].createElement("canvas", {
        ref: this.canvasRef,
        style: _objectSpread({
          height: "".concat(size, "px"),
          width: "".concat(size, "px"),
          margin: "0 auto",
          display: "block"
        }, style),
        onClick: onClick,
        className: className
      }, "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas");
    }
  }]);

  return RadarChart;
}(_react.Component);

exports["default"] = RadarChart;
RadarChart.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].exact({
    name: _propTypes["default"].string,
    value: _propTypes["default"].number
  })).isRequired,
  size: _propTypes["default"].number,
  colors: _propTypes["default"].shape({
    lineColor: _propTypes["default"].string,
    innerColor: _propTypes["default"].string,
    outerColor: _propTypes["default"].string,
    fontColor: _propTypes["default"].string,
    borderColor: _propTypes["default"].string
  }),
  stages: _propTypes["default"].arrayOf(_propTypes["default"].string),
  showData: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].any
};
RadarChart.defaultProps = {
  data: [],
  size: 480,
  colors: {
    lineColor: "rgb(255,255,255)",
    innerColor: "rgba(109,200,236,0.45)",
    outerColor: "transparent",
    fontColor: "rgb(255,255,255)",
    borderColor: "rgb(109,200,236)"
  },
  stages: [],
  showData: true,
  onClick: function onClick() {},
  className: "",
  style: {}
};
