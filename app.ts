import fs from "fs";

// read file

try {
  const file = fs.readFileSync("./assets/input.txt", "utf-8");
  const json = JSON.parse(file);
  let i = 1;
  const stream = fs.createWriteStream("./assets/sprintNotes.txt", {
    flags: "a",
  });
  for (const key in json) {
    const info = `${i}. ${json[key][0]}. (I${json[key][2]}).\n`;
    stream.write(info);
    i++;
  }
  stream.end();
} catch (err) {
  console.error(err);
}
