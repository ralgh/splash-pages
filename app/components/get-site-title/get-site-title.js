import {getMessage} from '../intl/intl';

export default function getSiteTitle({ messages, routeName, config }) {
  return getMessage(messages, `${routeName}.title`) + ` - ${config.siteName}`;
}
