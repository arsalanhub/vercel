import express from "express";
import { S3 } from "aws-sdk";

const s3 = new S3();
const app = express();

app.use("/*", async (req, res) => {
    const host = req.hostname;

    const id = host.split(".")[0];
    console.log(id);
    console.log(`dist/${id}/index.html`);
console.log(req.hostname, req.path);
    const contents = await s3.getObject({
        Bucket: "deplyment-bucket",
        Key: `dist/${id}/index.html`
    }).promise();
    
    // const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    res.set("Content-Type", "text/html");

    res.send(contents.Body);
})

app.listen(3001, () => {
    console.log("Listening on PORT 3001");
})