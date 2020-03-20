module.exports = {
  name: 'state-products-actions',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/products/actions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
