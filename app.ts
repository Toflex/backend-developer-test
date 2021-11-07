import express, { Request, Response} from 'express';
const app = express();

import config = require('config');
import redis = require('redis')
import session = require('express-session')
import admin = require("./admin/routes");
import user = require("./users/routes");
import publicRoute = require("./public/routes");
import apiResponse = require("./utillity/apiResponse");
import apiResponseCode = require("./utillity/responseCode");


const resObj = new apiResponse.ApiResponse()
const resCode = apiResponseCode.ResponseCode
const port = process.env.PORT || config.get('server.port')
const host = config.get('server.host')

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()


app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: 'keyboard cat',
    resave: false,
  })
)

// app.use(SessionConfig)
app.set('trust proxy', 1);
app.use("/admin", admin.router)
app.use("/usr", user.router)
app.use("/", publicRoute.router)

app.all("*", (req: Request, res: Response) => {
    
  res.status(404).json(resObj.Error( resCode.NOTFOUND))
})


app.listen(port, host, () => {
  console.log(`Application is running on  ${host}:${port}.`);
});