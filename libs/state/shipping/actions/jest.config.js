module.exports = {
  name: 'state-shipping-actions',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/state/shipping/actions',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
