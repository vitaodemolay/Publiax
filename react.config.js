'use strict';
module.exports = {
  source: 'src',
  outputPath: 'dist',
  port: 8081,
  host: 'localhost',
  nodeEnv: {
    BASE_API_URL: 'http://192.168.0.13:45455/'
  },
  htmlEnv: {
  },
  reactHotLoader: true
};