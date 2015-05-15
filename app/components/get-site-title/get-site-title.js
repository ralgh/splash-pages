import {getMessage} from '../intl/intl';

export default function getSiteTitle(context) {
  return `${getMessage(context.messages, `${context.routeName}.title`)} - ${ context.config.siteName}`;
}
