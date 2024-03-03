import { createClient, commandOptions } from "redis";
import { copyFinalDist, downloadS3Folder } from "./aws";
import { buildProject } from "./utils";
const subscriber = createClient();
subscriber.connect();

async function main() {
    console.log("Subscriber is running!!");
    while(true) {
        const res = await subscriber.brPop(
            commandOptions({ isolated: true }),
            'build-queue',
            0
        )
        console.log(res);
        // @ts-ignore
        var id = res.element;
        await downloadS3Folder(`output/${id}`);
        await buildProject(id);
        await copyFinalDist(id);
    }
}

main();