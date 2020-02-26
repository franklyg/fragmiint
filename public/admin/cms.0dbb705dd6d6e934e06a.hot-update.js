webpackHotUpdate("cms",{

/***/ "./src/components/BlogRoll.js":
/*!************************************!*\
  !*** ./src/components/BlogRoll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");

var _jsxFileName = "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/components/BlogRoll.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var BlogRoll =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogRoll, _React$Component);

  function BlogRoll() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BlogRoll.prototype;

  _proto.render = function render() {
    var data = this.props.data;
    var posts = data.allMarkdownRemark.edges;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "columns is-multiline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, posts && posts.map(function (_ref) {
      var post = _ref.node;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "is-parent column is-6",
        key: post.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "blog-list-item tile is-child box notification " + (post.frontmatter.featuredpost ? 'is-featured' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, post.frontmatter.featuredimage ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "featured-thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        imageInfo: {
          image: post.frontmatter.featuredimage,
          alt: "featured image thumbnail for post " + post.frontmatter.title
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "post-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: "title has-text-primary is-size-4",
        to: post.fields.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, " \u2022 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "subtitle is-size-5 is-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, post.frontmatter.date))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, post.excerpt, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: "button",
        to: post.fields.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Keep Reading \u2192"))));
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return BlogRoll;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BlogRoll.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    allMarkdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      edges: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
    })
  })
};

var _default = function _default() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "3722544792",
    render: function render(data, count) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlogRoll, {
        data: data,
        count: count,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlogRoll, "BlogRoll", "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/components/BlogRoll.js");
  reactHotLoader.register(_default, "default", "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/components/BlogRoll.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Features */ "./src/components/Features.js");
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogRoll */ "./src/components/BlogRoll.js");
var _jsxFileName = "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/templates/index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      subheading = _ref.subheading,
      mainpitch = _ref.mainpitch,
      description = _ref.description,
      intro = _ref.intro;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-image margin-top-0",
    style: {
      backgroundImage: "url(" + (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) + ")",
      backgroundPosition: "top left",
      backgroundAttachment: "fixed"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      height: '150px',
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",
    style: {
      boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
      backgroundColor: 'rgb(255, 68, 0)',
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",
    style: {
      boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
      backgroundColor: 'rgb(255, 68, 0)',
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, subheading))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, mainpitch.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, mainpitch.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gridItems: intro.blurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn",
    to: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "See all products"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Latest stories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn",
    to: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Read more"))))))))));
};
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subheading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mainpitch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  intro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    heading: frontmatter.heading,
    subheading: frontmatter.subheading,
    mainpitch: frontmatter.mainpitch,
    description: frontmatter.description,
    intro: frontmatter.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "4066978147";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/Users/default/Projects/Personal/fragmiint_web/fragmiint/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.0dbb705dd6d6e934e06a.hot-update.js.map