module.exports = {
  name: 'cart-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cart/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
