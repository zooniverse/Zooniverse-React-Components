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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var completedThisSession = {};
if (window.tutorialsCompletedThisSession) {
  window.tutorialsCompletedThisSession = completedThisSession;
}
var Tutorial = /*#__PURE__*/function (_React$Component) {
  function Tutorial(props) {
    var _this;
    _classCallCheck(this, Tutorial);
    _this = _callSuper(this, Tutorial, [props]);
    _this.previousActiveElement = document.activeElement;
    _this.handleNextClick = _this.handleNextClick.bind(_this);
    return _this;
  }
  _inherits(Tutorial, _React$Component);
  return _createClass(Tutorial, [{
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
      var isIE = 'ActiveXObject' in window;
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
      _dialog["default"].alert(/*#__PURE__*/(0, _jsxRuntime.jsx)(TutorialComponent, {
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