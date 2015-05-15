import nock from 'nock';
import fs from 'fs';
import rimraf from 'rimraf';
import mkdirPCallback from 'mkdirp';
import { fetchPage, writePage } from './builder';
import denodeify from 'denodeify';

const readdir = denodeify(fs.readdir);
const readFile = denodeify(fs.readFile);
const rmdir = denodeify(rimraf);
const mkdirP = denodeify(mkdirPCallback);

describe('fetchPage', () => {
  const host = 'http://localhost:1234';

  beforeEach(() => {
    nock(host)
    .get('/')
    .reply(200, '<html>home</html>')
    .get('/about')
    .reply(200, '<html>about</html>');
  });

  afterEach(nock.cleanAll.bind(nock));

  it('resolves [url, body] tuple', (done) => {
    const path = '/about';

    fetchPage(host, path)
      .then(function([url, body]) {
        expect(url).toEqual(`${host}/about`);
        expect(body).toEqual('<html>about</html>');
      })
      .then(done, done.fail);
  });
});

describe('writePage', () => {
  beforeEach((done) => {
    const dirName = '.tmp/writePage';

    rmdir(dirName)
      .then(() => mkdirP(dirName))
      .then(done, done.fail);
  });

  it('writes the pages', (done) => {
    const url = 'https://localhost/about';
    const content = 'about content';
    const baseDir = '.tmp/writePage';

    writePage(baseDir, [url, content])
      .then(() => readdir(baseDir))
      .then(function(files) {
        expect(files.length).toEqual(1);
        return readFile(`${baseDir}/about/index.html`, 'utf8');
      })
      .then((data) => expect(data).toEqual('about content'))
      .then(done, done.fail);
  });
});
