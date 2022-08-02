(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStore": function() { return /* binding */ getStore; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_app.module.css */ "./pages/_app.module.css");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/action-types */ "./store/action-types.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "D:\\Users\\zhenwangyang\\Desktop\\work\\yzw\\Next\\nextjs-project\\pages\\_app.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 //全局样式的话只能在_app.js文件里引入




 //获取当前的仓库store

function getStore(initialState) {
  //1. 考虑服务器端的时候,不用想了，肯定返回一个新的store
  if (true) {
    return (0,_store__WEBPACK_IMPORTED_MODULE_6__.default)(initialState);
  } else {}
}

class LayoutApp extends (next_app__WEBPACK_IMPORTED_MODULE_2___default()) {
  constructor(props) {
    super(props);
    console.log("LayoutApp constructor", props);
    this.store = getStore(props.initialState); //创建一个新仓库，

    this.state = {
      loading: false
    };
  } //next默认会调用LayoutApp.getInitialProps方


  componentDidMount() {
    this.routeChangeStart = () => {
      this.setState({
        loading: true
      });
    };

    this.routeChangeComplete = () => {
      this.setState({
        loading: false
      });
    };

    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on("routeChangeStart", this.routeChangeStart);
    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on("routeChangeComplete", this.routeChangeComplete);
  }

  componentWillUnmount() {
    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.off("routeChangeStart", this.routeChangeStart);
    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.off("routeChangeComplete", this.routeChangeComplete);
  }

  render() {
    console.log("LayoutApp render");
    let {
      Component,
      pageProps
    } = this.props; //页面组件 user.js

    let state = this.store.getState();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
      store: this.store,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "1698948932",
        children: "li.jsx-1698948932{display:inline-block;margin-left:10px;line-height:31px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxVc2Vyc1xcemhlbndhbmd5YW5nXFxEZXNrdG9wXFx3b3JrXFx5endcXE5leHRcXG5leHRqcy1wcm9qZWN0XFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RFcsQUFHb0MscUJBQ0osaUJBQ0EsaUJBQ25CIiwiZmlsZSI6IkQ6XFxVc2Vyc1xcemhlbndhbmd5YW5nXFxEZXNrdG9wXFx3b3JrXFx5endcXE5leHRcXG5leHRqcy1wcm9qZWN0XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IF9hcHBTdHlsZXMgZnJvbSBcIi4vX2FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7IC8v5YWo5bGA5qC35byP55qE6K+d5Y+q6IO95ZyoX2FwcC5qc+aWh+S7tumHjOW8leWFpVxyXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi9zdG9yZS9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi91dGlscy9heGlvc1wiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vL+iOt+WPluW9k+WJjeeahOS7k+W6k3N0b3JlXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgLy8xLiDogIPomZHmnI3liqHlmajnq6/nmoTml7blgJks5LiN55So5oOz5LqG77yM6IKv5a6a6L+U5Zue5LiA5Liq5paw55qEc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8v5Zyo5a6i5oi356uv5Lya5L2/55So5pyN5Yqh5b6X5Yiw55qE54q25oCB77yM6L+b6KGM5Y+N5bqP5YyW5b6X5Yiw54q25oCB77yM55Sf5oiQ5a6i5oi356uv55qE5LuT5bqTXHJcbiAgICBpZiAoIXdpbmRvdy5fUkVEVVhfU1RPUkVfKSB7XHJcbiAgICAgIHdpbmRvdy5fUkVEVVhfU1RPUkVfID0gY3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICAgIH1cclxuICAgIC8vTGF5b3V0QXBw5p6E6YCg5Ye95pWw5Zyo5a6i5oi356uv5Y+q6LWw5LiA5qyhXHJcbiAgICAvL+WcqOWuouaIt+err+i/m+ihjOi3r+W+hOWIh+aNoueahOaXtuWAme+8jOWuouaIt+err+eahOS7k+W6k+mcgOimgeWPr+S7peWFseS6qyDvvIzkuI3lkIzpobXpnaLmiJbor7Tot6/lvoTnmoTnirbmgIHpnIDopoHlhbHkuqtcclxuICAgIC8vd2luZG93Ll9SRURVWF9TVE9SRV8gPXN0b3JlO1xyXG4gICAgcmV0dXJuIHdpbmRvdy5fUkVEVVhfU1RPUkVfO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTGF5b3V0QXBwIGV4dGVuZHMgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJMYXlvdXRBcHAgY29uc3RydWN0b3JcIiwgcHJvcHMpO1xyXG4gICAgdGhpcy5zdG9yZSA9IGdldFN0b3JlKHByb3BzLmluaXRpYWxTdGF0ZSk7IC8v5Yib5bu65LiA5Liq5paw5LuT5bqT77yMXHJcbiAgICB0aGlzLnN0YXRlID0geyBsb2FkaW5nOiBmYWxzZSB9O1xyXG4gIH1cclxuICAvL25leHTpu5jorqTkvJrosIPnlKhMYXlvdXRBcHAuZ2V0SW5pdGlhbFByb3Bz5pa5XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMucm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHRoaXMucm91dGVDaGFuZ2VTdGFydCk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCB0aGlzLnJvdXRlQ2hhbmdlQ29tcGxldGUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCB0aGlzLnJvdXRlQ2hhbmdlU3RhcnQpO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHRoaXMucm91dGVDaGFuZ2VDb21wbGV0ZSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0QXBwIHJlbmRlclwiKTtcclxuICAgIGxldCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzOyAvL+mhtemdoue7hOS7tiB1c2VyLmpzXHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMuc3RvcmV9PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtfYXBwU3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvamdsb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPummlumhtTwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9saXN0XCI+55So5oi3566h55CGPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+5Liq5Lq65Lit5b+DPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAge3N0YXRlLmN1cnJlbnRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRlLmN1cnJlbnRVc2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+55m75b2VPC9MaW5rPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2PuWKoOi9veS4rS4uLi48L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+6LaF57qn5aWlPC9mb290ZXI+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4vL+i/meS4quaWueazleWwseaYr+e7hOS7tueahOmdmeaAgeaWueazle+8jOWug+aYr+exu+eahOWxnuaAp++8jOe7hOS7tueahOWxnuaAp1xyXG4vL+WcqOWuouaIt+err+iuv+mXruesrOS4gOS4qumhteeahOaXtuWAme+8jOS4jeS8muWGjei1sGdldEluaXRpYWxQcm9wc+S6hlxyXG5MYXlvdXRBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiTGF5b3V0QXBwIGdldEluaXRpYWxQcm9wc1wiKTtcclxuICBsZXQgc3RvcmUgPSBnZXRTdG9yZSgpOyAvL+mprOS4iuS8muWIm+W7uuS4gOS4quaWsOeahOS7k+W6k++8jOayoeacieS8oOWPguaVsO+8jOaJgOS7peS8mueUqHJlZHVjZXLpu5jorqTnirbmgIFcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgLy/or7TmmI7mraTmlrnms5XmmK/lnKjmnI3liqHlmajlgZrnmoRcclxuICAgIGxldCBvcHRpb25zID0geyB1cmw6IFwiL2FwaS9jdXJyZW50VXNlclwiIH07XHJcbiAgICAvL+WmguaenOWuouaIt+err+W4puedgGNvb2tpZeadpeS6hlxyXG4gICAgaWYgKGN0eC5yZXEgJiYgY3R4LnJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XHJcbiAgICAgIC8v5oqK6L+Z5LiqY29va2ll6YCP5Lyg57uZQVBJ5pyN5Yqh5ZmoXHJcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5jb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Mob3B0aW9ucykudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgICAvL+WmguaenOaIkOWKn+S6hu+8jOmCo+ihqOekuuW9k+WJjeaYr+eZu+W9leeUqOaIt1xyXG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgLy/miornmbvlvZXnlKjmiLfkv6Hmga/mlL7liLDku5PlupPkuK3ljrtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5TRVRfVVNFUl9JTkZPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgcHJvcHMgPSB7fTsgLy/nlKjmnaXliJvlu7rlvZPliY3nmoTlsZ7mgKfmnoTlu7rml7bkvKDlhaXnmoTlsZ7mgKflr7nosaFcclxuICBsZXQgcGFnZVByb3BzID0ge307IC8v6buY6K6k55qE6aG16Z2i5bGe5oCn5a+56LGhXHJcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICB9XHJcbiAgcHJvcHMucGFnZVByb3BzID0gcGFnZVByb3BzO1xyXG4gIC8v6L+Z5Liq5Lic6KW/6IKv5a6a5bCx5piv6buY6K6k54q25oCB5LqGXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHByb3BzLmluaXRpYWxTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9wczsgLy/ov5Tlm57nmoTov5nkuKrlr7nosaHlsIbkvJrmiJDkuLrlvZPliY3nu4Tku7bnmoTlsZ7mgKflr7nosaFcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0QXBwO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Users\\\\zhenwangyang\\\\Desktop\\\\work\\\\yzw\\\\Next\\\\nextjs-project\\\\pages\\\\_app.js */"
      }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "jsx-1698948932",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/images/jglogo.png",
          className: "jsx-1698948932" + " " + ((_app_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo) || "")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "jsx-1698948932",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-1698948932",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/",
              children: "\u9996\u9875"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-1698948932",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/user/list",
              children: "\u7528\u6237\u7BA1\u7406"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-1698948932",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/profile",
              children: "\u4E2A\u4EBA\u4E2D\u5FC3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-1698948932",
            children: state.currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "jsx-1698948932",
              children: state.currentUser.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/login",
              children: "\u767B\u5F55"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1698948932",
        children: "\u52A0\u8F7D\u4E2D...."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        className: "jsx-1698948932" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        style: {
          textAlign: "center"
        },
        className: "jsx-1698948932",
        children: "\u8D85\u7EA7\u5965"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this);
  }

} //这个方法就是组件的静态方法，它是类的属性，组件的属性
//在客户端访问第一个页的时候，不会再走getInitialProps了


LayoutApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  console.log("LayoutApp getInitialProps");
  let store = getStore(); //马上会创建一个新的仓库，没有传参数，所以会用reducer默认状态

  if (true) {
    //说明此方法是在服务器做的
    let options = {
      url: "/api/currentUser"
    }; //如果客户端带着cookie来了

    if (ctx.req && ctx.req.headers.cookie) {
      options.headers = options.headers || {}; //把这个cookie透传给API服务器

      options.headers.cookie = ctx.req.headers.cookie;
    }

    let response = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_8__.default)(options).then(res => res.data); //如果成功了，那表示当前是登录用户

    if (response.success) {
      //把登录用户信息放到仓库中去
      store.dispatch({
        type: _store_action_types__WEBPACK_IMPORTED_MODULE_7__.SET_USER_INFO,
        payload: response.data
      });
    }
  }

  let props = {}; //用来创建当前的属性构建时传入的属性对象

  let pageProps = {}; //默认的页面属性对象

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  props.pageProps = pageProps; //这个东西肯定就是默认状态了

  if (true) {
    props.initialState = store.getState();
  }

  return props; //返回的这个对象将会成为当前组件的属性对象
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutApp);

/***/ }),

/***/ "./store/action-types.js":
/*!*******************************!*\
  !*** ./store/action-types.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_USER_INFO": function() { return /* binding */ SET_USER_INFO; }
/* harmony export */ });
const SET_USER_INFO = 'SET_USER_INFO';

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./store/reducer.js");

 //默认导出的不是一个仓库，而是一个接收了初始状态，并返回仓库的方法

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(initialState) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_1__.default, initialState);
}

/***/ }),

/***/ "./store/reducer.js":
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./store/action-types.js");
 //一旦把用户信息保存到store之后，任何组件都可以从仓库中获取到用户信息了

let initialState = {
  currentUser: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_INFO:
      return {
        currentUser: action.payload
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./utils/axios.js":
/*!************************!*\
  !*** ./utils/axios.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //跨域请求的时候要携带cookie

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true; //axios同时支持客户端和服务器 ，内部使用了一适配器模式

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://localhost:4000' // API服务器的端口

});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./pages/_app.module.css":
/*!*******************************!*\
  !*** ./pages/_app.module.css ***!
  \*******************************/
/***/ (function(module) {

// Exports
module.exports = {
	"logo": "_app_logo__12ZVG"
};


/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_app_js-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0Ly4vc3RvcmUvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovL3podWZlbmctbmV4dGpzLXByb2plY3QvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0Ly4vc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0Ly4vdXRpbHMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vemh1ZmVuZy1uZXh0anMtcHJvamVjdC8uL3BhZ2VzL19hcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3podWZlbmctbmV4dGpzLXByb2plY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vemh1ZmVuZy1uZXh0anMtcHJvamVjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vemh1ZmVuZy1uZXh0anMtcHJvamVjdC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vemh1ZmVuZy1uZXh0anMtcHJvamVjdC9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly96aHVmZW5nLW5leHRqcy1wcm9qZWN0L2lnbm9yZWR8RDpcXFVzZXJzXFx6aGVud2FuZ3lhbmdcXERlc2t0b3BcXHdvcmtcXHl6d1xcTmV4dFxcbmV4dGpzLXByb2plY3RcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJnZXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiTGF5b3V0QXBwIiwiQXBwIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsInN0YXRlIiwibG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50Iiwicm91dGVDaGFuZ2VTdGFydCIsInNldFN0YXRlIiwicm91dGVDaGFuZ2VDb21wbGV0ZSIsInJvdXRlciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0U3RhdGUiLCJfYXBwU3R5bGVzIiwiY3VycmVudFVzZXIiLCJuYW1lIiwidGV4dEFsaWduIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3B0aW9ucyIsInVybCIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJyZXNwb25zZSIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiZGlzcGF0Y2giLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiU0VUX1VTRVJfSU5GTyIsInJlZHVjZXIiLCJhY3Rpb24iLCJpbnN0YW5jZSIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUMrQjs7QUFDL0I7QUFDQTtBQUNBO0NBRUE7O0FBRU8sU0FBU0EsUUFBVCxDQUFrQkMsWUFBbEIsRUFBZ0M7QUFDckM7QUFDQSxZQUFtQztBQUNqQyxXQUFPQywrQ0FBVyxDQUFDRCxZQUFELENBQWxCO0FBQ0QsR0FGRCxNQUVPLEVBU047QUFDRjs7QUFFRCxNQUFNRSxTQUFOLFNBQXdCQyxpREFBeEIsQ0FBNEI7QUFDMUJDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNGLEtBQXJDO0FBQ0EsU0FBS0csS0FBTCxHQUFhVCxRQUFRLENBQUNNLEtBQUssQ0FBQ0wsWUFBUCxDQUFyQixDQUhpQixDQUcwQjs7QUFDM0MsU0FBS1MsS0FBTCxHQUFhO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWI7QUFDRCxHQU55QixDQU8xQjs7O0FBQ0FDLG1CQUFpQixHQUFHO0FBQ2xCLFNBQUtDLGdCQUFMLEdBQXdCLE1BQU07QUFDNUIsV0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRTtBQUFYLE9BQWQ7QUFDRCxLQUZEOztBQUdBLFNBQUtJLG1CQUFMLEdBQTJCLE1BQU07QUFDL0IsV0FBS0QsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRTtBQUFYLE9BQWQ7QUFDRCxLQUZEOztBQUdBSyxnRUFBQSxDQUFpQixrQkFBakIsRUFBcUMsS0FBS0gsZ0JBQTFDO0FBQ0FHLGdFQUFBLENBQWlCLHFCQUFqQixFQUF3QyxLQUFLRCxtQkFBN0M7QUFDRDs7QUFDREUsc0JBQW9CLEdBQUc7QUFDckJELGlFQUFBLENBQWtCLGtCQUFsQixFQUFzQyxLQUFLSCxnQkFBM0M7QUFDQUcsaUVBQUEsQ0FBa0IscUJBQWxCLEVBQXlDLEtBQUtELG1CQUE5QztBQUNEOztBQUNERyxRQUFNLEdBQUc7QUFDUFgsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQSxRQUFJO0FBQUVXLGVBQUY7QUFBYUM7QUFBYixRQUEyQixLQUFLZCxLQUFwQyxDQUZPLENBRW9DOztBQUMzQyxRQUFJSSxLQUFLLEdBQUcsS0FBS0QsS0FBTCxDQUFXWSxRQUFYLEVBQVo7QUFDQSx3QkFDRSw4REFBQyxpREFBRDtBQUFVLFdBQUssRUFBRSxLQUFLWixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQVVFO0FBQUE7QUFBQSxnQ0FDRTtBQUFpQyxhQUFHLEVBQUMsb0JBQXJDO0FBQUEsK0NBQWdCYSw4REFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBLGtDQUNFO0FBQUE7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFBO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBT0U7QUFBQTtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQVVFO0FBQUE7QUFBQSxzQkFDR1osS0FBSyxDQUFDYSxXQUFOLGdCQUNDO0FBQUE7QUFBQSx3QkFBT2IsS0FBSyxDQUFDYSxXQUFOLENBQWtCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGdCQUdDLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUErQkcsS0FBS2QsS0FBTCxDQUFXQyxPQUFYLGdCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkFHQyw4REFBQyxTQUFELGtDQUFlUyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENKLGVBb0NFO0FBQVEsYUFBSyxFQUFFO0FBQUVLLG1CQUFTLEVBQUU7QUFBYixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUF3Q0Q7O0FBbEV5QixDLENBb0U1QjtBQUNBOzs7QUFDQXRCLFNBQVMsQ0FBQ3VCLGVBQVYsR0FBNEIsT0FBTztBQUFFUCxXQUFGO0FBQWFRO0FBQWIsQ0FBUCxLQUE4QjtBQUN4RHBCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0EsTUFBSUMsS0FBSyxHQUFHVCxRQUFRLEVBQXBCLENBRndELENBRWhDOztBQUN4QixZQUFtQztBQUNqQztBQUNBLFFBQUk0QixPQUFPLEdBQUc7QUFBRUMsU0FBRyxFQUFFO0FBQVAsS0FBZCxDQUZpQyxDQUdqQzs7QUFDQSxRQUFJRixHQUFHLENBQUNHLEdBQUosSUFBV0gsR0FBRyxDQUFDRyxHQUFKLENBQVFDLE9BQVIsQ0FBZ0JDLE1BQS9CLEVBQXVDO0FBQ3JDSixhQUFPLENBQUNHLE9BQVIsR0FBa0JILE9BQU8sQ0FBQ0csT0FBUixJQUFtQixFQUFyQyxDQURxQyxDQUVyQzs7QUFDQUgsYUFBTyxDQUFDRyxPQUFSLENBQWdCQyxNQUFoQixHQUF5QkwsR0FBRyxDQUFDRyxHQUFKLENBQVFDLE9BQVIsQ0FBZ0JDLE1BQXpDO0FBQ0Q7O0FBQ0QsUUFBSUMsUUFBUSxHQUFHLE1BQU1DLHFEQUFLLENBQUNOLE9BQUQsQ0FBTCxDQUFlTyxJQUFmLENBQXFCQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBakMsQ0FBckIsQ0FUaUMsQ0FVakM7O0FBQ0EsUUFBSUosUUFBUSxDQUFDSyxPQUFiLEVBQXNCO0FBQ3BCO0FBQ0E3QixXQUFLLENBQUM4QixRQUFOLENBQWU7QUFBRUMsWUFBSSxFQUFFQyw4REFBUjtBQUE2QkMsZUFBTyxFQUFFVCxRQUFRLENBQUNJO0FBQS9DLE9BQWY7QUFDRDtBQUNGOztBQUNELE1BQUkvQixLQUFLLEdBQUcsRUFBWixDQW5Cd0QsQ0FtQnhDOztBQUNoQixNQUFJYyxTQUFTLEdBQUcsRUFBaEIsQ0FwQndELENBb0JwQzs7QUFDcEIsTUFBSUQsU0FBUyxDQUFDTyxlQUFkLEVBQStCO0FBQzdCTixhQUFTLEdBQUcsTUFBTUQsU0FBUyxDQUFDTyxlQUFWLENBQTBCQyxHQUExQixDQUFsQjtBQUNEOztBQUNEckIsT0FBSyxDQUFDYyxTQUFOLEdBQWtCQSxTQUFsQixDQXhCd0QsQ0F5QnhEOztBQUNBLFlBQW1DO0FBQ2pDZCxTQUFLLENBQUNMLFlBQU4sR0FBcUJRLEtBQUssQ0FBQ1ksUUFBTixFQUFyQjtBQUNEOztBQUNELFNBQU9mLEtBQVAsQ0E3QndELENBNkIxQztBQUNmLENBOUJEOztBQStCQSwrREFBZUgsU0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUMvSE8sTUFBTXdDLGFBQWEsR0FBRyxlQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDtDQUdBOztBQUNBLDZCQUFlLG9DQUFVMUMsWUFBVixFQUF3QjtBQUNyQyxTQUFPQyxrREFBVyxDQUFDMEMsNkNBQUQsRUFBVTNDLFlBQVYsQ0FBbEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0NDTEQ7O0FBQ0EsSUFBSUEsWUFBWSxHQUFHO0FBQ2ZzQixhQUFXLEVBQUM7QUFERyxDQUFuQjs7QUFHQSxNQUFNcUIsT0FBTyxHQUFHLENBQUNsQyxLQUFLLEdBQUNULFlBQVAsRUFBb0I0QyxNQUFwQixLQUE2QjtBQUMzQyxVQUFPQSxNQUFNLENBQUNMLElBQWQ7QUFDSSxTQUFLQyx3REFBTDtBQUNJLGFBQU87QUFBQ2xCLG1CQUFXLEVBQUNzQixNQUFNLENBQUNIO0FBQXBCLE9BQVA7O0FBQ0o7QUFDSSxhQUFPaEMsS0FBUDtBQUpSO0FBTUQsQ0FQRDs7QUFRQSwrREFBZWtDLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Q0NaQTs7QUFDQVYsdUVBQUEsR0FBaUMsSUFBakMsQyxDQUNBOztBQUNBLE1BQU1ZLFFBQVEsR0FBR1osbURBQUEsQ0FBYTtBQUMxQmEsU0FBTyxFQUFDLHVCQURrQixDQUNLOztBQURMLENBQWIsQ0FBakI7QUFHQSwrREFBZUQsUUFBZixFOzs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IF9hcHBTdHlsZXMgZnJvbSBcIi4vX2FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7IC8v5YWo5bGA5qC35byP55qE6K+d5Y+q6IO95ZyoX2FwcC5qc+aWh+S7tumHjOW8leWFpVxyXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi9zdG9yZS9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi91dGlscy9heGlvc1wiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vL+iOt+WPluW9k+WJjeeahOS7k+W6k3N0b3JlXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgLy8xLiDogIPomZHmnI3liqHlmajnq6/nmoTml7blgJks5LiN55So5oOz5LqG77yM6IKv5a6a6L+U5Zue5LiA5Liq5paw55qEc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8v5Zyo5a6i5oi356uv5Lya5L2/55So5pyN5Yqh5b6X5Yiw55qE54q25oCB77yM6L+b6KGM5Y+N5bqP5YyW5b6X5Yiw54q25oCB77yM55Sf5oiQ5a6i5oi356uv55qE5LuT5bqTXHJcbiAgICBpZiAoIXdpbmRvdy5fUkVEVVhfU1RPUkVfKSB7XHJcbiAgICAgIHdpbmRvdy5fUkVEVVhfU1RPUkVfID0gY3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICAgIH1cclxuICAgIC8vTGF5b3V0QXBw5p6E6YCg5Ye95pWw5Zyo5a6i5oi356uv5Y+q6LWw5LiA5qyhXHJcbiAgICAvL+WcqOWuouaIt+err+i/m+ihjOi3r+W+hOWIh+aNoueahOaXtuWAme+8jOWuouaIt+err+eahOS7k+W6k+mcgOimgeWPr+S7peWFseS6qyDvvIzkuI3lkIzpobXpnaLmiJbor7Tot6/lvoTnmoTnirbmgIHpnIDopoHlhbHkuqtcclxuICAgIC8vd2luZG93Ll9SRURVWF9TVE9SRV8gPXN0b3JlO1xyXG4gICAgcmV0dXJuIHdpbmRvdy5fUkVEVVhfU1RPUkVfO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTGF5b3V0QXBwIGV4dGVuZHMgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJMYXlvdXRBcHAgY29uc3RydWN0b3JcIiwgcHJvcHMpO1xyXG4gICAgdGhpcy5zdG9yZSA9IGdldFN0b3JlKHByb3BzLmluaXRpYWxTdGF0ZSk7IC8v5Yib5bu65LiA5Liq5paw5LuT5bqT77yMXHJcbiAgICB0aGlzLnN0YXRlID0geyBsb2FkaW5nOiBmYWxzZSB9O1xyXG4gIH1cclxuICAvL25leHTpu5jorqTkvJrosIPnlKhMYXlvdXRBcHAuZ2V0SW5pdGlhbFByb3Bz5pa5XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMucm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHRoaXMucm91dGVDaGFuZ2VTdGFydCk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCB0aGlzLnJvdXRlQ2hhbmdlQ29tcGxldGUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCB0aGlzLnJvdXRlQ2hhbmdlU3RhcnQpO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHRoaXMucm91dGVDaGFuZ2VDb21wbGV0ZSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0QXBwIHJlbmRlclwiKTtcclxuICAgIGxldCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzOyAvL+mhtemdoue7hOS7tiB1c2VyLmpzXHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMuc3RvcmV9PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtfYXBwU3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvamdsb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPummlumhtTwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9saXN0XCI+55So5oi3566h55CGPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+5Liq5Lq65Lit5b+DPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAge3N0YXRlLmN1cnJlbnRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRlLmN1cnJlbnRVc2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+55m75b2VPC9MaW5rPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2PuWKoOi9veS4rS4uLi48L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+6LaF57qn5aWlPC9mb290ZXI+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4vL+i/meS4quaWueazleWwseaYr+e7hOS7tueahOmdmeaAgeaWueazle+8jOWug+aYr+exu+eahOWxnuaAp++8jOe7hOS7tueahOWxnuaAp1xyXG4vL+WcqOWuouaIt+err+iuv+mXruesrOS4gOS4qumhteeahOaXtuWAme+8jOS4jeS8muWGjei1sGdldEluaXRpYWxQcm9wc+S6hlxyXG5MYXlvdXRBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiTGF5b3V0QXBwIGdldEluaXRpYWxQcm9wc1wiKTtcclxuICBsZXQgc3RvcmUgPSBnZXRTdG9yZSgpOyAvL+mprOS4iuS8muWIm+W7uuS4gOS4quaWsOeahOS7k+W6k++8jOayoeacieS8oOWPguaVsO+8jOaJgOS7peS8mueUqHJlZHVjZXLpu5jorqTnirbmgIFcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgLy/or7TmmI7mraTmlrnms5XmmK/lnKjmnI3liqHlmajlgZrnmoRcclxuICAgIGxldCBvcHRpb25zID0geyB1cmw6IFwiL2FwaS9jdXJyZW50VXNlclwiIH07XHJcbiAgICAvL+WmguaenOWuouaIt+err+W4puedgGNvb2tpZeadpeS6hlxyXG4gICAgaWYgKGN0eC5yZXEgJiYgY3R4LnJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XHJcbiAgICAgIC8v5oqK6L+Z5LiqY29va2ll6YCP5Lyg57uZQVBJ5pyN5Yqh5ZmoXHJcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5jb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Mob3B0aW9ucykudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgICAvL+WmguaenOaIkOWKn+S6hu+8jOmCo+ihqOekuuW9k+WJjeaYr+eZu+W9leeUqOaIt1xyXG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgLy/miornmbvlvZXnlKjmiLfkv6Hmga/mlL7liLDku5PlupPkuK3ljrtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5TRVRfVVNFUl9JTkZPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgcHJvcHMgPSB7fTsgLy/nlKjmnaXliJvlu7rlvZPliY3nmoTlsZ7mgKfmnoTlu7rml7bkvKDlhaXnmoTlsZ7mgKflr7nosaFcclxuICBsZXQgcGFnZVByb3BzID0ge307IC8v6buY6K6k55qE6aG16Z2i5bGe5oCn5a+56LGhXHJcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICB9XHJcbiAgcHJvcHMucGFnZVByb3BzID0gcGFnZVByb3BzO1xyXG4gIC8v6L+Z5Liq5Lic6KW/6IKv5a6a5bCx5piv6buY6K6k54q25oCB5LqGXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHByb3BzLmluaXRpYWxTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9wczsgLy/ov5Tlm57nmoTov5nkuKrlr7nosaHlsIbkvJrmiJDkuLrlvZPliY3nu4Tku7bnmoTlsZ7mgKflr7nosaFcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0QXBwO1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSX0lORk8gPSAnU0VUX1VTRVJfSU5GTyc7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcclxuLy/pu5jorqTlr7zlh7rnmoTkuI3mmK/kuIDkuKrku5PlupPvvIzogIzmmK/kuIDkuKrmjqXmlLbkuobliJ3lp4vnirbmgIHvvIzlubbov5Tlm57ku5PlupPnmoTmlrnms5VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uLXR5cGVzJztcclxuLy/kuIDml6bmiornlKjmiLfkv6Hmga/kv53lrZjliLBzdG9yZeS5i+WQju+8jOS7u+S9lee7hOS7tumDveWPr+S7peS7juS7k+W6k+S4reiOt+WPluWIsOeUqOaIt+S/oeaBr+S6hlxyXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY3VycmVudFVzZXI6bnVsbFxyXG59XHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICBjYXNlIHR5cGVzLlNFVF9VU0VSX0lORk86XHJcbiAgICAgICAgICByZXR1cm4ge2N1cnJlbnRVc2VyOmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTsgICAgXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy/ot6jln5/or7fmsYLnmoTml7blgJnopoHmkLrluKZjb29raWVcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuLy9heGlvc+WQjOaXtuaUr+aMgeWuouaIt+err+WSjOacjeWKoeWZqCDvvIzlhoXpg6jkvb/nlKjkuobkuIDpgILphY3lmajmqKHlvI9cclxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDonaHR0cDovL2xvY2FsaG9zdDo0MDAwJy8vIEFQSeacjeWKoeWZqOeahOerr+WPo1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9nb1wiOiBcIl9hcHBfbG9nb19fMTJaVkdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==