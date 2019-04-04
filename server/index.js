const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const routes = require('./routes');

// require('dotenv').config();
const app = express();

mongoose.Promise = global.Promise;

// mongoose.connect(
//   process.env.DATABASE,
//   err => err && console.log(err)
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api', routes);
//
// require('./routes/brandRoutes')(app);
// require('./routes/woodRoutes')(app);
// require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || '3005';
app.listen(port, () => console.log('Server running on: ' + port));
