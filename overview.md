# Express Middleware

Live code steps

## Branch 1
 - Create a GitHub repo
 - `npm init` to create a package.json
<details>
<summary>What is Package.json?</summary>
<p>The package.json file is the heart of Node.js system. It is the manifest file of any Node.js project and contains the      metadata of the project.</p>
</details>
	 
    
    
- `npm install express` There is no need of '--save' since npm 5.0.0
- Create index.js file
- Console.log('It is a beautiful day')
- Run Node server with the command `Node index` 'It is a beautiful day' should appear in the console.
- Gitignore one liner : touch .gitignore && echo "node_modules/" >> .gitignore

## Branch 2
- Import Express: `const express = require('express');`
- Create app: `const app = express();`
- Install [Nodemon](https://www.npmjs.com/package/nodemon) `npm i -D nodemon`
<details>
<summary>What is Nodemon?</summary>
<p>Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.</p>
</details>
  
- App.listen:
```js
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
```
  
- Go to http://localhost:5000 > cannot get because we don't have any get
- Write `App.get`
```js
app.get('/', (req, res) => {
    res.send('It is a beautiful day')
});
```
- Go to http://localhost:5000

## Branch 3 - built-in Express middleware
- Res.sendFile
```js
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', index.html))
});
```
- Create public folder, create html file: mkdir / touch
- Copy-paste html boilerplate
- Go to localhost and inspect - notice that it is now displaying our html file.
- Set a static folder using an Express buil-in Middleware:
```js
app.use(express.static(path.join(__dirname, 'public')))
```
<details>
<summary>What is the difference between `app.get` and `app.use`?.json?</summary>
<p>TO DO</p>
</details>

## Branch 4 - creating a logger using moment

```js
let logger = function(req, res, next){
console.log('I am the logger');
next();
}
```

```js
app.use(logger)
```
- Let's try to log our url
```js
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();
	}
```
[Moment](https://momentjs.com/) allows to parse, validate, manipulate, and display dates and times in JavaScript.

- `npm install moment`

```js
const logger = (req, res, next) => {
console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
next();
}
```

## Branch 5
- Create a file with characters (see GitHub repo)
- Create a route to access all characters
- Create a route to access only one character

## Branch 6 - error handling middleware
```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke! ' + '\r\n' + err.message)
})
```
