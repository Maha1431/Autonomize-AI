"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./Config/database"));
const app_1 = require("./app");
const PORT = process.env.PORT || 4000;
(0, database_1.default)()
    .then(() => {
    app_1.app.listen(PORT, () => {
        console.log(`Server is running at port : http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.log(`MongoDB connection Failed: ${err}`);
});
