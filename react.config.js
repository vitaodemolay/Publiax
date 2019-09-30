'use strict';
module.exports = {
  source: 'src',
  outputPath: 'dist',
  port: 8081,
  host: 'localhost',
  nodeEnv: {
    BASE_API_URL: 'http://localhost:60047/'
  },
  htmlEnv: {
  },
  reactHotLoader: true
};