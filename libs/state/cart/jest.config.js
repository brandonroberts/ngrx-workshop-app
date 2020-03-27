module.exports = {
  name: 'state-cart-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/cart',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
