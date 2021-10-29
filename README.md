# express-vue-firebase-template
A repository for barebones Typescript + Express + Petite Vue + Firebase Functions starter template

## Run project
From the terminal or command line, launch the application.


``npm run start`` 


The TypeScript compiler does the work of generating the JavaScript files and copies them to the dist folder. 

## Includes tslint library 
Instructs TypeScript how to lint your code, to alert you to potential problems in your code beyond syntax issues.


Use ``npm run build`` to start TSLint and Typescript compiler without starting Node.js server.


## Petite-Vue library
https://github.com/vuejs/petite-vue
petite-vue can be used without a build step. Load it from a CDN.

## Use Firebase for database and User authentication if needed
### Using firebase-CLI to make things easier

https://firebase.google.com/docs/cli#setup_update_cli

Install firebase-cli globally. 


``npm install -g firebase-tools``

- Log into Firebase using your Google account by running the following command:


``firebase login``


``firebase projects:list``

Run the following command to initialize Firebase functions:


``firebase init functions``



