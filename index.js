let HtmlWebpackPlugin;
try {
    // eslint-disable-next-line global-require
    HtmlWebpackPlugin = require("html-webpack-plugin");
} catch (e) {
    if (!(e instanceof Error) || e.code !== "MODULE_NOT_FOUND") {
        throw e;
    }
}

function CdnHtmlWebpackPlugin(options) {
    this.options = options;
}

function insertLinksIntoHead({ html, base }) {
    if (html.includes("<head>")) {
        // If a valid closing </head> is found, insert the new <link>s right before it.
        return html.replace("<head>", "<head>" + base);
    }
    throw new Error(`The HTML provided did not contain a <head>:\n\n${html}`);
}

function proccess(htmlPluginData, compileCb) {
    const html = htmlPluginData.html;
    const outputName = htmlPluginData.outputName;
    // 是否开启cdnOption插件
    const cdnOption = htmlPluginData.plugin.options.cdn;
    if (cdnOption) {
        if (cdnOption.cdnpath) {
            htmlPluginData.html = html.replace(/\.\//g, cdnOption.cdnpath);
        } else if (cdnOption.cdnbase) {
            htmlPluginData.html = insertLinksIntoHead({ html, base: `<base href="${cdnOption.cdnbase}"></base>` });
        }
    }
    return compileCb(null, htmlPluginData);
}

CdnHtmlWebpackPlugin.prototype.apply = function(compiler) {
    if (compiler.hooks) {
        compiler.hooks.compilation.tap("CdnHtmlWebpackPlugin", compilation => {
            if (HtmlWebpackPlugin && HtmlWebpackPlugin.getHooks) {
                // HTMLWebpackPlugin@4
                HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync("CdnHtmlWebpackPlugin", proccess.bind(this));
            } else if (compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration && compilation.hooks.htmlWebpackPluginAfterHtmlProcessing) {
                // HTMLWebpackPlugin@3
                // 相当于beforeEmit
                compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync("CdnHtmlWebpackPlugin", proccess.bind(this));
            }
        });
    } else {
        compiler.plugin("compilation", compilation => {
            // 相当于beforeEmit
            compilation.plugin("html-webpack-plugin-after-html-processing", proccess.bind(this));
        });
    }
};
module.exports = CdnHtmlWebpackPlugin;
