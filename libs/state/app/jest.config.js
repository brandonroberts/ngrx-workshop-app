module.exports = {
  name: 'state-app-actions',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/app/actions',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
