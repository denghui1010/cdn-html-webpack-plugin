<div align="right"><strong>🇨🇳中文</strong> | <strong>🇬🇧<a href="./README-en.md">English</a></strong></div>

## cdn-html-webpack-plugin

[![npm][npm]][npm-url]

### 功能

使生成的index.html文件使用cdn的域名地址来加载资源

### tips

本插件依赖于 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

### 使用

#### 1. 绝对路径模式，此模式下，index.html文件中的所有相对路径将被替换为配置的绝对路径

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

#### 2. base模式，此模式下，将在index.html的head中增加一个[base](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base)标签，浏览器随后将使用配置的基本url来解析所有的相对url

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

[npm]: https://img.shields.io/npm/v/cdn-html-webpack-plugin.svg
[npm-url]: https://www.npmjs.com/package/cdn-html-webpack-plugin
