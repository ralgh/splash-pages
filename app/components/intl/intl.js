import _ from 'lodash';

export function getIntlMessage(messages, path) {
  if (!_.isString(path)) { throw new Error(`Path must be a string`); }
  if (!_.isPlainObject(messages) || _.isEmpty(messages)) {
    throw new Error(`Messages must an object`);
  }

  var message = path.split('.').reduce(function(obj, pathPart) {
    return obj[pathPart];
  }, messages);

  if (message === undefined) {
    throw new ReferenceError(`Could not find Intl message: ${path}`);
  }

  return message;
}
