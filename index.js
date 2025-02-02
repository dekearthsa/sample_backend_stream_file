const fs = require("fs");
const readST = fs.createReadStream("./data.txt",
    {
        encoding: "utf-8", //  ถ้าลบออกข้อมูลข้อตวามใน data.txt จะกลายเป็น Hex 
        highWaterMark: 8 * 1024  // ปกติจะแบ่งเป็น 64kg เราสามารถกำหนดค่าได้ ในเครสนี้แบ่งเป็น 8 kg ก็เลยเอา 8 x 1024 เพื่อแปลง kg เป็น byte
    }
);

readST.on("data", (ck) => {
    // ตรงนี้จะใช้จัดการพวกข้อมูลที่ถูกแบ่งออกมา // 
    console.log(Buffer.byteLength(ck, "utf-8") + "byte" + Buffer.byteLength(ck, "utf-8")/1024+"kb") 
    console.log("---------------")
    console.log(ck)
    console.log("---------------\n")
});