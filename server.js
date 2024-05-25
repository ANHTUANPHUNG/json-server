const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
var cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:8080/',
  credentials:true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
server.use(middlewares);
server.use(router);
server.use(cors(corsOptions))

const PORT = 3300;

server.listen(PORT, () => {
  console.log('JSON Server is running');
  console.log('=> http://localhost:' + PORT);
});
