# ChatBox

Its a messaging app

## Setup

1.create a .env file:

```YAMl

DB_CONNECTION_STRING=mongodb://localhost:27017 # Replace this with your connection string
API_PORT=3002
API_HOST=127.0.0.1
SECRET_KEY=Replace_this_with_a_random_string

```

2.Install node packages:

```bash
npm install
cd Chatbox-frontend
npm install # yes, you need install npm packages for frontend seperately

```

## Usage

run npm run start and it will start both the api and react app concurrently.

```bash

npm run start

```

you should see something like this if setup was successfull

```bash

❯ npm run start

> chatbox-mjs@1.0.0 start
> concurrently "nodemon index.js" "cd Chatbox-Frontend && npm run dev"

[0] [nodemon] 3.0.1
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,cjs,json
[0] [nodemon] starting `node index.js`
[1]
[1] > chatbox-frontend@0.0.0 dev
[1] > vite
[1]
[0] [nodemon] restarting due to changes...
[0] [nodemon] starting `node index.js`
[1]
[1]   VITE v5.0.5  ready in 286 ms
[1]
[1]   ➜  Local:   http://127.0.0.1:5173/
[0] Server is running on http://127.0.0.1:3002
[0] Connected to MongoDB

```
