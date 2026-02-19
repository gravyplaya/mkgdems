module.exports = function (eleventyConfig) {
    // Pass through assets and forms
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("forms");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
