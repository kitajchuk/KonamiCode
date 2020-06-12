export default class KonamiCode {
    constructor () {
        this._code = "38384040373937396665";
        this._delay = 256;
        this._callbacks = [];
        this._timeout = null;

        this.bind();
    }


    bind () {
        let code = "";

        document.addEventListener( "keydown", ( e ) => {
            clearTimeout( this._timeout );

            code = `${code}${e.keyCode}`;

            if ( code === this._code ) {
                this._dispatch();
            }

            this._timeout = setTimeout(() => {
                clearTimeout( this._timeout );

                code = "";

            }, this._delay );

        }, false );
    }


    listen ( callback ) {
        if ( typeof callback === "function" ) {
            this._callbacks.push( callback );
        }

        return this;
    }


    _dispatch () {
        for ( let i = this._callbacks.length; i--; ) {
            this._callbacks[ i ].call();
        }
    }
}
