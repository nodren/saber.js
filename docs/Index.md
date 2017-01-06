# Documentation

The documentation, for what it is, will be sparse, because ideally you should know the tools used here, and use their documentation for answers to your questions.

## Libraries used

Well documented libraries everywhere, there's hardly any legitimate saber code to document, so let's begin by listing off libraries you'll need.

* Database - [Sequelize 4.0](http://docs.sequelizejs.com/en/latest/)
* Database Annotations - [sequelize-decorators](https://github.com/felixfbecker/sequelize-decorators)
* Restful API - [Epilogue](https://github.com/dchester/epilogue)
* Frontend - [React](https://facebook.github.io/react/)
* Server & Client side rounting - [react-router 4.0](https://react-router.now.sh/)

## Useful locations

* **client-bootstrap.jsx**

  where to define the starting point of your react application, tell us what the first react component is, or what html element to attach it to
* **public/index.html**

  In single page react, this is the html file typically served that react attaches to, and it's no different here.  We've provided a basic example.  It's definitely important to keep the %%content%% piece here for server side routing to work
* **bootstrap.js**

  This is where we start our application.  This file is meant to be altered to fit your needs, however ideally the work done here should be plenty enough to get you started for development.
* **model-bootstrap.js**

  This is where we define our epilogue configuration for the restful api.  Call in the models you want exposed on an API, following the documentation from epilogue
