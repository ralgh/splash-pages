import isString from 'lodash/lang/isString';
import isPlainObject from 'lodash/lang/isPlainObject';
import isEmpty from 'lodash/lang/isEmpty';

export function getMessage(messages, path) {
  if (!isString(path)) { throw new TypeError(`Path must be a string`); }
  if (!isPlainObject(messages) || isEmpty(messages)) {
    throw new TypeError(`Messages must an object`);
  }

  let message;
  try {
    message = path.split('.').reduce(function(obj, pathPart) {
      return obj[pathPart];
    }, messages);
  } finally {
    if (message === undefined) {
      throw new ReferenceError(`Could not find Intl message: ${path}`);
    }
  }

  return message;
}
