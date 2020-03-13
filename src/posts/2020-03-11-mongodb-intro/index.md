---

path: '/mongodb-intro'
date: "2020-03-11"
title: "My notes from the MongoDB intro on FEM"
tags: ['fem', 'courses', 'database', 'mongodb']
excerpt: "My notes from the MongoDB intro on FEM"

---

My notes on [Introduction to MongoDb](https://frontendmasters.com/courses/mongodb/) by [Scott Moss](https://twitter.com/scotups), available on FrontEndMasters.

**1. Setup**

Get the course [github repo](https://github.com/FrontendMasters/intro-mongo-db) and install [mongoDB](https://docs.mongodb.com/manual/administration/install-community/).

- To start the Mongo Database server, run `mongod` command.

- To open the interactive shell, type: `mongo`

- To see existing databases run: `show dbs`

The following three dbs are created by mongo on install: `admin`, `config`, `local`.

- To switch to a database, and create a new one on the fly (if the db doesn't exist yet): `use [db name]`

- To see collections ("tables") in a db: `show collections`

Download the mongodb GUI to interact with mongo data ([Compass](https://www.mongodb.com/download-center/compass)).

Use schemas to validate your data and stay consistent. 👍

Random: MongoDB is mostly written in C++, but other languages too.


**2. MongoDB and Mongoose**

Use [Mongoose](https://mongoosejs.com/) to connect your `node.js` application to a mongoDB database.

Example code for connection:
```
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connect = (url) => mongoose.connect(url, {
  useNewUrlParser: true
})

module.exports = connect
```

- The default `mongodb` port is: port 27017.


**3. Schemas, models, collections**

Creating a new schema:
```
new mongoose.Schema({

})
```

Use built-in JS primitives as typings. 👍

- Once you have a schema, you need to convert it into a mongodb model and that into a collection: `mongoose.model([collectionName], [schemaName])`

Keep the collection names singular and lowercase (mongo will pluralize it). Keep the Model names singular, but uppercase. 👍

**4. Queries**

Use `async/await` for mongodb operations. 👍

- `Model.create({})` - to insert stuff into the collection a.k.a. creating a mongodb document.

- `_id` is created by default for any mongodb document. Its value is an ObjectId. (ObjectId comes from BSON and is an object representation of a unique id.)

Mongoose documents are not regular JavaScript objects, they are objects from a database with methods (these might be innumerable - you can't explicitly log them). When you are operating on that data, you'll probably convert them to JSON objects.

- `Model.find({})` returns a list of result. If you pass in an empty object it will return all (like `*`).

MongoDB doesn't return errors if things don't exist, it just returns `null`. 🤔

Check out other [collection methods](https://docs.mongodb.com/manual/reference/method/js-collection/).

- You can add timestamps to the schema if you pass `{ timestamps: true}` as the second argument.

Queries return a query object. To signal that you're done with a modal query, you attach `exec()` to the end of it.

```
const getUserById = (id) => {
  return User.findById(id)
    .exec()
}
```

With update queries you need to add a second argument to actually return the updated object.

```
const updateUserById = (id, update) => {
  return User.findByIdAndUpdate(id, update, {new: true}).exec()
}
```

**5. Associations**
Reference the school model on the student schema:

```
school: {
  type: moongose.Schema.Types.ObjectId,
  ref: 'school'
}
```

- Without a collection as an argument `.populate()` will inject (hydrate) the corresponding values and return the result as an object.

"Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s)."


You can also add query filters:

```
const postByContentLength = (maxContentLength, minContentLength) => {
  return Post.find({
    contentLength: {$lt: maxContentLength, $gt: minContentLength}
  })
    .exec()
}
```

Add related posts to a post:
```
const addSimilarPosts = (postId, similarPosts) => {
  return Post.findByIdAndUpdate(postId, {
    $push: {similarPosts: {$each: similarPosts}}
  },{new: true})
}
```

**6. Virtuals**
- A virtual is a field that doesn't exist in a database, but gets created at runtime. You can `get()` or `set()` virtuals. `._id` is a built-in virtual.

```
school.virtual('staffCount').get(function () {
  return this.staff.length
})
```

**7. Hooks (middleware)**

- You can add `eventListeners` to any operation that happens (either before - `pre` or after - `post`, syn or async - any function passing more than one argument).

```
orgSchema.post('remove', async (doc, next) => {
  await Project.remove({org: doc._id}).exec()
  next()
})
```

Use `next()` when you have more than one hook. 👍

**8. Compound Index**
A compound (unique) index limits the scope of uniqueness to a particular collection:

```
projectSchema.index({
  org: 1,
  name: 1
}, {unique: true})
```

**9. REST API**

Go to an express route, perform a db operation and send back a response.

```
app.get('/todo/:id', async (req, res) => {
  const todoId = req.params.id
  const todo = await Todo.findById(id).exec()
  res.status(200).json(todo)
})
```

- You can use `skip()` and `limit()` methods for pagination.

- Return pure JSOn from your operations by appending `lean()`, alternatively you can do the `.toJSON()` on the response itself.

Make sure to wrap any `async/await` in a `try` and `catch` statement. 👍

Transactions: that puts all the operations in a queue. "Transactions let you execute multiple operations in isolation and potentially undo all the operations if one of them fails."

**10. In Conclusion**

I'm relatively new to MongoDB, but this course was a nice overview on how to query, validate and model data in mongoDB. Also, Scott Moss is "legit" 😎.