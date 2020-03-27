module.exports = {
  name: 'state-products-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/products',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
