'use strict';
module.exports = {
  source: 'src',
  outputPath: 'dist',
  port: 3000,
  host: 'localhost',
  nodeEnv: {
    // BASE_API_URL: 'http://192.168.0.105:45455/',
    // BASE_API_URL: 'http://www.portalwinn.com.br:8083/backend/',
     BASE_API_URL: 'https://publiax-web.conveyor.cloud/',
    REACT_APP_VERSION: '0.1.1'
  },
  htmlEnv: {
  },
  reactHotLoader: true
};
