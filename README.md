<div align="right"><strong>🇨🇳<a href="./README-cn.md">中文</a></strong> | <strong>🇬🇧English</strong></div>

## cdn-html-webpack-plugin

[![npm][npm]][npm-url]

### Function

Make the generated index.html file use the cdn host to load resources.

### Tips

This plugin depends on [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

### Use

#### 1. Absolute path mode. All relative paths in the index.html file will be replaced with the configured absolute path.

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

#### 2. Base tag mode. A [&lt;base&gt;](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base) tag will be injected on the top of the &lt;head&gt; tag in the index.html file. Then the browser will use the configured path to resolve all relative paths.

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
