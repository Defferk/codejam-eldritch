/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7091:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed165d6ab5b4787ef92f.ico";

/***/ }),

/***/ 8127:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Azathoth.png";

/***/ }),

/***/ 1796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Cthulthu.png";

/***/ }),

/***/ 8714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/IogSothoth.png";

/***/ }),

/***/ 7181:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ShubNiggurath.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(7091);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(231), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(8127), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(1796), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(8714), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(7181), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <link rel=\"icon\" type=\"image/x-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <title>Eldritch horror</title> </head> <body> <div class=\"fullscren\"> <div class=\"ancients\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"azathoth\" class=\"img-anc Azathoth\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"cthulhu\" class=\"img-anc Cthulthu\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"iogSothoth\" class=\"img-anc IogSothoth\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"shubNiggurath\" class=\"img-anc ShubNiggurath\"> </div> <div class=\"level\"> <input type=\"button\" value=\"Очень легкий\" class=\"easiest\" id=\"preInput\"> <input type=\"button\" value=\"Легкий уровень\" class=\"easy\" id=\"firstInput\"> <input type=\"button\" value=\"Средний уровень\" class=\"normal\" id=\"secondInput\"> <input type=\"button\" value=\"Высокий уровень\" class=\"hard\" id=\"therdInput\"> <input type=\"button\" value=\"Очень высокий\" class=\"hell\" id=\"postInput\"> </div> <main class=\"conrtol\"> <div class=\"stage\"> <span class=\"stageP\">Этап 1</span> <div class=\"stage-box card1\"> <div class=\"stage-circle green\">0</div> <div class=\"stage-circle brown\">0</div> <div class=\"stage-circle blue\">0</div> </div> <span class=\"stageP\">Этап 2</span> <div class=\"stage-box card2\"> <div class=\"stage-circle green\">0</div> <div class=\"stage-circle brown\">0</div> <div class=\"stage-circle blue\">0</div> </div> <span class=\"stageP\">Этап 3</span> <div class=\"stage-box card3\"> <div class=\"stage-circle green\">0</div> <div class=\"stage-circle brown\">0</div> <div class=\"stage-circle blue\">0</div> </div> </div> <div class=\"colodeBox\"> <div class=\"deck isHidden\"></div> <input type=\"button\" value=\"Собрать колоду\" class=\"deckBtn\"> </div> <div class=\"card\"> <div class=\"mainCard\"></div> </div> </main> </div> </body> </html> ";
// Exports
/* harmony default export */ const src = ((/* unused pure expression or super */ null && (code)));
// EXTERNAL MODULE: ./src/assets/Ancients/Azathoth.png
var Azathoth = __webpack_require__(8127);
// EXTERNAL MODULE: ./src/assets/Ancients/Cthulthu.png
var Cthulthu = __webpack_require__(1796);
// EXTERNAL MODULE: ./src/assets/Ancients/IogSothoth.png
var IogSothoth = __webpack_require__(8714);
// EXTERNAL MODULE: ./src/assets/Ancients/ShubNiggurath.png
var ShubNiggurath = __webpack_require__(7181);
;// CONCATENATED MODULE: ./src/assets/Ancients/index.js





const ancients = {
  azathoth: Azathoth,
  cthulhu: Cthulthu,
  iogSothoth: IogSothoth,
  shubNiggurath: ShubNiggurath
}

/* harmony default export */ const Ancients = (ancients);
;// CONCATENATED MODULE: ./src/data/ancients.js


const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: Ancients.azathoth,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: Ancients.cthulhu,
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: Ancients.iogSothoth,
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: Ancients.shubNiggurath,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

/* harmony default export */ const data_ancients = (ancientsData);
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue1.png
const blue1_namespaceObject = __webpack_require__.p + "img/blue1.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue2.png
const blue2_namespaceObject = __webpack_require__.p + "img/blue2.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue3.png
const blue3_namespaceObject = __webpack_require__.p + "img/blue3.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue4.png
const blue4_namespaceObject = __webpack_require__.p + "img/blue4.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue5.png
const blue5_namespaceObject = __webpack_require__.p + "img/blue5.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue6.png
const blue6_namespaceObject = __webpack_require__.p + "img/blue6.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue7.png
const blue7_namespaceObject = __webpack_require__.p + "img/blue7.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue8.png
const blue8_namespaceObject = __webpack_require__.p + "img/blue8.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue9.png
const blue9_namespaceObject = __webpack_require__.p + "img/blue9.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue10.png
const blue10_namespaceObject = __webpack_require__.p + "img/blue10.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue11.png
const blue11_namespaceObject = __webpack_require__.p + "img/blue11.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue12.png
const blue12_namespaceObject = __webpack_require__.p + "img/blue12.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/index.js













const cards = {
  blue1: blue1_namespaceObject,
  blue2: blue2_namespaceObject,
  blue3: blue3_namespaceObject,
  blue4: blue4_namespaceObject,
  blue5: blue5_namespaceObject,
  blue6: blue6_namespaceObject,
  blue7: blue7_namespaceObject,
  blue8: blue8_namespaceObject,
  blue9: blue9_namespaceObject,
  blue10: blue10_namespaceObject,
  blue11: blue11_namespaceObject,
  blue12: blue12_namespaceObject,
}

/* harmony default export */ const blue = (cards);
;// CONCATENATED MODULE: ./src/data/mythicCards/blue/index.js


const cardsData = [
  {
    id: 'blue1',
    cardFace: blue.blue1,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    cardFace: blue.blue2,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
    cardFace: blue.blue3,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
    cardFace: blue.blue4,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
    cardFace: blue.blue5,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
    cardFace: blue.blue6,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
    cardFace: blue.blue7,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8',
    cardFace: blue.blue8,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    cardFace: blue.blue9,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
    cardFace: blue.blue10,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
    cardFace: blue.blue11,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    cardFace: blue.blue12,
    difficulty: 'normal',
    color:'blue'
  },
]

/* harmony default export */ const mythicCards_blue = (cardsData);
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green1.png
const green1_namespaceObject = __webpack_require__.p + "img/green1.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green2.png
const green2_namespaceObject = __webpack_require__.p + "img/green2.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green3.png
const green3_namespaceObject = __webpack_require__.p + "img/green3.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green4.png
const green4_namespaceObject = __webpack_require__.p + "img/green4.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green5.png
const green5_namespaceObject = __webpack_require__.p + "img/green5.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green6.png
const green6_namespaceObject = __webpack_require__.p + "img/green6.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green7.png
const green7_namespaceObject = __webpack_require__.p + "img/green7.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green8.png
const green8_namespaceObject = __webpack_require__.p + "img/green8.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green9.png
const green9_namespaceObject = __webpack_require__.p + "img/green9.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green10.png
const green10_namespaceObject = __webpack_require__.p + "img/green10.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green11.png
const green11_namespaceObject = __webpack_require__.p + "img/green11.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green12.png
const green12_namespaceObject = __webpack_require__.p + "img/green12.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green13.png
const green13_namespaceObject = __webpack_require__.p + "img/green13.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green14.png
const green14_namespaceObject = __webpack_require__.p + "img/green14.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green15.png
const green15_namespaceObject = __webpack_require__.p + "img/green15.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green16.png
const green16_namespaceObject = __webpack_require__.p + "img/green16.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green17.png
const green17_namespaceObject = __webpack_require__.p + "img/green17.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green18.png
const green18_namespaceObject = __webpack_require__.p + "img/green18.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/index.js



















const green_cards = {
  green1: green1_namespaceObject,
  green2: green2_namespaceObject,
  green3: green3_namespaceObject,
  green4: green4_namespaceObject,
  green5: green5_namespaceObject,
  green6: green6_namespaceObject,
  green7: green7_namespaceObject,
  green8: green8_namespaceObject,
  green9: green9_namespaceObject,
  green10: green10_namespaceObject,
  green11: green11_namespaceObject,
  green12: green12_namespaceObject,
  green13: green13_namespaceObject,
  green14: green14_namespaceObject,
  green15: green15_namespaceObject,
  green16: green16_namespaceObject,
  green17: green17_namespaceObject,
  green18: green18_namespaceObject,
};

/* harmony default export */ const green = (green_cards);
;// CONCATENATED MODULE: ./src/data/mythicCards/green/index.js


const green_cardsData = [
  {
    id: 'green1',
    cardFace: green.green1,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    cardFace: green.green2,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    cardFace: green.green3,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
    cardFace: green.green4,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
    cardFace: green.green5,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
    cardFace: green.green6,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
    cardFace: green.green7,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    cardFace: green.green8,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    cardFace: green.green9,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
    cardFace: green.green10,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    cardFace: green.green11,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
    cardFace: green.green12,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
    cardFace: green.green13,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    cardFace: green.green14,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    cardFace: green.green15,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
    cardFace: green.green16,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    cardFace: green.green17,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    cardFace: green.green18,
    difficulty: 'easy',
    color:'green'
  },
]

/* harmony default export */ const mythicCards_green = (green_cardsData);
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown1.png
const brown1_namespaceObject = __webpack_require__.p + "img/brown1.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown2.png
const brown2_namespaceObject = __webpack_require__.p + "img/brown2.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown3.png
const brown3_namespaceObject = __webpack_require__.p + "img/brown3.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown4.png
const brown4_namespaceObject = __webpack_require__.p + "img/brown4.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown5.png
const brown5_namespaceObject = __webpack_require__.p + "img/brown5.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown6.png
const brown6_namespaceObject = __webpack_require__.p + "img/brown6.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown7.png
const brown7_namespaceObject = __webpack_require__.p + "img/brown7.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown8.png
const brown8_namespaceObject = __webpack_require__.p + "img/brown8.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown9.png
const brown9_namespaceObject = __webpack_require__.p + "img/brown9.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown10.png
const brown10_namespaceObject = __webpack_require__.p + "img/brown10.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown11.png
const brown11_namespaceObject = __webpack_require__.p + "img/brown11.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown12.png
const brown12_namespaceObject = __webpack_require__.p + "img/brown12.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown13.png
const brown13_namespaceObject = __webpack_require__.p + "img/brown13.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown14.png
const brown14_namespaceObject = __webpack_require__.p + "img/brown14.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown15.png
const brown15_namespaceObject = __webpack_require__.p + "img/brown15.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown16.png
const brown16_namespaceObject = __webpack_require__.p + "img/brown16.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown17.png
const brown17_namespaceObject = __webpack_require__.p + "img/brown17.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown18.png
const brown18_namespaceObject = __webpack_require__.p + "img/brown18.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown19.png
const brown19_namespaceObject = __webpack_require__.p + "img/brown19.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown20.png
const brown20_namespaceObject = __webpack_require__.p + "img/brown20.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown21.png
const brown21_namespaceObject = __webpack_require__.p + "img/brown21.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/index.js






















const brown_cards = {
  brown1: brown1_namespaceObject,
  brown2: brown2_namespaceObject,
  brown3: brown3_namespaceObject,
  brown4: brown4_namespaceObject,
  brown5: brown5_namespaceObject,
  brown6: brown6_namespaceObject,
  brown7: brown7_namespaceObject,
  brown8: brown8_namespaceObject,
  brown9: brown9_namespaceObject,
  brown10: brown10_namespaceObject,
  brown11: brown11_namespaceObject,
  brown12: brown12_namespaceObject,
  brown13: brown13_namespaceObject,
  brown14: brown14_namespaceObject,
  brown15: brown15_namespaceObject,
  brown16: brown16_namespaceObject,
  brown17: brown17_namespaceObject,
  brown18: brown18_namespaceObject,
  brown19: brown19_namespaceObject,
  brown20: brown20_namespaceObject,
  brown21: brown21_namespaceObject,
}

/* harmony default export */ const brown = (brown_cards);
;// CONCATENATED MODULE: ./src/data/mythicCards/brown/index.js


const brown_cardsData = [
  {
    id: 'brown1',
    cardFace: brown.brown1,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    cardFace: brown.brown2,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    cardFace: brown.brown3,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    cardFace: brown.brown4,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    cardFace: brown.brown5,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    cardFace: brown.brown6,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    cardFace: brown.brown7,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    cardFace: brown.brown8,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
    cardFace: brown.brown9,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    cardFace: brown.brown10,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    cardFace: brown.brown11,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    cardFace: brown.brown12,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    cardFace: brown.brown13,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
    cardFace: brown.brown14,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    cardFace: brown.brown15,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    cardFace: brown.brown16,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    cardFace: brown.brown17,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    cardFace: brown.brown18,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    cardFace: brown.brown19,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
    cardFace: brown.brown20,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
    cardFace: brown.brown21,
    difficulty: 'easy',
    color:'brown'
  },
]

/* harmony default export */ const mythicCards_brown = (brown_cardsData);
;// CONCATENATED MODULE: ./src/script/getLevel.js


const levelControl = document.querySelector('.level');
const ancientsBox = document.querySelector('.ancients');
const ancCard = document.querySelectorAll('.img-anc');
const stageCircle = document.querySelectorAll('.stage-circle');
const controlPanel = document.querySelector('.conrtol')
const deckBox = document.querySelector('.deck');
const deckBtn = document.querySelector('.deckBtn')
const cardBox = document.querySelector('.mainCard');
const stageParag = document.querySelectorAll('.stageP');
const preInp = document.getElementById('preInput');
const firstInp = document.getElementById('firstInput');
const secondInp = document.getElementById('secondInput');
const therdInp = document.getElementById('therdInput');
const postInp = document.getElementById('postInput');
var CurentObj;
var cardsArray ={
        firstStage: [],
        secondStage:[],
        thirdStage:[],
        choseLevel:[],
        stageArrr:[
            [],
            [],
            [],
        ]
}
var countColor = [0,0,0];

const levelDiff = {
    easiest: ['easy'],
    easy: ['easy','normal'],
    normal: ['easy','normal','hard'],
    hard: ['normal','hard'],
    hell: ['hard'],
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getElementBuNum = (stage,number,arrayC)=>{
    while(number!==0){
        var newElem = arrayC.splice(getRandomInt(arrayC.length),1);
        cardsArray[stage].push(newElem[0]);
        number--;
    }
}

const bgColorSet = () =>{
    preInp.style.backgroundColor = 'aliceblue'; 
    firstInp.style.backgroundColor = 'aliceblue'; 
    secondInp.style.backgroundColor = 'aliceblue'; 
    therdInp.style.backgroundColor = 'aliceblue'; 
    postInp.style.backgroundColor = 'aliceblue'; 
}

const getAncients = (event)=>{
    if(event.target.nodeName !== 'DIV'){
        CurentObj = data_ancients.find(({id})=>id === event.target.alt);
        ancCard.forEach((value)=>value.classList.remove('card-active'));
        bgColorSet();
        event.target.classList.add('card-active');
        levelControl.style.visibility = 'visible';
        levelControl.style.opacity = 1;
        cardBox.style.backgroundImage = 'url(img/mainCardBackground.jpg)';
        controlPanel.style.visibility = 'hidden';
        deckBtn.style.visibility = 'hidden'
        controlPanel.style.opacity = 0;
        levelControl.addEventListener('click',getLevel)
    }
}

const getLevel=(event)=>{
    if(event.target.nodeName !== 'DIV'){
        bgColorSet();
        event.target.style.backgroundColor = '#BDED98';
        cardsArray ={
            firstStage: [],
            secondStage:[],
            thirdStage:[],
            choseLevel:[],
            stageArrr:[
                [],
                [],
                [],
            ],
        }
        countColor = [0,0,0];
        stageCircle.forEach((value,index)=>{
            var stageLevel = (index<3?'firstStage':(index<6?'secondStage':'thirdStage'))
            var j = (index<3?0:(index<6?1:2))
            var i = 0;
            var stageNum = 0;
            switch(index){
                case 0:
                case 3:
                case 6: stageNum = 'greenCards'; i=0; break;
                case 1:
                case 4:
                case 7: stageNum = 'brownCards'; i=1; break;
                case 2:
                case 5:
                case 8: stageNum = 'blueCards'; i=2; break;
            }
            value.innerHTML=CurentObj[stageLevel][stageNum]
            cardsArray.stageArrr[j].push(CurentObj[stageLevel][stageNum])
            countColor[i] += CurentObj[stageLevel][stageNum];
        })
        cardsArray.choseLevel = levelDiff[event.target.className];
        controlPanel.style.visibility = 'visible';
        controlPanel.style.opacity = 1;
        deckBox.style.visibility = 'hidden';
        deckBox.style.opacity = 0;
        deckBtn.style.visibility = 'visible';
        deckBtn.style.opacity = 1;
        cardBox.style.backgroundImage = 'url(img/mainCardBackground.jpg)';
        if(stageParag[0].className=='stageP-empty'){stageParag.forEach((value)=>{value.className='stageP'})};
        deckBox.style.backgroundImage = 'url(img/mythicCardBackground.png)';
        deckBtn.addEventListener('click',getColode);
    }
}


;



const getColode = ()=>{
    var fullSuitableBlue = [];
    var fullSuitableGreen = [];
    var fullSuitableBrown = [];
    var secondLevelBlue = [];
    var secondLevelGreen = [];
    var secondLevelBrown = [];
    mythicCards_green.forEach((element)=>{
        switch(cardsArray['choseLevel'].length){
         case 1: if(element.difficulty == cardsArray['choseLevel'][0]){fullSuitableGreen.push(element)};
             break;
         case 2: if(element.difficulty == cardsArray['choseLevel'][0] || element.difficulty == cardsArray['choseLevel'][1]){fullSuitableGreen.push(element)};
             break;
         case 3: fullSuitableGreen.push(element);
             break;
        }
     })
     if(countColor[0]>fullSuitableGreen.length){
        mythicCards_green.forEach((element)=>{
            if(element.difficulty == 'normal'){secondLevelGreen.push(element)};            
        })
        while(countColor[0]>fullSuitableGreen.length){
            var spareElem = secondLevelGreen.splice(getRandomInt(secondLevelGreen.length),1);
            fullSuitableGreen.push(spareElem[0]);
        }
    }
     mythicCards_brown.forEach((element)=>{
        switch(cardsArray['choseLevel'].length){
         case 1: if(element.difficulty == cardsArray['choseLevel'][0]){fullSuitableBrown.push(element)};
             break;
         case 2: if(element.difficulty == cardsArray['choseLevel'][0] || element.difficulty == cardsArray['choseLevel'][1]){fullSuitableBrown.push(element)};
             break;
         case 3: fullSuitableBrown.push(element);
             break;
        }
     })
     if(countColor[1]>fullSuitableBrown.length){
        mythicCards_brown.forEach((element)=>{
            if(element.difficulty == 'normal'){secondLevelBrown.push(element)};            
        })
        while(countColor[1]>fullSuitableBrown.length){
            var spareElem = secondLevelBrown.splice(getRandomInt(secondLevelBrown.length),1);
            fullSuitableBrown.push(spareElem[0]);
        }
    }
    mythicCards_blue.forEach((element)=>{
       switch(cardsArray['choseLevel'].length){
        case 1: if(element.difficulty == cardsArray['choseLevel'][0]){fullSuitableBlue.push(element)};
            break;
        case 2: if(element.difficulty == cardsArray['choseLevel'][0] || element.difficulty == cardsArray['choseLevel'][1]){fullSuitableBlue.push(element)};
            break;
        case 3: fullSuitableBlue.push(element);
            break;
       }
    })
    if(countColor[2]>fullSuitableBlue.length){
        mythicCards_blue.forEach((element)=>{
            if(element.difficulty == 'normal'){secondLevelBlue.push(element)};            
        })
        while(countColor[2]>fullSuitableBlue.length){
            var spareElem = secondLevelBlue.splice(getRandomInt(secondLevelBlue.length),1);
            fullSuitableBlue.push(spareElem[0]);
        }
    }
    cardsArray['stageArrr'].forEach((valueArr,firsIndex)=>{
        valueArr.forEach((valueIn,index)=>{
            var stageLevel = (firsIndex==0?'firstStage':(firsIndex==1?'secondStage':'thirdStage'))
            var stageColorArray = (index==0?fullSuitableGreen:(index==1?fullSuitableBrown:fullSuitableBlue))
            getElementBuNum(stageLevel,valueIn,stageColorArray)
        })
    })
    deckBox.style.visibility = 'visible';
    deckBox.style.opacity = 1;
    deckBtn.style.visibility = 'hidden';
    deckBtn.style.opacity = 0;
    deckBtn.removeEventListener('click',getColode)
    deckBox.addEventListener('click',getCardOfColode)
}

const getCardOfColode = ()=>{
    var curentStage = (cardsArray.firstStage.length!==0?'firstStage':(cardsArray.secondStage.length!==0?'secondStage':'thirdStage'))
    if(curentStage=='secondStage'){stageParag[0].className = 'stageP-empty'}else if(curentStage=='thirdStage'){stageParag[1].className = 'stageP-empty'}
    var randomCard = cardsArray[curentStage].splice(getRandomInt(cardsArray[curentStage].length),1);
    var thisCardIndex = (curentStage==='firstStage'?0:(curentStage==='secondStage'?3:6))
    try{ var thisCardColor = (randomCard[0].color==='green'?0:(randomCard[0].color==='brown'?1:2))
        stageCircle[thisCardIndex+thisCardColor].innerHTML-=1;
        cardBox.style.backgroundImage=`url(${randomCard[0].cardFace})` 
    }
    catch{
        stageParag[2].className = 'stageP-empty'
        cardBox.style.backgroundImage = 'url(img/mainCardBackground.jpg)'
        deckBox.style.visibility = 'hidden'
        deckBox.style.opacity = 0;
        deckBox.removeEventListener('click',getCardOfColode)
    }
}

ancientsBox.addEventListener('click',getAncients)

;// CONCATENATED MODULE: ./src/index.js





})();

/******/ })()
;