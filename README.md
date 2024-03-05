Application architecture 
![image](https://github.com/arsalanhub/vercel/assets/53657473/0defddca-0aec-4b5e-8df7-db7674bcf662)

Local Setup
1. Set the AWS credentials in `C:\Users\Account\.aws\credentials` file
2. Run the redis with the `yaml` file using `docker-compose -f redis.yaml up -d` command
3. Interact with redis-cli using `docker-compose -f redis.yaml exec redis redis-cli`
4. Build the services using `npx tsc -b`
5. Start the services `node dist/index.js`
6. Make sure `deplyment-bucket` named bucket exists for this all to work.
7. For deploying the project use `http://localhost:3000/deploy` as `POST` with request body as `"repoUrl": "https://github.com/github_username/meme-gen"`
8. Use the id return from the above request and hit the link with id as `http://84t9f.localhost:3001/`

Note: This project assume `build` is your output directory after running `npm run build`.
