const path = require( "path" );
const root = path.resolve( __dirname );



module.exports = ( env ) => {
    return {
        mode: "development",


        devServer: {
            contentBase: path.resolve( root, "test" ),
            compress: true,
            port: 9999,
        },


        entry: {
            "test": path.resolve( root, "test/test.js" ),
        },


        output: {
            path: path.resolve( root, "test/dist" ),
            filename: "test.js",
        },


        module: {
            rules: [
                {
                    test: /\.js/,
                    loader: "eslint-loader",
                    enforce: "pre",
                },
                {
                    test: /\.js/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"],
                            },
                        },
                    ],
                },
            ],
        },
    };
};
