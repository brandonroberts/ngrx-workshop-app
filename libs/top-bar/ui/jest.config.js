module.exports = {
  name: 'top-bar-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/top-bar/ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
