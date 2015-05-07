import _ from 'lodash';

export function getMessage(messages, path) {
  if (!_.isString(path)) { throw new TypeError(`Path must be a string`); }
  if (!_.isPlainObject(messages) || _.isEmpty(messages)) {
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
