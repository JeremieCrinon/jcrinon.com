module.exports = {
    map: {
        inline: true
    },
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-preset-env')({
            stage: 2
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};