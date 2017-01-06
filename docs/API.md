# Using the API

## Backend

The backend for the API is using a library called [epilogue](https://github.com/dchester/epilogue).  We're setting up each model following epilogue syntax in model-boostrap.js

## Frontend

This is a homegrown library, so I'll cover it in more depth than the backend which is already well documented.  All functions are promises, async/await are perfectly acceptable to use here, or you can simply chain .then() to the end of any command.

### Basic API Calls

The API is designed to be restful, so some basic API calls exist:

* GET - ```API.get('/someurl', {key=>'val'});//gets /someurl?key=val```
* POST - ```API.post('/someurl', {key=>'val'}, {form:'data'});//posts form data to /someurl?key=val```
* PUT - ```API.post('/someurl', {key=>'val'}, {form:'data'});//puts form data to /someurl?key=val```
* DELETE - ```API.get('/someurl', {key=>'val'});//deletes /someurl?key=val```

Beyond this basic syntax, there is a more model based syntax we can use, which closely matches the epilogue commands exposed for a model.  To begin, we can define our front end API model access.

```const User = new API('users');```

Next, we can call one of the various methods to get one or more users.

* ```User.list();//returns list of all users```
* ```User.list({q:'baz'});//returns list of all users matching search query "baz"```
* ```User.create({name:"foo"});//creates new user with name "foo"```
* ```User.update(1, {name:"bar"});//updates user id 1 with new name "bar"```
* ```User.read(1);//gets user 1```
* ```User.delete(1);//deletes user 1```
