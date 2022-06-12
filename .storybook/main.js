module.exports = {
    stories: ['../**/*.stories.mdx','../**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: 'storybook-addon-sass-postcss',
            options: {
                rule: {
                    test: /\.(scss|sass)$/i,
                },
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5'
    }
}