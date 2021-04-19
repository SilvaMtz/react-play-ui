import { v4 as uuidv4 } from "uuid";

export function htmlIdGenerator(idPrefix: string = '') {
  const staticUuid = uuidv4();
  return (idSuffix: string = '') => {
    const prefix = `${idPrefix}${idPrefix !== '' ? '_' : 'i'}`;
    const suffix = idSuffix ? `_${idSuffix}` : '';
    return `${prefix}${suffix ? staticUuid : uuidv4()}${suffix}`;
  };
}