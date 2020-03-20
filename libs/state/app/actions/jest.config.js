module.exports = {
  name: 'state-app-actions',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/app/actions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
