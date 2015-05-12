import { get } from '../helpers/e2e/request';

import { getAllPaths } from './routes';

describe('Automated E2E tests', () => {
  getAllPaths().forEach(function(path) {
    it(`returns a status 200 for ${path}`, (done) => {
      get(path).then(({ res }) => {
        expect(res.status).toEqual(200);
      }).then(done, done.fail);
    });
  });
});
