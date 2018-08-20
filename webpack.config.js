const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module:{
        rules:[
            {
                test: /\.(ttf|woff2|eot|woff|png|jpg|gif)$/,
                loader:'url-loader',
                options: {
                    limit: 50000
                }
                    
                
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins:[htmlPlugin]
};
