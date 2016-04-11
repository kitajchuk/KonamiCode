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

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.KonamiCode = factory();
    }

})(function () {


    var _code = "38384040373937396665";


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

                    code = String( code + e.keyCode );

                    if ( code === _code ) {
                        self._dispatch( "konami" );
                    }

                    self._timeout = setTimeout(function () {
                        clearTimeout( self._timeout );

                        code = "";

                    }, self._delay );
                };

            document.addEventListener( "keydown", handler, false );
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
         *
         */
        _dispatch: function () {
            for ( var i = this._callbacks.length; i--; ) {
                this._callbacks[ i ]();
            }
        }
    };


    return KonamiCode;


});