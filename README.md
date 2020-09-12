# drixit-challenge by Juan Di Modugno

This solution is realized in order to be compliant with the Code Challenge provided by Drixit.

The structure of the solution consists of an Api and a Client.

The purpose of the following lines is to explain each component of the solution.

## API

This project was created using Node.js and Express.js.

The purpose of this api is to provide the data through the /statistics endpoint in order to be consumed by the client app.

### Running the project

#### `yarn start`

Runs the app in the development mode using Nodemon in order to restart the server if it's necessary after made some file change. 
By default, the app will be listening at [http://localhost:5000](http://localhost:5000).

#### `yarn start:mongo`

You can also provide an MongoDB url in order to consume from an external data source.
Before executing this command, you should populate the database and set the DB_ENDPOINT environment variable. [by default is: DB_ENDPOINT=mongodb://127.0.0.1:27017]

db: 'drixit'
collection: 'statistics'

You can get a MongoDB container at [https://hub.docker.com/_/mongo](https://hub.docker.com/_/mongo)

##### MONGO CONTAINER

In order to create the container you need to have docker installed.

``
  docker pull mongo
  docker run --expose 27017 --name mongodb -p 27017:27017 mongo
``

##### MONGO TEST DATA

Execute this command in order to access the container.
``docker exec -it mongodb /bin/sh; exit``

``mongo``

``use drixit``

``db.statistics.save([{
    "username": "Delphinia",
    "name": "Delphinia",
    "acc6": 95,
    "acc6%": 20.22,
    "acc7": 40,
    "acc7%": 44.14,
    "acc8": 59,
    "acc8%": 70.96,
    "bar1": 43,
    "bar2": 61,
    "bar3": 44
  }, {
    "username": "Alexandros",
    "name": "Alexandros",
    "acc6": 148,
    "acc6%": 96.53,
    "acc7": 70,
    "acc7%": 95.68,
    "acc8": 65,
    "acc8%": 82.94,
    "bar1": 4,
    "bar2": 1,
    "bar3": 93
  }, {
    "username": "Harland",
    "name": "Harland",
    "acc6": 89,
    "acc6%": 49.22,
    "acc7": 51,
    "acc7%": 94.56,
    "acc8": 64,
    "acc8%": 37.03,
    "bar1": 35,
    "bar2": 51,
    "bar3": 2
  }, {
    "username": "Moria",
    "name": "Moria",
    "acc6": 106,
    "acc6%": 71.15,
    "acc7": 56,
    "acc7%": 30.24,
    "acc8": 37,
    "acc8%": 83.81,
    "bar1": 54,
    "bar2": 33,
    "bar3": 16
  }, {
    "username": "Dalia",
    "name": "Dalia",
    "acc6": 148,
    "acc6%": 67.39,
    "acc7": 88,
    "acc7%": 9.28,
    "acc8": 40,
    "acc8%": 79.28,
    "bar1": 96,
    "bar2": 88,
    "bar3": 55
  }, {
    "username": "Boote",
    "name": "Boote",
    "acc6": 150,
    "acc6%": 94.5,
    "acc7": 78,
    "acc7%": 10.94,
    "acc8": 25,
    "acc8%": 81.6,
    "bar1": 5,
    "bar2": 26,
    "bar3": 41
  }, {
    "username": "Rhodie",
    "name": "Rhodie",
    "acc6": 40,
    "acc6%": 97.38,
    "acc7": 49,
    "acc7%": 73.28,
    "acc8": 43,
    "acc8%": 64.81,
    "bar1": 52,
    "bar2": 34,
    "bar3": 67
  }, {
    "username": "Milli",
    "name": "Milli",
    "acc6": 40,
    "acc6%": 21.09,
    "acc7": 52,
    "acc7%": 71.59,
    "acc8": 35,
    "acc8%": 34.31,
    "bar1": 20,
    "bar2": 93,
    "bar3": 72
  }, {
    "username": "Cary",
    "name": "Cary",
    "acc6": 142,
    "acc6%": 90.55,
    "acc7": 97,
    "acc7%": 19.81,
    "acc8": 76,
    "acc8%": 18.96,
    "bar1": 30,
    "bar2": 13,
    "bar3": 57
  }, {
    "username": "Abran",
    "name": "Abran",
    "acc6": 131,
    "acc6%": 18.64,
    "acc7": 27,
    "acc7%": 92.05,
    "acc8": 79,
    "acc8%": 38.49,
    "bar1": 87,
    "bar2": 83,
    "bar3": 53
  }])``

## CLIENT

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

