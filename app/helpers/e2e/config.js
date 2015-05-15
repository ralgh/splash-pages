if (!process.env.PORT) {
  throw new Error('Error: E2E tests must be run with a PORT environment var specified');
}
export const BASE_URL = 'http://localhost:' + process.env.PORT;
