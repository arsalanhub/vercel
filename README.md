Local Setup
1. Set the AWS credentials in `C:\Users\Account\.aws\credentials` file
2. Run the redis with the `yaml` file using `docker-compose -f redis.yaml up -d` command
3. Interact with redis-cli using `docker-compose -f redis.yaml exec redis redis-cli`
4. Build the services using `npx tsc -b`
5. Start the services `node dist/index.js`
6. Make sure `deplyment-bucket` named bucket exists for this all to work.