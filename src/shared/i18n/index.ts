import enJson from './en.json';

function t(key: string) {
  return Object.keys(enJson).find((jsonKey) => jsonKey === key);
}

export default t;
