/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var KonamiCode = __webpack_require__( 1 );

	var konami = new KonamiCode();

	konami.listen(function () {
	    // Do cool stuff here...
	    console.log( "code!" );
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * A konami code easter egg handler
	 *
	 * @KonamiCode
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();

	    } else if ( typeof window !== "undefined" ) {
	        window.KonamiCode = factory();
	    }
	    
	})(function () {


	    var _keys = {
	            A: 65,
	            B: 66,
	            UP: 38,
	            DOWN: 40,
	            LEFT: 37,
	            RIGHT: 39
	        },
	        
	        _code = [
	            _keys.UP,
	            _keys.UP,
	            _keys.DOWN,
	            _keys.DOWN,
	            _keys.LEFT,
	            _keys.RIGHT,
	            _keys.LEFT,
	            _keys.RIGHT,
	            _keys.B,
	            _keys.A
	            
	        ].join( "" );
	    
	    
	    /**
	     *
	     * A konami code easter egg handler
	     * @constructor KonamiCode
	     * @memberof! <global>
	     *
	     */
	    var KonamiCode = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    KonamiCode.prototype = {
	        constructor: KonamiCode,
	        
	        /**
	         *
	         * KonamiCode init constructor method
	         * @memberof KonamiCode
	         * @method KonamiCode.init
	         *
	         */
	        init: function () {
	            /**
	             *
	             * Timeout between key inputs to reset
	             * @memberof KonamiCode
	             * @member KonamiCode._delay
	             *
	             */
	            this._delay = 500;
	            
	            /**
	             *
	             * All supplied callbacks to this instance
	             * @memberof KonamiCode
	             * @member KonamiCode._callbacks
	             *
	             */
	            this._callbacks = [];
	            
	            /**
	             *
	             * Timeout reference
	             * @memberof KonamiCode
	             * @member KonamiCode._timeout
	             *
	             */
	            this._timeout = null;
	            
	            var code = "",
	                self = this,
	                handler = function ( e ) {
	                    try {
	                        clearTimeout( self._timeout );
	                        
	                    } catch ( error ) {}
	                    
	                    code = "" + (code + e.keyCode);
	                    
	                    if ( code === _code ) {
	                        self._dispatch( "konami-code" );
	                    }
	                    
	                    self._timeout = setTimeout(function () {
	                        clearTimeout( self._timeout );
	                        
	                        code = "";
	                                    
	                    }, self._delay );
	                };
	            
	            if ( document.addEventListener ) {
	                document.addEventListener( "keydown", handler, false );
	                
	            } else if ( document.attachEvent ) {
	                document.attachEvent( "onkeydown", handler );
	            }
	        },
	        
	        /**
	         *
	         * Listen for the konami code input
	         * @memberof KonamiCode
	         * @method KonamiCode.listen
	         * @param {function} callback The function to call on input
	         *
	         */
	        listen: function ( callback ) {
	            if ( typeof callback === "function" ) {
	                this._callbacks.push( callback );
	            }
	            
	            return this;
	        },
	        
	        /**
	         *
	         * Internal dispatcher when konami code input is matched
	         * @memberof KonamiCode
	         * @method KonamiCode._dispatch
	         * @param {string} event The _konamicode_ event string
	         *
	         */
	        _dispatch: function ( event ) {
	            for ( var i = this._callbacks.length; i--; ) {
	                this._callbacks[ i ].call( this, event );
	            }
	        }
	    };
	    
	    
	    return KonamiCode;


	});

/***/ }
/******/ ]);