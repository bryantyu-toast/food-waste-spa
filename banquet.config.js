module.exports = {
  template: 'food-waste-spa',
  version: '1',
  cssScope: 'data-food-waste',
  storybook: {
    stories: [
      'src/**/*.story.@(js|jsx|ts|tsx|mdx)',
      'packages/**/*.story.@(js|jsx|ts|tsx|mdx)'
    ],
    mocks: {
      location: './src/__mocks__',
      packages: ['banquet-runtime-modules']
    }
  }
}
