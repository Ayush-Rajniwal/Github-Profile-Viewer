const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, '../src/app/components/'),
            '@images': path.resolve(__dirname, '../src/assets/images'),
            '@containers': path.resolve(__dirname, '../src/app/containers'),
            '@redux': path.resolve(__dirname, '../src/app/redux'),
            '@src': path.resolve(__dirname, '../src'),
            '@styles': path.resolve(__dirname, '../src/styles'),
            '@provider': path.resolve(__dirname, '../src/providers'),
            '@locales': path.resolve(__dirname, '../src/locales'),
            '@constants': path.resolve(__dirname, '../src/constants'),
        },
    },
};
