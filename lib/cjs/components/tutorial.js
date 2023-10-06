"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dialog = _interopRequireDefault(require("modal-form/dialog"));
var _mediaCard = _interopRequireDefault(require("./media-card"));
var _markdownz = require("markdownz");
var _apiClient = _interopRequireDefault(require("panoptes-client/lib/api-client"));
var _stepThrough = _interopRequireDefault(require("../components/step-through"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var completedThisSession = {};
if (window.tutorialsCompletedThisSession) {
  window.tutorialsCompletedThisSession = completedThisSession;
}
var Tutorial = /*#__PURE__*/function (_React$Component) {
  _inherits(Tutorial, _React$Component);
  var _super = _createSuper(Tutorial);
  function Tutorial(props) {
    var _this;
    _classCallCheck(this, Tutorial);
    _this = _super.call(this, props);
    _this.previousActiveElement = document.activeElement;
    _this.handleNextClick = _this.handleNextClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Tutorial, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleUnmount();
    }
  }, {
    key: "handleNextClick",
    value: function handleNextClick() {
      this.stepThrough.goNext();
    }
  }, {
    key: "handleUnmount",
    value: function handleUnmount() {
      if (this.previousActiveElement.focus) {
        this.previousActiveElement.focus();
      }
      var now = new Date().toISOString();
      completedThisSession[this.props.tutorial.id] = now;
      if (this.props.user) {
        var projectPreferences = this.props.preferences;
        if (!projectPreferences.preferences) {
          projectPreferences.preferences = {};
        }
        ;
        if (!projectPreferences.preferences.tutorials_completed_at) {
          projectPreferences.preferences.tutorials_completed_at = {};
        }
        ;
        var changes = {};
        changes["preferences.tutorials_completed_at.".concat(this.props.tutorial.id)] = now;
        projectPreferences.update(changes);
        projectPreferences.save();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var isIE = ('ActiveXObject' in window);
      var tutorialStyle;
      if (isIE) {
        tutorialStyle = {
          height: '85vh'
        };
      }
      ;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_stepThrough["default"], {
        ref: function ref(el) {
          _this2.stepThrough = el;
        },
        className: "tutorial-steps",
        style: tutorialStyle,
        children: this.props.tutorial.steps.map(function (step, i) {
          if (!step._key) {
            step._key = Math.random();
          }
          ;
          var source;
          var button;
          if (_this2.props.media[step.media]) {
            source = _this2.props.media[step.media].src;
          }
          ;
          if (i === _this2.props.tutorial.steps.length - 1) {
            button = /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "submit",
              className: "major-button",
              children: "Let\u2019s go!"
            });
          } else {
            button = /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              className: "standard-button",
              onClick: _this2.handleNextClick,
              children: "Continue"
            });
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_mediaCard["default"], {
            className: "tutorial-step",
            src: source,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_markdownz.Markdown, {
              children: step.content
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: button
            })]
          }, step._key);
        })
      });
    }
  }]);
  return Tutorial;
}(_react["default"].Component);
;
Tutorial.checkIfCompleted = function (tutorial, user, preferences) {
  if (user) {
    window.prefs = preferences;
    if (preferences && preferences.preferences && preferences.preferences.tutorials_completed_at && preferences.preferences.tutorials_completed_at[tutorial.id]) {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  } else {
    return Promise.resolve(!!completedThisSession[tutorial.id]);
  }
};
Tutorial.startIfNecessary = function (self, tutorial, user, preferences) {
  if (tutorial) {
    self.checkIfCompleted(tutorial, user, preferences).then(function (completed) {
      if (!completed) {
        self.start(self, tutorial, user, preferences);
      }
    });
  }
};
Tutorial.find = function (workflow) {
  if (workflow) {
    return _apiClient["default"].type('tutorials').get({
      workflow_id: workflow.id
    }).then(function (tutorials) {
      var onlyStandardTutorials = tutorials.filter(function (tutorial) {
        return tutorial.kind === 'tutorial' || null;
      });
      return onlyStandardTutorials[0];
    });
  } else {
    return Promise.resolve(false);
  }
};
Tutorial.start = function (TutorialComponent, tutorial, user, preferences) {
  if (tutorial.steps.length !== 0) {
    var awaitTutorialMedia = tutorial.get('attached_images')["catch"](function () {
      return [];
    }).then(function (mediaResources) {
      var mediaByID = {};
      mediaResources.map(function (mediaResource) {
        mediaByID[mediaResource.id] = mediaResource;
      });
      return mediaByID;
    });
    awaitTutorialMedia.then(function (mediaByID) {
      _dialog["default"].alert( /*#__PURE__*/(0, _jsxRuntime.jsx)(TutorialComponent, {
        tutorial: tutorial,
        media: mediaByID,
        preferences: preferences,
        user: user
      }), {
        className: 'tutorial-dialog',
        required: true,
        closeButton: true
      })["catch"](function () {
        return null;
      });
    });
  }
};
Tutorial.propTypes = {
  preferences: _propTypes["default"].shape({
    preferences: _propTypes["default"].object
  }),
  tutorial: _propTypes["default"].shape({
    steps: _propTypes["default"].array
  }),
  user: _propTypes["default"].object
};
Tutorial.defaultProps = {
  media: {},
  preferences: null,
  tutorial: {
    steps: []
  },
  user: null
};
var _default = exports["default"] = Tutorial;