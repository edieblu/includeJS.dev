---

path: '/mongodb-intro'
date: "2020-03-11"
title: "My notes from the MongoDB intro on FEM"
tags: ['fem', 'courses', 'database', 'mongodb']
excerpt: "My notes from the MongoDB intro on FEM"

---

1. **Setup**
Course repo: https://github.com/FrontendMasters/intro-mongo-db

Install mongoDB: https://docs.mongodb.com/manual/administration/install-community/

To start the Mongo Database server, run `mongod` command.
Then, to open the interactive shell, typ: `mongo`
To see existing databases run: `show dbs`
To switch to a databse, and create a new one on the fly if the db doesn't exist yet: `use [db name]`
To see which collections ("tables") you have: `show collections`
Download the mongodb GUI called Compass here: https://www.mongodb.com/download-center/compass

Use schemas to validate your data and stay consitent.

Use Mongoose to connect your node.js application to a mongoDB database: https://mongoosejs.com/
