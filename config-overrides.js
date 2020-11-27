const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@components': 'src/app/components',
        '@images': 'src/assets/images',
        '@containers': 'src/app/containers',
        '@redux': 'src/app/redux',
        '@src': 'src',
        '@styles': 'src/styles',
        '@provider': 'src/providers',
        '@locales': 'src/locales',
        '@constants': 'src/constants',
        '@services': 'src/services',
    })(config);

    return config;
};
