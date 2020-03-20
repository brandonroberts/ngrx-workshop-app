module.exports = {
  name: 'state-products-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/products/state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
