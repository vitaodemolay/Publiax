'use strict';
module.exports = {
  source: 'src',
  outputPath: 'dist',
  port: 3000,
  host: 'localhost',
  nodeEnv: {
    BASE_API_URL: 'http://www.portalwinn.com.br:8083/backend/',
    REACT_APP_VERSION: '0.1.1'
  },
  htmlEnv: {
  },
  reactHotLoader: true
};
