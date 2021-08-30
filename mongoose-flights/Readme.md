## tickets
- bonus of part 1
- show details

# setup
1. created a folder named : mongoose-flights
2. on the parent folder: run command
   `npx -e mongoose-flights`
3. CD to mongoose-flights:  
    * npm install
    * $ npm i mongoose
4. create folders/files:
    * renamed app.js to server.js & updated bin/wwww  line7: require ('../server')
    * created route/flights.js
    * created  controller/flights.js
    * created config/database.js
5. updated server:
    * `var = flightsRouter = require ('.routes/flights')`
    * `app.use('/flights', flightsRouter)`
    *
6. config/database.js:
    * const mongoose = reqire('mongoose')
    * connect to localDB
    * const db = mongoose.connection
7. update server.js: `require('./config/database');`


     