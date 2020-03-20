module.exports = {
  name: 'top-bar-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/top-bar/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
