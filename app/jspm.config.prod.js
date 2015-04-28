System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.classProperties"
    ],
    "stage": 0,
    "blacklist": []
  },
  "paths": {
    "*": "*.js",
    "github:*": "vendor/github/*.js",
    "npm:*": "vendor/npm/*.js"
  },
  "bundles": {
    "bundles/prod": [
      "npm:process@0.10.1/browser",
      "npm:react@0.13.2/lib/PooledClass",
      "npm:react@0.13.2/lib/Object.assign",
      "npm:react@0.13.2/lib/emptyObject",
      "npm:react@0.13.2/lib/emptyFunction",
      "npm:react@0.13.2/lib/ReactCurrentOwner",
      "npm:react@0.13.2/lib/ReactRootIndex",
      "npm:react@0.13.2/lib/getIteratorFn",
      "npm:react@0.13.2/lib/ReactLifeCycle",
      "npm:react@0.13.2/lib/ReactInstanceMap",
      "npm:react@0.13.2/lib/CallbackQueue",
      "npm:react@0.13.2/lib/ReactPerf",
      "npm:react@0.13.2/lib/ReactOwner",
      "npm:react@0.13.2/lib/ReactPropTypeLocations",
      "npm:react@0.13.2/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.2/lib/ReactNativeComponent",
      "npm:react@0.13.2/lib/Transaction",
      "npm:react@0.13.2/lib/ReactErrorUtils",
      "npm:react@0.13.2/lib/keyOf",
      "npm:react@0.13.2/lib/mapObject",
      "npm:react@0.13.2/lib/DOMProperty",
      "npm:react@0.13.2/lib/escapeTextContentForBrowser",
      "npm:react@0.13.2/lib/CSSProperty",
      "npm:react@0.13.2/lib/ExecutionEnvironment",
      "npm:react@0.13.2/lib/camelize",
      "npm:react@0.13.2/lib/dangerousStyleValue",
      "npm:react@0.13.2/lib/hyphenate",
      "npm:react@0.13.2/lib/memoizeStringOnly",
      "npm:react@0.13.2/lib/toArray",
      "npm:react@0.13.2/lib/getMarkupWrap",
      "npm:react@0.13.2/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.2/lib/setInnerHTML",
      "npm:react@0.13.2/lib/EventPluginRegistry",
      "npm:react@0.13.2/lib/accumulateInto",
      "npm:react@0.13.2/lib/forEachAccumulated",
      "npm:react@0.13.2/lib/ReactEventEmitterMixin",
      "npm:react@0.13.2/lib/ViewportMetrics",
      "npm:react@0.13.2/lib/isEventSupported",
      "npm:react@0.13.2/lib/ReactEmptyComponent",
      "npm:react@0.13.2/lib/adler32",
      "npm:react@0.13.2/lib/isNode",
      "npm:react@0.13.2/lib/getReactRootElementInContainer",
      "npm:react@0.13.2/lib/ReactComponentEnvironment",
      "npm:react@0.13.2/lib/shouldUpdateReactComponent",
      "npm:react@0.13.2/lib/flattenChildren",
      "npm:react@0.13.2/lib/EventPropagators",
      "npm:react@0.13.2/lib/getTextContentAccessor",
      "npm:react@0.13.2/lib/getEventTarget",
      "npm:react@0.13.2/lib/SyntheticInputEvent",
      "npm:react@0.13.2/lib/isTextInputElement",
      "npm:react@0.13.2/lib/ClientReactRootIndex",
      "npm:react@0.13.2/lib/DefaultEventPluginOrder",
      "npm:react@0.13.2/lib/SyntheticUIEvent",
      "npm:react@0.13.2/lib/getEventModifierState",
      "npm:react@0.13.2/lib/HTMLDOMPropertyConfig",
      "npm:react@0.13.2/lib/MobileSafariClickEventPlugin",
      "npm:react@0.13.2/lib/findDOMNode",
      "npm:react@0.13.2/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.13.2/lib/focusNode",
      "npm:react@0.13.2/lib/LocalEventTrapMixin",
      "npm:react@0.13.2/lib/ReactDOMImg",
      "npm:react@0.13.2/lib/ReactDOMIframe",
      "npm:react@0.13.2/lib/ReactPropTypes",
      "npm:react@0.13.2/lib/ReactDOMOption",
      "npm:react@0.13.2/lib/ReactDOMSelect",
      "npm:react@0.13.2/lib/ReactDOMTextarea",
      "npm:react@0.13.2/lib/EventListener",
      "npm:react@0.13.2/lib/getUnboundedScrollPosition",
      "npm:react@0.13.2/lib/ReactInjection",
      "npm:react@0.13.2/lib/getNodeForCharacterOffset",
      "npm:react@0.13.2/lib/getActiveElement",
      "npm:react@0.13.2/lib/ReactPutListenerQueue",
      "npm:react@0.13.2/lib/shallowEqual",
      "npm:react@0.13.2/lib/ServerReactRootIndex",
      "npm:react@0.13.2/lib/SyntheticClipboardEvent",
      "npm:react@0.13.2/lib/SyntheticFocusEvent",
      "npm:react@0.13.2/lib/getEventCharCode",
      "npm:react@0.13.2/lib/getEventKey",
      "npm:react@0.13.2/lib/SyntheticDragEvent",
      "npm:react@0.13.2/lib/SyntheticTouchEvent",
      "npm:react@0.13.2/lib/SyntheticWheelEvent",
      "npm:react@0.13.2/lib/SVGDOMPropertyConfig",
      "npm:react@0.13.2/lib/createFullPageComponent",
      "npm:react@0.13.2/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.13.2/lib/performance",
      "npm:react@0.13.2/lib/ReactServerRenderingTransaction",
      "npm:react@0.13.2/lib/onlyChild",
      "npm:object-assign@2.0.0/index",
      "npm:qs@2.4.1/lib/utils",
      "npm:qs@2.4.1/lib/parse",
      "npm:react-router@0.13.2/lib/components/ContextWrapper",
      "npm:react-router@0.13.2/lib/components/Route",
      "npm:react-router@0.13.2/lib/components/Link",
      "npm:react-router@0.13.2/lib/components/NotFoundRoute",
      "npm:react-router@0.13.2/lib/components/Redirect",
      "npm:react-router@0.13.2/lib/actions/LocationActions",
      "npm:react-router@0.13.2/lib/History",
      "npm:react-router@0.13.2/lib/locations/HistoryLocation",
      "npm:react-router@0.13.2/lib/locations/RefreshLocation",
      "npm:react-router@0.13.2/lib/locations/StaticLocation",
      "npm:react-router@0.13.2/lib/locations/TestLocation",
      "npm:react-router@0.13.2/lib/behaviors/ImitateBrowserBehavior",
      "npm:react-router@0.13.2/lib/behaviors/ScrollToTopBehavior",
      "npm:react-router@0.13.2/lib/Navigation",
      "npm:react-router@0.13.2/lib/State",
      "npm:react-router@0.13.2/lib/createRoutesFromReactChildren",
      "npm:react-router@0.13.2/lib/getWindowScrollPosition",
      "npm:react-router@0.13.2/lib/isReactChildren",
      "npm:react-router@0.13.2/lib/Cancellation",
      "npm:react-router@0.13.2/lib/Redirect",
      "npm:react-router@0.13.2/lib/Match",
      "npm:react-router@0.13.2/lib/supportsHistory",
      "npm:react-router@0.13.2/lib/runRouter",
      "npm:core-js@0.8.4/library/modules/$.fw",
      "npm:core-js@0.8.4/library/modules/$.assign",
      "npm:lodash@3.7.0/index",
      "npm:babel-runtime@5.1.11/helpers/inherits",
      "npm:babel-runtime@5.1.11/helpers/create-class",
      "npm:babel-runtime@5.1.11/helpers/class-call-check",
      "components/intl/intl",
      "npm:intl-messageformat@1.1.0/lib/utils",
      "npm:intl-messageformat@1.1.0/lib/es5",
      "npm:intl-messageformat@1.1.0/lib/compiler",
      "npm:intl-messageformat-parser@1.1.0/lib/parser",
      "npm:intl-messageformat@1.1.0/lib/en",
      "npm:intl-relativeformat@1.1.0/lib/diff",
      "npm:intl-relativeformat@1.1.0/lib/es5",
      "npm:intl-relativeformat@1.1.0/lib/en",
      "npm:react-intl@1.2.0/lib/en",
      "npm:react-intl@1.2.0/lib/react",
      "npm:intl-format-cache@2.0.4/lib/es5",
      "npm:react-intl@1.2.0/lib/components/date",
      "npm:react-intl@1.2.0/lib/components/time",
      "npm:react-intl@1.2.0/lib/components/relative",
      "npm:react-intl@1.2.0/lib/components/number",
      "npm:react-intl@1.2.0/lib/components/message",
      "npm:react-intl@1.2.0/lib/escape",
      "components/link-exists/link-exists",
      "icons/icon/logo",
      "components/intl-link/intl-link",
      "icons/icon/checkmark",
      "pages/faq/merchants/merchants",
      "components/translation/translation",
      "icons/icon/mobile",
      "icons/icon/money-flower",
      "pages/home/home.fr",
      "pages/about/about.en",
      "pages/about/about.fr",
      "pages/pricing/pricing",
      "npm:locale@0.0.20/lib/index",
      "helpers/intl-polyfill/intl-polyfill",
      "npm:process@0.10.1",
      "npm:react@0.13.2/lib/warning",
      "npm:react@0.13.2/lib/ReactInstanceHandles",
      "npm:react@0.13.2/lib/ReactRef",
      "npm:react@0.13.2/lib/ReactElementValidator",
      "npm:react@0.13.2/lib/ReactClass",
      "npm:react@0.13.2/lib/ReactDOM",
      "npm:react@0.13.2/lib/quoteAttributeValueForBrowser",
      "npm:react@0.13.2/lib/camelizeStyleName",
      "npm:react@0.13.2/lib/hyphenateStyleName",
      "npm:react@0.13.2/lib/createArrayFromMixed",
      "npm:react@0.13.2/lib/setTextContent",
      "npm:react@0.13.2/lib/EventPluginHub",
      "npm:react@0.13.2/lib/ReactMarkupChecksum",
      "npm:react@0.13.2/lib/isTextNode",
      "npm:react@0.13.2/lib/ReactCompositeComponent",
      "npm:react@0.13.2/lib/ReactChildReconciler",
      "npm:react@0.13.2/lib/FallbackCompositionState",
      "npm:react@0.13.2/lib/SyntheticEvent",
      "npm:react@0.13.2/lib/ChangeEventPlugin",
      "npm:react@0.13.2/lib/SyntheticMouseEvent",
      "npm:react@0.13.2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.2/lib/AutoFocusMixin",
      "npm:react@0.13.2/lib/ReactDOMForm",
      "npm:react@0.13.2/lib/LinkedValueUtils",
      "npm:react@0.13.2/lib/ReactEventListener",
      "npm:react@0.13.2/lib/ReactDOMSelection",
      "npm:react@0.13.2/lib/SelectEventPlugin",
      "npm:react@0.13.2/lib/SyntheticKeyboardEvent",
      "npm:react@0.13.2/lib/performanceNow",
      "npm:react@0.13.2/lib/ReactServerRendering",
      "npm:object-assign@2.0.0",
      "npm:qs@2.4.1/lib/stringify",
      "npm:react-router@0.13.2/lib/components/RouteHandler",
      "npm:react-router@0.13.2/lib/locations/HashLocation",
      "npm:react-router@0.13.2/lib/ScrollHistory",
      "npm:react-router@0.13.2/lib/Transition",
      "npm:core-js@0.8.4/library/modules/$",
      "npm:lodash@3.7.0",
      "components/app/app",
      "npm:intl-messageformat-parser@1.1.0/index",
      "npm:intl-relativeformat@1.1.0/lib/core",
      "npm:intl-format-cache@2.0.4/lib/memoizer",
      "npm:react-intl@1.2.0/lib/components/html-message",
      "components/footer/footer",
      "pages/home/home.en",
      "pages/about/about",
      "npm:locale@0.0.20/lib",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:react@0.13.2/lib/ReactContext",
      "npm:react@0.13.2/lib/traverseAllChildren",
      "npm:react@0.13.2/lib/ReactReconciler",
      "npm:react@0.13.2/lib/DOMPropertyOperations",
      "npm:react@0.13.2/lib/CSSPropertyOperations",
      "npm:react@0.13.2/lib/createNodesFromMarkup",
      "npm:react@0.13.2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.2/lib/containsNode",
      "npm:react@0.13.2/lib/instantiateReactComponent",
      "npm:react@0.13.2/lib/ReactMultiChild",
      "npm:react@0.13.2/lib/SyntheticCompositionEvent",
      "npm:react@0.13.2/lib/EnterLeaveEventPlugin",
      "npm:react@0.13.2/lib/ReactDOMButton",
      "npm:react@0.13.2/lib/ReactDOMInput",
      "npm:react@0.13.2/lib/ReactInputSelection",
      "npm:react@0.13.2/lib/SimpleEventPlugin",
      "npm:react@0.13.2/lib/ReactDefaultPerf",
      "npm:qs@2.4.1/lib/index",
      "npm:react-router@0.13.2/lib/createRouter",
      "npm:core-js@0.8.4/library/modules/$.def",
      "npm:intl-messageformat-parser@1.1.0",
      "npm:intl-relativeformat@1.1.0/lib/main",
      "npm:intl-format-cache@2.0.4/index",
      "pages/home/home",
      "npm:locale@0.0.20",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:react@0.13.2/lib/ReactElement",
      "npm:react@0.13.2/lib/ReactUpdates",
      "npm:react@0.13.2/lib/Danger",
      "npm:react@0.13.2/lib/ReactMount",
      "npm:react@0.13.2/lib/ReactDOMComponent",
      "npm:react@0.13.2/lib/BeforeInputEventPlugin",
      "npm:react@0.13.2/lib/ReactReconcileTransaction",
      "npm:qs@2.4.1/index",
      "npm:core-js@0.8.4/library/modules/es6.object.assign",
      "npm:intl-messageformat@1.1.0/lib/core",
      "npm:intl-relativeformat@1.1.0/index",
      "npm:intl-format-cache@2.0.4",
      "helpers/locale-helper/locale-helper",
      "npm:react@0.13.2/lib/invariant",
      "npm:react@0.13.2/lib/ReactFragment",
      "npm:react@0.13.2/lib/ReactUpdateQueue",
      "npm:react@0.13.2/lib/DOMChildrenOperations",
      "npm:react@0.13.2/lib/ReactDefaultInjection",
      "npm:qs@2.4.1",
      "npm:core-js@0.8.4/library/fn/object/assign",
      "npm:intl-messageformat@1.1.0/lib/main",
      "npm:intl-relativeformat@1.1.0",
      "npm:react-intl@1.2.0/lib/mixin",
      "npm:react@0.13.2/lib/keyMirror",
      "npm:react@0.13.2/lib/ReactChildren",
      "npm:react@0.13.2/lib/ReactComponent",
      "npm:react@0.13.2/lib/ReactDOMIDOperations",
      "npm:react-router@0.13.2/lib/PathUtils",
      "npm:babel-runtime@5.1.11/core-js/object/assign",
      "npm:intl-messageformat@1.1.0/index",
      "npm:react@0.13.2/lib/EventConstants",
      "npm:react@0.13.2/lib/ReactComponentBrowserEnvironment",
      "npm:react-router@0.13.2/lib/Route",
      "npm:babel-runtime@5.1.11/helpers/extends",
      "npm:intl-messageformat@1.1.0",
      "npm:react@0.13.2/lib/EventPluginUtils",
      "npm:react@0.13.2/lib/ReactDOMTextComponent",
      "npm:react-router@0.13.2/lib/PropTypes",
      "npm:react-intl@1.2.0/lib/react-intl",
      "npm:react@0.13.2/lib/React",
      "npm:react-router@0.13.2/lib/components/DefaultRoute",
      "npm:react-intl@1.2.0/index",
      "npm:react@0.13.2/react",
      "npm:react-router@0.13.2/lib/index",
      "npm:react-intl@1.2.0",
      "npm:react@0.13.2",
      "npm:react-router@0.13.2/lib",
      "components/intl-message/intl-message",
      "npm:react-router@0.13.2",
      "components/header/header",
      "components/page/page",
      "pages/not-found/not-found",
      "router/routes",
      "client/bootstrap"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.1.11",
    "babel-runtime": "npm:babel-runtime@5.1.11",
    "classnames": "npm:classnames@1.2.1",
    "core-js": "npm:core-js@0.8.4",
    "intl": "npm:intl@0.1.4",
    "locale": "npm:locale@0.0.20",
    "lodash": "npm:lodash@3.7.0",
    "react": "npm:react@0.13.2",
    "react-intl": "npm:react-intl@1.2.0",
    "react-router": "npm:react-router@0.13.2",
    "svg-injector": "npm:svg-injector@1.1.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "url": "npm:url@0.10.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.1"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.2.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:classnames@1.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:classnames@1.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:core-js@0.8.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl-messageformat@1.1.0": {
      "intl-messageformat-parser": "npm:intl-messageformat-parser@1.1.0"
    },
    "npm:intl-relativeformat@1.1.0": {
      "intl-messageformat": "npm:intl-messageformat@1.1.0"
    },
    "npm:intl@0.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:locale@0.0.20": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.7.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-intl@1.2.0": {
      "intl-format-cache": "npm:intl-format-cache@2.0.4",
      "intl-messageformat": "npm:intl-messageformat@1.1.0",
      "intl-relativeformat": "npm:intl-relativeformat@1.1.0",
      "react": "npm:react@0.13.2"
    },
    "npm:react-router@0.13.2": {
      "classnames": "npm:classnames@1.1.4",
      "object-assign": "npm:object-assign@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "qs": "npm:qs@2.4.1",
      "react": "npm:react@0.13.2"
    },
    "npm:react@0.13.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:svg-injector@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:through@2.3.7": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

