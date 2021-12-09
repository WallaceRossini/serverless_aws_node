"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
var productService_1 = require("./services/productService");
require('dotenv').config();
var productService = new productService_1.ProductService();
var show = function (event) { return productService.show(); };
exports.show = show;
//# sourceMappingURL=handler.js.map