# Bulletin Board API

A part of the Socar Test. 

Developed in Nodejs , Sequelize.js & Express and MySQL this repo contains the api server


## Installation

1. You can download or clone this git repository:

```bash
git clone https://github.com/irshaam/socar-bulletin-server.git server
```

2. Next, you must go to the application folder:
```bash
cd server
```

3. Install the project dependencies via 
npm 
```bash
npm install
```
or yarn
```bash
yarn start
```

4. Update config/config.json file with database credentials

5. Run migrations 
 
```bash
sequelize db:migrate
```

6. Run seeds for some initial data  
```bash
sequelize db:seed:all
```


7. Run the application using npm or yarn
```bash
npm start
```
or yarn
```bash
yarn start
```
