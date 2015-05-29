import includes from 'lodash/collection/includes';

export const blacklistedHosts = [
  'webcache.googleusercontent.com',
];

export function isHostBlacklisted(host) {
  return includes(blacklistedHosts, host);
}
