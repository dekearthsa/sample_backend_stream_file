const fs = require("fs");
const readST = fs.createReadStream("./data.txt",
    {
        encoding: "utf-8",
        highWaterMark: 8 * 1024
    }
);
readST.on("data",(ck)=>{
    console.log(Buffer.byteLength(ck, "utf-8") + "byte" + Buffer.byteLength(ck, "utf-8") / 1024 + "kb")
    console.log("---------------------")
    console.log(ck)
    console.log("---------------------\n")
})

readST.on("close",()=>{})