module.exports = function (eleventyConfig) {
    // Pass through assets and forms
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("forms");

    // Ignore the new Next.js project directory
    eleventyConfig.ignores.add("mkg-website");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
