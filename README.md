Run

```
git clone https://github.com/qvintrix/recipes-fb-database-initial.git
```

To configure the script to initialize the database of your Firebase project follow the instruction
1.  Put in the root directory JSON file which contains private key of your Firebase project
2.  In *main.js* file change line

```
const serviceAccount = require('./recipes-app-388be-firebase-adminsdk-lkgp5-183657e3ee.json');
```
to
```
const serviceAccount = require('./*name-of-your-file*.json');
```

3.  In *main.js* file in the following code

```
const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://recipes-app-388be.firebaseio.com"
});
```
  change the databaseUrl to point to the url of your Firebase project

Navigate to the root folder of the project and run

```
npm install
```
and after
```
node main.js
```

In Firebase project in Database tab check that your project contains *categories* collection with 4 categories and *recipes* collection with 10 recipes
