/*!
 *
 * A konami code easter egg handler
 *
 * @KonamiCode
 * @author: kitajchuk
 *
 *
 */
(function ( window, undefined ) {


"use strict";


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


// Expose
window.KonamiCode = KonamiCode;


})( window );