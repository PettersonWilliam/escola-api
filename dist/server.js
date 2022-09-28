"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = 3001;

_app2.default.listen(port, () => {
  console.log();
  console.log(`escutarndo na porta ${port}`);
  console.log(`CMD + Clique em http://localhost:${port}`);
});
