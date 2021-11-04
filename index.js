import * as R from 'ramda';

const data = {
  HOME_TEST: 2,
  GAS_POWER: 1,
  POWER_GAS: 3,
};

const isCombiRamda = R.pipe(
  R.keys,
  R.map(R.toLower),
  R.indexOf('gas_power'),
  R.lte(0)
);

const isCombiNative = (data) =>
  Object.keys(data)
    .map((k) => k.toLowerCase())
    .filter((k) => k === 'gas_power').length >= 0;

console.log('RAMDA', isCombiRamda(data));
console.log('NATIVE', isCombiNative(data));
