module.exports = function(api) {
    if (api.env("production")) {
        return {
            presets: [
                "@babel/preset-env",
                ["minify", {
                    mangle: {
                        exclude: ["allianceHolder"]  // Not sure why this is an error
                    }
                }]
            ],
            comments: false
        };
    } else {
        return {
            presets: ["@babel/preset-env"]
        };
    }
};
