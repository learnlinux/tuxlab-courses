/// <reference path="./typings/index.d.ts" />

import { Lab as _Lab } from 'tuxlab-api/lab';
import * as _lodash from 'lodash';

declare global {
  const TuxLab: typeof _Lab;
  var Lab : _Lab;

  const _ : typeof _lodash;
}
