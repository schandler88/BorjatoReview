import AmbulatoryLayer from './AmbulatoryLayer';
import TestLayer from './TestLayer';
// [hygen] Import layers

export const getLayers = () => {
  return [
    AmbulatoryLayer(),
    TestLayer(),
    // [hygen] Add layer
  ];
};
