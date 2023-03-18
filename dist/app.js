"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// read file
try {
    const file = fs_1.default.readFileSync("./assets/input.txt", "utf-8");
    const json = JSON.parse(file);
    let i = 1;
    const stream = fs_1.default.createWriteStream("./assets/sprintNotes.txt", {
        flags: "a",
    });
    for (const key in json) {
        const info = `${i}. ${json[key][0]}. (I${json[key][2]}).\n`;
        stream.write(info);
        i++;
    }
    stream.end();
}
catch (err) {
    console.error(err);
}
//# sourceMappingURL=app.js.map