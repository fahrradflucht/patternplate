'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reactRedux = require('react-redux');

const _item = require('../selectors/item');

const _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(withId);


function withId(state) {
  const item = (0, _item2.default)(state);
  return {
    id: item ? item.id : null
  };
}