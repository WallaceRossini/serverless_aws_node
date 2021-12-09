"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUtil = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
})(StatusCode || (StatusCode = {}));
var Result = /** @class */ (function () {
    function Result(statusCode, code, message, data) {
        this.statusCode = statusCode;
        this.code = code;
        this.message = message;
        this.data = data;
    }
    Result.prototype.bodyToString = function () {
        return {
            statusCode: this.statusCode,
            body: JSON.stringify({
                code: this.code,
                message: this.message,
                data: this.data
            })
        };
    };
    return Result;
}());
var MessageUtil = /** @class */ (function () {
    function MessageUtil() {
    }
    MessageUtil.success = function (data) {
        var result = new Result(StatusCode.success, 0, 'success', data);
        return result.bodyToString();
    };
    MessageUtil.error = function (code, message) {
        if (code === void 0) { code = 1000; }
        var result = new Result(StatusCode.success, code, message);
        console.log(result.bodyToString());
        return result.bodyToString();
    };
    return MessageUtil;
}());
exports.MessageUtil = MessageUtil;
//# sourceMappingURL=message.js.map