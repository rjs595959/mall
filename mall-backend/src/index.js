// 이 파일에서만 no-global-assign ESLINT 옵션을 비활성화할 수 있습니다.
/* eslint-disable no-global-assign */
require = require('esm')(module);
module.exports = require('./main.js');
