<div align="right"><strong>🇨🇳中文</strong> | <strong>🇬🇧<a href="./README.md">English</a></strong></div>

# cdn-html-webpack-plugin

[![npm][npm]][npm-url]
[![node][node]][node-url]

## 功能

使生成的index.html文件使用cdn域名地址来加载资源

## 依赖

本插件依赖于 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

## 安装

```bash
npm install cdn-html-webpack-plugin --save-dev
```

## 使用

#### 1. 绝对路径模式。此模式下，index.html文件中的所有相对路径将被替换为配置的绝对路径

```javascript
const CdnHtmlWebpackPlugin = require("cdn-html-webpack-plugin");

new HtmlWebpackPlugin({
    cdn: {
        cdnpath: "http://cdnhost"
    }
}),
new CdnHtmlWebpackPlugin()
```

in

```html
<!DOCTYPE html>
<html>
    <head>
        <link href=./static/css/app.a55284ea60abd800fe5c0239b78ec1d4.css rel=stylesheet>
    </head>
    <body>
        <div id=app></div>
        <script type=text/javascript src=./static/js/manifest.3ad1d5771e9b13dbdad2.js> </script>
    </body> 
</html>
```
out

```html
<!DOCTYPE html>
<html>
    <head>
        <link href=http://cdnhost/static/css/app.a55284ea60abd800fe5c0239b78ec1d4.css rel=stylesheet>
    </head>
    <body>
        <div id=app></div>
        <script type=text/javascript src=http://cdnhost/static/js/manifest.3ad1d5771e9b13dbdad2.js> </script>
    </body> 
</html>
```

#### 2. base标签模式。此模式下，将在index.html的&lt;head&gt;标签的顶部增加一个[&lt;base&gt;](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base)标签，浏览器随后将使用配置的路径来解析所有的相对路径

```javascript
const CdnHtmlWebpackPlugin = require("cdn-html-webpack-plugin");

new HtmlWebpackPlugin({
    cdn: {
        cdnbase: "http://cdnhost"
    }
}),
new CdnHtmlWebpackPlugin()
```

in

```html
<!DOCTYPE html>
<html>
    <head>
        <link href=./static/css/app.a55284ea60abd800fe5c0239b78ec1d4.css rel=stylesheet>
    </head>
    <body>
        <div id=app></div>
        <script type=text/javascript src=./static/js/manifest.3ad1d5771e9b13dbdad2.js> </script>
    </body> 
</html>
```
out

```html
<!DOCTYPE html>
<html>
    <head>
        <base src="http://cdnhost"> </base>
        <link href=./static/css/app.a55284ea60abd800fe5c0239b78ec1d4.css rel=stylesheet>
    </head>
    <body>
        <div id=app></div>
        <script type=text/javascript src=./static/js/manifest.3ad1d5771e9b13dbdad2.js> </script>
    </body> 
</html>
```

## License
[MIT](https://opensource.org/licenses/mit-license.php)


[npm]: https://img.shields.io/npm/v/cdn-html-webpack-plugin.svg
[npm-url]: https://www.npmjs.com/package/cdn-html-webpack-plugin

[node]: https://img.shields.io/node/v/cdn-html-webpack-plugin.svg
[node-url]: https://nodejs.org

