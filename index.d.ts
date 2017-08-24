/// <reference path="./typings/index.d.ts" />

import { Lab as _Lab } from 'tuxlab-api/lab';

declare global {
  const TuxLab: typeof _Lab;
  var Lab : _Lab;
}
