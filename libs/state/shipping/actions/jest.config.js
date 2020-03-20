module.exports = {
  name: 'state-shipping-actions',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/shipping/actions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
