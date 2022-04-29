const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/angularfullstack',
  () => {
    console.log('connected');
  },
  (e: String) => console.error(e)
);

const app = express();
app.set('port', process.env.PORT || 3000);

//rendo statica public
app.use(express.static(path.join(__dirname, '../public')));

app.listen(app.get('port'), () =>
  console.log(`Server started on port ${app.get('port')}`)
);

export {};
