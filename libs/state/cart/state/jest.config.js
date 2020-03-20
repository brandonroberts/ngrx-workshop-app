module.exports = {
  name: 'state-cart-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/cart/state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
