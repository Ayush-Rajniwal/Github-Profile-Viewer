const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@components": "src/app/components",
        "@images": "src/assets/images",
        "@containers": "src/app/containers",
        "@redux": "src/app/redux",
    })(config);

    return config;
};
