import express from 'express';

const ciphers = {
  test: 'test'
};

const ciphersRouter = express.Router();
ciphersRouter.get('/', (req, res) => {
  res.send(ciphers);
});

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use(express.json());
app.use('/api/ciphers', ciphersRouter);

app.listen(2000);