module.exports = {
  name: 'state-shipping-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/shipping/state',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
