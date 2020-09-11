# drixit-challenge by Juan Di Modugno

This solution is realized in order to be compliant with the Code Challenge provided by Drixit.

The structure of the solution consists of an Api and a Client.

The purpose of the following lines is to explain each component of the solution.

** API

This project was created using Node.js and Express.js.

The purpose of this api is to provide the data through the /statistics endpoint in order to be consumed by the client app.

### Running the project

#### `yarn start`

Runs the app in the development mode using Nodemon in order to restart the server if it's necessary after made some file change. 
By default, the app will be listening at [http://localhost:5000](http://localhost:5000).

** CLIENT

### Running the project

This project was created using React.js and Typescript by using Create React App.

[React.js documentation](https://reactjs.org/)
[Typescript documentation](https://www.typescriptlang.org/)

#### Prerequisites

##### ENV REACT_APP_API_URL

Before you are able to start the client, you'll need to specify an environment variable REACT_APP_API_URL in order to communicate with the Api.
In order to do that, you should create a file called '.env.development' at the root of the client folder and provide that info. Or you can just add "REACT_APP_API_URL=[path/to/api]" before the start command.

#### `yarn start`

Runs the app in the development mode using Nodemon in order to restart the server if it's necessary after made some file change. 
By default, the app will be listening at [http://localhost:3000](http://localhost:3000).

