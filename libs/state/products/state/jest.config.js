module.exports = {
  name: 'state-products-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/products/state',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
