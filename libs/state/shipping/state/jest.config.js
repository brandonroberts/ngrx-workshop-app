module.exports = {
  name: 'state-shipping-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/shipping/state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
