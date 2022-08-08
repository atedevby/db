"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var port = 5000;
app.get("/", function (req, res) {
    res.send("Hello Vadim!");
});
app.listen(port, function () { return console.log("\u0417\u0430\u043F\u0443\u0448\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443 ".concat(port)); });
