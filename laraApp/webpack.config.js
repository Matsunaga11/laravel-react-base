const path = require("path");

module.exports = {
    mode: 'development',//webpack4以降はモード指定しなければいけない
    watchOptions: {
      poll: 1000
    },
    entry: './client/src/index.jsx',//エントリーポイント。連想配列にすることでappというキーに対してはindex.jsがentryとセットできる
    output: {
        path: path.resolve(__dirname, 'client/public'),
        // publicPath: '/src/', //ブラウザからバンドルにアクセスする際のパス
        filename: 'bundle.js', //バンドルのファイル名。[name]の部分にはentryで指定したキーが入る
        // library: ["com", "example"], //パッケージ名を配列で表現する
        // libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/, // babelを通さないディレクトリ
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      ]
    },
    devtool: 'inline-source-map',//ブラウザでのデバッグ用にソースマップを出力する
    cache: true,

    //webpack-dev-server用設定
    devServer: {
        open: true,//ブラウザを自動で開く
        openPage: "index.html",//自動で指定したページを開く
        contentBase: path.join(__dirname, 'client/public'),// HTML等コンテンツのルートディレクトリ
        watchContentBase: true,//コンテンツの変更監視をする
        // publicPath: '/src/',
        port: 3000, // ポート番号
        // hot: true,
        compress: true,
        historyApiFallback: true

    }

};
