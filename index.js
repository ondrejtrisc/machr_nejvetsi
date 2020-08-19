import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/machr_nejvetsi')
  .then(() => console.log('Connected to MongoDM'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const cipherSchema = new mongoose.Schema({
  cipherKey: String,
  cipherValue: String
});

const Ciphre = mongoose.model('Ciphre', cipherSchema);

const createCipher = async (cipherKey, cipherValue) => {
  const cipher = new Ciphre({
    cipherKey: cipherKey,
    cipherValue: cipherValue
  });
  await cipher.save();
};

const getCipher = async cipherKey => {
  const cipher = await Ciphre.findOne({cipherKey: cipherKey});
  return cipher;
};

const ciphersRouter = express.Router();

ciphersRouter.post('/', async (req, res) => {
  const cipher = await getCipher(req.body.input);
  res.send(cipher.cipherValue);
});

ciphersRouter.post('/create', (req, res) => {
  createCipher(req.body.cipherKey, req.body.cipherValue);
  res.send('cipher created');
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