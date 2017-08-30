/// <reference path="./typings/index.d.ts" />

import { Lab as _Lab } from 'tuxlab-api/lab';
import * as _lodash from 'lodash';
import * as _rp from 'request-promise';

declare global {
  const TuxLab: typeof _Lab;
  var Lab : _Lab;

  const _ : typeof _lodash;
  const rp : typeof _rp;
}
