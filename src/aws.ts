import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3();

export const uploadFile = async (fileName: any, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    fileName = fileName.replaceAll("\\", "/");
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "deplyment-bucket",
        Key: fileName,
    }).promise();
    console.log(response);
}