import { createClient, commandOptions } from "redis";
const subscriber = createClient();
subscriber.connect();

async function main() {
    console.log("Subscriber is running!!");
    while(true) {
        const response = await subscriber.brPop(
            commandOptions({ isolated: true }),
            'build-queue',
            0
        )
        console.log(response);
    }
}

main();