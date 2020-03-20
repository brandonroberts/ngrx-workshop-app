module.exports = {
  name: 'products-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/products/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
